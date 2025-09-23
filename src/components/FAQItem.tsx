import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  className?: string;
}

export function FAQItem({ question, answer, className = '' }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border-b border-muted last:border-b-0 ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-heading font-bold text-text pr-4">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-subtle transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="pb-6 -mt-2">
          <p className="text-subtle leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}