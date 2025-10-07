'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, href, ...props }, ref) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
      secondary: 'bg-muted text-card-foreground hover:bg-surface-100 focus:ring-muted-foreground',
      ghost: 'text-foreground/80 hover:bg-muted focus:ring-muted-foreground'
    };
    
    // Size classes
    const sizeClasses = {
      sm: 'h-9 px-4 text-sm rounded-md',
      md: 'h-10 px-6 text-base rounded-lg',
      lg: 'h-12 px-8 text-lg rounded-lg'
    };
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    // If href is provided, render as anchor with smooth scroll
    if (href) {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Handle smooth scroll for internal links
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      };
      
      return (
        <a
          href={href}
          className={combinedClasses}
          onClick={handleClick}
          role="button"
        >
          {children}
        </a>
      );
    }
    
    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
