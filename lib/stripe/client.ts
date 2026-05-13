import Stripe from 'stripe';

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-04-22.dahlia',
    typescript: true,
  });
}

export async function createCheckoutSession(
  priceId: string,
  locale: string,
  customerEmail?: string
) {
  const stripe = getStripe();
  
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    customer_email: customerEmail,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/${locale}/comunidad/exito?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/${locale}/comunidad/cancelado`,
    metadata: {
      locale,
    },
  });
  
  return session;
}

export function getStripeForWebhook() {
  return getStripe();
}
