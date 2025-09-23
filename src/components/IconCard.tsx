import { ReactNode } from 'react';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({ icon, title, description, className = '' }: IconCardProps) {
  return (
    <div 
      className={`p-6 rounded-lg border transition-all duration-300 hover:border-accent group ${className}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-heading font-bold mb-3" style={{ color: 'var(--color-text)' }}>{title}</h3>
      <p className="leading-relaxed" style={{ color: 'var(--color-subtle)' }}>{description}</p>
    </div>
  );
}