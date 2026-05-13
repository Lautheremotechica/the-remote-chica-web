import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-5',
    md: 'p-8',
    lg: 'p-10',
  };
  
  const hoverClass = hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : '';
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg transition-all duration-300 ${paddingClasses[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
