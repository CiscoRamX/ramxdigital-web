import { useState, useEffect } from 'react';
import { CTAButton } from './CTAButton';
import { X } from 'lucide-react';

interface CTABarProps {
  text: string;
  buttonText: string;
  onAction: () => void;
  showAfterScroll?: number; // Show after scrolling X pixels
}

export function CTABar({ 
  text, 
  buttonText, 
  onAction, 
  showAfterScroll = 600 
}: CTABarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= showAfterScroll) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)] border-t border-[var(--muted)] p-4 shadow-2xl">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm flex-1">{text}</p>
        <div className="flex items-center gap-2">
          <CTAButton variant="primary" size="small" onClick={onAction}>
            {buttonText}
          </CTAButton>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-[var(--subtle)] hover:text-[var(--text)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}