import { CTAButton } from './CTAButton';

interface SectionCTAProps {
  title: string;
  description: string;
  primaryText: string;
  primaryAction: () => void;
  secondaryText?: string;
  secondaryAction?: () => void;
  className?: string;
}

export function SectionCTA({
  title,
  description,
  primaryText,
  primaryAction,
  secondaryText,
  secondaryAction,
  className = ''
}: SectionCTAProps) {
  return (
    <div className={`text-center relative ${className}`}>
      {/* Decorative glow behind title */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-64 h-16 rounded-full blur-[40px] opacity-20 pointer-events-none"
        style={{ background: 'var(--grad-glow)' }}
      />
      
      <h2 className="mb-4 relative" style={{ color: 'var(--color-text)' }}>
        {title}
      </h2>
      <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-subtle)' }}>
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <CTAButton variant="primary" size="large" onClick={primaryAction}>
          {primaryText}
        </CTAButton>
        {secondaryText && secondaryAction && (
          <CTAButton variant="secondary" size="large" onClick={secondaryAction}>
            {secondaryText}
          </CTAButton>
        )}
      </div>
    </div>
  );
}