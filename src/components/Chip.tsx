import { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  variant?: 'filled' | 'outline';
  className?: string;
}

export function Chip({ children, variant = 'filled', className = '' }: ChipProps) {
  const baseStyles = `
    inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium 
    transition-all duration-[var(--dur-2)] ease-[var(--ease)]
    hover:-translate-y-0.5
  `;

  return (
    <span 
      className={`${baseStyles} ${className}`}
      style={{
        backgroundColor: variant === 'filled' ? 'var(--muted)' : 'transparent',
        borderColor: variant === 'outline' ? 'var(--muted)' : 'transparent',
        color: variant === 'filled' ? 'var(--text)' : 'var(--subtle)',
        border: variant === 'outline' ? '1px solid var(--muted)' : 'none',
        ...(variant === 'outline' && {
          ':hover': {
            color: 'var(--text)',
            borderColor: 'var(--accent)'
          }
        })
      }}
    >
      {children}
    </span>
  );
}