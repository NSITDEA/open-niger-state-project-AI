import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'accent' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'primary', 
  children, 
  className = '' 
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
};
