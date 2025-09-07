interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, centered = false, className = '' }: SectionTitleProps) {
  return (
    <div className={`space-y-4 relative ${centered ? 'text-center' : ''} ${className}`}>
      {/* Decorative gradient glow for section intros */}
      <div 
        className="absolute -top-8 left-0 w-32 h-8 rounded-full blur-[30px] opacity-20 pointer-events-none"
        style={{ background: 'var(--grad-glow)' }}
      />
      
      <h2 
        className="relative" 
        style={{ 
          color: 'var(--color-text)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-h2)',
          fontWeight: '700',
          lineHeight: 'var(--text-h2-lh)'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`max-w-2xl ${centered ? 'text-center mx-auto' : ''}`}
          style={{ 
            color: 'var(--color-subtle)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body)',
            fontWeight: '400',
            lineHeight: 'var(--text-body-lh)'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}