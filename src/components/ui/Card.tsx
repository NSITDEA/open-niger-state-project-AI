import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'accent';
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  return (
    <div className={`card card-${variant} ${className}`}>
      {children}
    </div>
  );
};
