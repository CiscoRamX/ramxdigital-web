import { Check } from 'lucide-react';
import { CTAButton } from './CTAButton';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
  className?: string;
}

export function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false, 
  onSelect,
  className = '' 
}: PricingCardProps) {
  return (
    <div 
      className={`relative p-8 transition-all duration-300 group hover:scale-105 ${className}`}
      style={{
        backgroundColor: '#111318',
        border: isPopular ? '2px solid #2ECE72' : '2px solid #262A35',
        borderRadius: '12px',
        boxShadow: isPopular ? '0 10px 40px rgba(46, 206, 114, 0.35)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (!isPopular) {
          e.currentTarget.style.border = '2px solid #2ECE72';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(46, 206, 114, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isPopular) {
          e.currentTarget.style.border = '2px solid #262A35';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }
      }}
    >
      {isPopular && (
        <div 
          className="absolute -top-3 left-6 px-3 py-1 text-sm font-medium"
          style={{
            backgroundColor: '#2ECE72',
            color: '#0F1115',
            borderRadius: '999px',
            fontSize: '14px',
            fontWeight: '500',
          }}
        >
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 
          className="font-heading font-bold mb-2 text-2xl" 
          style={{ color: '#F5F7FB' }}
        >
          {title}
        </h3>
        <div className="flex items-baseline space-x-1">
          <span 
            className="text-3xl font-bold" 
            style={{ color: '#F5F7FB' }}
          >
            {price}
          </span>
        </div>
        <p 
          className="mt-2" 
          style={{ color: '#C7CFDC' }}
        >
          {description}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check 
              className="h-5 w-5 flex-shrink-0 mt-0.5" 
              style={{ color: '#22C55E' }} 
            />
            <span style={{ color: '#C7CFDC' }}>{feature}</span>
          </li>
        ))}
      </ul>

      <CTAButton 
        onClick={onSelect}
        className="w-full"
        variant={isPopular ? "primary" : "secondary"}
        size="medium"
      >
        Choose {title}
      </CTAButton>
    </div>
  );
}