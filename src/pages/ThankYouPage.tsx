import { CTAButton } from '../components/CTAButton';
import { CheckCircle } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

export function ThankYouPage({ onNavigate }: ThankYouPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* MOTION NOTES: Hero elements stagger in with ease-out, scale from 0.9 */}
        <div className="mb-8">
          <CheckCircle className="w-16 h-16 text-[var(--success)] mx-auto mb-6" />
          <h1 className="mb-4">Thank You!</h1>
          <p className="text-[var(--subtle)] text-lg mb-8">
            We've received your message and will get back to you within 24 hours. 
            In the meantime, feel free to explore our packages or browse our latest work.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            variant="primary" 
            size="large"
            onClick={() => onNavigate('packages')}
          >
            View Our Packages
          </CTAButton>
          <CTAButton 
            variant="secondary" 
            size="large"
            onClick={() => onNavigate('home')}
          >
            Back to Home
          </CTAButton>
        </div>
      </div>
    </div>
  );
}