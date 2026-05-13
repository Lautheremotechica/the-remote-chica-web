import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'pink' | 'orange' | 'cream';
  className?: string;
}

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  const variants = {
    blue: 'bg-brand-blue/10 text-brand-blue',
    pink: 'bg-brand-pink/10 text-brand-pink',
    orange: 'bg-brand-orange/10 text-brand-orange',
    cream: 'bg-brand-cream text-gray-800',
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
