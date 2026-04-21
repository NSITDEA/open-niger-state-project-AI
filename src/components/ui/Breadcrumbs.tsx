import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  title: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  if (items.length === 0) return null;

  return (
    <nav className={`breadcrumbs ${className}`} aria-label="breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, index) => (
        <span key={item.path}>
          <span className="breadcrumb-separator">{'>'}</span>
          {index === items.length - 1 ? (
            <span className="breadcrumb-current">{item.title}</span>
          ) : (
            <Link to={item.path}>{item.title}</Link>
          )}
        </span>
      ))}
    </nav>
  );
};
