import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe/client';

export async function POST(request: NextRequest) {
  try {
    const { priceId, locale } = await request.json();
    
    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }
    
    const session = await createCheckoutSession(priceId, locale);
    
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Create checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
