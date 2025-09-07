import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Bespoke Web Design', page: 'packages' },
      { name: 'SureCart Ecommerce', page: 'packages' },
      { name: 'Care Plans', page: 'care-plans' },
    ],
    company: [
      { name: 'About Us', page: 'about' },
      { name: 'Portfolio', page: 'portfolio' },
      { name: 'Contact', page: 'contact' },
    ],
    legal: [
      { name: 'Privacy Policy', page: 'privacy' },
      { name: 'Terms of Service', page: 'terms' },
    ],
  };

  return (
    <footer 
      className="border-t pt-16 pb-8"
      style={{ 
        backgroundColor: 'var(--color-surface)', 
        borderColor: 'var(--color-border)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)' }}
              >
                <span className="font-bold text-sm" style={{ color: 'var(--cta-text)' }}>R</span>
              </div>
              <span className="font-heading font-bold text-xl" style={{ color: 'var(--color-text)' }}>
                RamxDigital
              </span>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-subtle)' }}>
              Boutique web design studio in Devon, UK. Creating bespoke websites that convert visitors into customers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                <span style={{ color: 'var(--color-subtle)' }}>Devon, UK</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                <a 
                  href="mailto:hello@ramxdigital.com"
                  className="transition-colors"
                  style={{ color: 'var(--color-subtle)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-subtle)'}
                >
                  hello@ramxdigital.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold mb-4" style={{ color: 'var(--color-text)' }}>Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="transition-colors"
                    style={{ color: 'var(--color-subtle)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-subtle)'}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold mb-4" style={{ color: 'var(--color-text)' }}>Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="transition-colors"
                    style={{ color: 'var(--color-subtle)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-subtle)'}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold mb-4" style={{ color: 'var(--color-text)' }}>Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="transition-colors"
                    style={{ color: 'var(--color-subtle)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-subtle)'}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-subtle)' }}>
            © {currentYear} RamxDigital. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-sm" style={{ color: 'var(--color-subtle)' }}>Devon-based • UK business hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
}