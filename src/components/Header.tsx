import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CTAButton } from './CTAButton';
import logoImage from 'figma:asset/9d12b4602f885d144400ce9fdb46f033aa77d103.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Packages', page: 'packages' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Care Plans', page: 'care-plans' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/90 backdrop-blur-md border-b border-muted' 
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--color-surface)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderColor: isScrolled ? 'var(--color-border)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="group transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logoImage} 
              alt="RamxDigital - Bespoke Web Design UK" 
              className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-90"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors duration-200`}
                style={{
                  color: currentPage === item.page ? 'var(--accent)' : 'var(--color-subtle)'
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.color = 'var(--color-text)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== item.page) {
                    e.currentTarget.style.color = 'var(--color-subtle)';
                  }
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <CTAButton 
              variant="primary"
              size="medium"
              onClick={() => onNavigate('contact')}
            >
              Book Free Consultation
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: 'var(--color-text)' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: 'var(--color-text)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden py-4 border-t border-muted"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors duration-200`}
                  style={{
                    color: currentPage === item.page ? 'var(--accent)' : 'var(--color-subtle)'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== item.page) {
                      e.currentTarget.style.color = 'var(--color-text)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== item.page) {
                      e.currentTarget.style.color = 'var(--color-subtle)';
                    }
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <CTAButton 
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Book Free Consultation
                </CTAButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}