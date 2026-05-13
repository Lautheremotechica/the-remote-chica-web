import { NextRequest, NextResponse } from 'next/server';
import { 
  workshopFormSchema, 
  speakerFormSchema, 
  collaborationFormSchema 
} from '@/lib/validation/forms';
import { 
  sendEmail, 
  formatWorkshopEmail, 
  formatSpeakerEmail, 
  formatCollaborationEmail 
} from '@/lib/email/templates';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, locale, ...formData } = body;
    
    // Validate based on form type
    let validatedData;
    let emailHtml;
    let subject;
    
    switch (formType) {
      case 'workshop':
        validatedData = workshopFormSchema.parse(formData);
        emailHtml = formatWorkshopEmail(validatedData, locale);
        subject = locale === 'es' 
          ? `Nueva solicitud de taller - ${validatedData.institution}` 
          : `New workshop request - ${validatedData.institution}`;
        break;
        
      case 'speaker':
        validatedData = speakerFormSchema.parse(formData);
        emailHtml = formatSpeakerEmail(validatedData, locale);
        subject = locale === 'es' 
          ? `Nueva solicitud de speaker - ${validatedData.company}` 
          : `New speaker request - ${validatedData.company}`;
        break;
        
      case 'collaboration':
        validatedData = collaborationFormSchema.parse(formData);
        emailHtml = formatCollaborationEmail(validatedData, locale);
        subject = locale === 'es' 
          ? `Nueva colaboración - ${validatedData.brand}` 
          : `New collaboration - ${validatedData.brand}`;
        break;
        
      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        );
    }
    
    // Send email
    const result = await sendEmail({
      to: process.env.CONTACT_EMAIL || 'laura@yoviajoytrabajo.com',
      subject,
      html: emailHtml,
      replyTo: validatedData.email,
    });
    
    if (!result.success) {
      throw new Error('Failed to send email');
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact form error:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
