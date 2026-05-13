import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { getStripeForWebhook } from '@/lib/stripe/client';
import { createTelegramInviteLink } from '@/lib/telegram/bot';
import { sendEmail, formatCommunityAccessEmail } from '@/lib/email/templates';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');
    
    if (!signature) {
      return NextResponse.json(
        { error: 'No signature' },
        { status: 400 }
      );
    }
    
    const stripe = getStripeForWebhook();
    
    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }
    
    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Get customer email and locale
      const customerEmail = session.customer_email || session.customer_details?.email;
      const locale = session.metadata?.locale || 'es';
      
      if (!customerEmail) {
        console.error('No customer email in session:', session.id);
        return NextResponse.json(
          { error: 'No customer email' },
          { status: 400 }
        );
      }
      
      try {
        // Create unique Telegram invite link
        const chatId = process.env.TELEGRAM_CHAT_ID!;
        const telegramLink = await createTelegramInviteLink(chatId);
        
        // Send access email with Telegram link
        const emailHtml = formatCommunityAccessEmail(customerEmail, telegramLink, locale);
        await sendEmail({
          to: customerEmail,
          subject: locale === 'es' 
            ? '¡Bienvenida a la comunidad! 🎉' 
            : 'Welcome to the community! 🎉',
          html: emailHtml,
        });
        
        console.log('Community access sent to:', customerEmail);
        
        // Optional: Store in database for tracking
        // await db.communityMembers.create({
        //   email: customerEmail,
        //   stripeSessionId: session.id,
        //   stripeCustomerId: session.customer as string,
        //   telegramLink,
        //   locale,
        //   createdAt: new Date(),
        // });
        
      } catch (error) {
        console.error('Error processing community access:', error);
        // Don't fail the webhook - we can handle this manually if needed
      }
    }
    
    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
