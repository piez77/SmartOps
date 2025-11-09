import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-serif-display font-bold tracking-tight">
        <span className="text-brand-purple">Smart</span>
        <span className="font-sans-modern text-brand-charcoal">Ops</span>
      </span>
    </div>
  );
}
