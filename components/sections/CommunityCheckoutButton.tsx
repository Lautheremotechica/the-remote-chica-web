'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface CommunityCheckoutButtonProps {
  locale: string;
  priceId: string;
  label: string;
}

export function CommunityCheckoutButton({ locale, priceId, label }: CommunityCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, locale }),
      });
      
      if (!response.ok) throw new Error('Failed to create checkout');
      
      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err: any) {
      setError(err.message || 'Error processing checkout');
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? (locale === 'es' ? 'Procesando...' : 'Processing...') : label}
      </Button>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
}
