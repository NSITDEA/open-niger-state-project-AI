import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'pill';
  to?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  to, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};
