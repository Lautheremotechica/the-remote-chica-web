import { Resend } from 'resend';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set, email sending will fail');
    // Return a dummy Resend for build purposes
    return new Resend('re_dummy_key');
  }
  
  return new Resend(apiKey);
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    const resend = getResend();
    const data = await resend.emails.send({
      from: 'The Remote Chica <noreply@yoviajoytrabajo.com>',
      to: [to],
      subject,
      html,
      replyTo,
    });
    
    return { success: true, data };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}

export function formatWorkshopEmail(data: any, locale: string) {
  const isSpanish = locale === 'es';
  
  return `
    <h2>${isSpanish ? 'Nueva solicitud de taller' : 'New workshop request'}</h2>
    <p><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${data.name}</p>
    <p><strong>${isSpanish ? 'Institución' : 'Institution'}:</strong> ${data.institution}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>${isSpanish ? 'País' : 'Country'}:</strong> ${data.country}</p>
    <p><strong>${isSpanish ? 'Tipo de evento' : 'Event type'}:</strong> ${data.eventType}</p>
    ${data.eventDate ? `<p><strong>${isSpanish ? 'Fecha tentativa' : 'Tentative date'}:</strong> ${data.eventDate}</p>` : ''}
    <p><strong>${isSpanish ? 'Mensaje' : 'Message'}:</strong></p>
    <p>${data.message}</p>
  `;
}

export function formatSpeakerEmail(data: any, locale: string) {
  const isSpanish = locale === 'es';
  
  return `
    <h2>${isSpanish ? 'Nueva solicitud de speaker' : 'New speaker request'}</h2>
    <p><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${data.name}</p>
    <p><strong>${isSpanish ? 'Empresa/Evento' : 'Company/Event'}:</strong> ${data.company}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>${isSpanish ? 'Formato' : 'Format'}:</strong> ${data.format}</p>
    <p><strong>${isSpanish ? 'Audiencia' : 'Audience'}:</strong> ${data.audience}</p>
    <p><strong>${isSpanish ? 'Tema' : 'Topic'}:</strong> ${data.topic}</p>
    ${data.budget ? `<p><strong>${isSpanish ? 'Presupuesto' : 'Budget'}:</strong> ${data.budget}</p>` : ''}
    <p><strong>${isSpanish ? 'Mensaje' : 'Message'}:</strong></p>
    <p>${data.message}</p>
  `;
}

export function formatCollaborationEmail(data: any, locale: string) {
  const isSpanish = locale === 'es';
  
  return `
    <h2>${isSpanish ? 'Nueva propuesta de colaboración' : 'New collaboration proposal'}</h2>
    <p><strong>${isSpanish ? 'Nombre' : 'Name'}:</strong> ${data.name}</p>
    <p><strong>${isSpanish ? 'Marca/Empresa' : 'Brand/Company'}:</strong> ${data.brand}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>${isSpanish ? 'Tipo' : 'Type'}:</strong> ${data.type}</p>
    <p><strong>${isSpanish ? 'Propuesta' : 'Proposal'}:</strong></p>
    <p>${data.message}</p>
  `;
}

export function formatCommunityAccessEmail(email: string, telegramLink: string, locale: string) {
  const isSpanish = locale === 'es';
  
  return `
    <h2>${isSpanish ? '¡Bienvenida a la comunidad!' : 'Welcome to the community!'}</h2>
    <p>${isSpanish 
      ? 'Gracias por unirte a nuestra comunidad de ofertas de trabajo remoto.' 
      : 'Thank you for joining our remote job opportunities community.'
    }</p>
    
    <p><strong>${isSpanish ? 'Tu enlace de acceso a Telegram:' : 'Your Telegram access link:'}</strong></p>
    <p><a href="${telegramLink}" style="background: #c73960; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 16px 0;">
      ${isSpanish ? 'Unirme al grupo' : 'Join the group'}
    </a></p>
    
    <p style="color: #666; font-size: 14px;">
      ${isSpanish 
        ? 'Este enlace es único y de un solo uso. Si tienes problemas para acceder, escríbeme a laura@yoviajoytrabajo.com' 
        : 'This link is unique and single-use. If you have issues accessing, write to me at laura@yoviajoytrabajo.com'
      }
    </p>
  `;
}
