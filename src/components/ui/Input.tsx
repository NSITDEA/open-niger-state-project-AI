import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="form-group">
      {label && <label className="label">{label}</label>}
      <div style={{ position: 'relative' }}>
        {icon && (
          <div className="input-icon">
            {icon}
          </div>
        )}
        <input 
          className={`input ${icon ? 'has-icon' : ''} ${error ? 'has-error' : ''} ${className}`} 
          {...props} 
        />
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};
