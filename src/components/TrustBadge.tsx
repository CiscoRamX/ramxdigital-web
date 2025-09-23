import { ReactNode } from 'react';

interface TrustBadgeProps {
  icon: ReactNode;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function TrustBadge({ icon, children, variant = 'primary', className = '' }: TrustBadgeProps) {
  const baseStyles = `
    inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium 
    transition-all duration-[var(--dur-2)] ease-[var(--ease)]
    hover:-translate-y-0.5 hover:shadow-lg
    border backdrop-blur-sm
  `;

  const variantStyles = {
    primary: {
      backgroundColor: 'rgba(46, 206, 114, 0.1)',
      borderColor: 'rgba(46, 206, 114, 0.2)',
      color: 'var(--color-text)',
      borderRadius: 'var(--r-pill)',
    },
    secondary: {
      backgroundColor: 'var(--color-surface)',
      borderColor: 'var(--color-border)',
      color: 'var(--color-text)',
      borderRadius: 'var(--r-pill)',
    }
  };

  return (
    <span 
      className={`${baseStyles} ${className}`}
      style={variantStyles[variant]}
    >
      <span className="flex-shrink-0" style={{ color: 'var(--accent)' }}>
        {icon}
      </span>
      <span className="whitespace-nowrap">
        {children}
      </span>
    </span>
  );
}