import { Home, Search } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
        {/* 404 Icon */}
        <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
          <Search className="h-12 w-12 text-accent" />
        </div>
        
        <h1 className="font-heading font-bold text-text mb-6">
          Page Not Found
        </h1>
        
        <p className="text-subtle text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            variant="primary"
            size="large"
            onClick={() => onNavigate('home')}
            icon
          >
            Back to Home
          </CTAButton>
        </div>
        
        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-muted">
          <h3 className="font-heading font-bold text-text mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => onNavigate('packages')}
              className="text-subtle hover:text-accent transition-colors"
            >
              Web Design Packages
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-subtle hover:text-accent transition-colors"
            >
              Our Portfolio
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-subtle hover:text-accent transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('care-plans')}
              className="text-subtle hover:text-accent transition-colors"
            >
              Care Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}