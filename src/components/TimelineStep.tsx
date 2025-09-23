interface TimelineStepProps {
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function TimelineStep({ 
  step, 
  title, 
  description, 
  isLast = false,
  className = '' 
}: TimelineStepProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Step indicator */}
      <div className="flex items-start space-x-6">
        <div className="flex flex-col items-center">
          <div 
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg"
            style={{
              borderColor: 'var(--accent)',
              backgroundColor: 'var(--accent)',
              color: 'var(--text)',
            }}
          >
            {step}
          </div>
          {!isLast && (
            <div 
              className="w-0.5 h-16 mt-4"
              style={{ backgroundColor: 'var(--muted)' }}
            />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 pb-8">
          <h3 className="font-heading font-bold text-text mb-2">{title}</h3>
          <p className="text-subtle leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}