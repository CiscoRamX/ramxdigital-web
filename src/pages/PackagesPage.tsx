import { Check, X } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { PricingCard } from '../components/PricingCard';
import { CTAButton } from '../components/CTAButton';
import { CTABar } from '../components/CTABar';

interface PackagesPageProps {
  onNavigate: (page: string) => void;
}

export function PackagesPage({ onNavigate }: PackagesPageProps) {
  const comparisonFeatures = [
    {
      feature: "Bespoke design (no templates)",
      essential: true,
      growth: true,
      ecommerce: true,
    },
    {
      feature: "0% ecommerce fees via SureCart",
      essential: false,
      growth: false,
      ecommerce: true,
    },
    {
      feature: "AI-Ready SEO included",
      essential: true,
      growth: true,
      ecommerce: true,
    },
    {
      feature: "Google Analytics setup",
      essential: true,
      growth: true,
      ecommerce: true,
    },
    {
      feature: "Lead generation forms",
      essential: false,
      growth: true,
      ecommerce: true,
    },
    {
      feature: "Advanced conversion tracking",
      essential: false,
      growth: true,
      ecommerce: true,
    },
    {
      feature: "Product management system",
      essential: false,
      growth: false,
      ecommerce: true,
    },
    {
      feature: "Payment gateway integration",
      essential: false,
      growth: false,
      ecommerce: true,
    },
    {
      feature: "Inventory management",
      essential: false,
      growth: false,
      ecommerce: true,
    },
    {
      feature: "Priority support",
      essential: false,
      growth: true,
      ecommerce: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-text mb-8">
              Bespoke Web Design Packages UK
            </h1>
            
            <p className="text-subtle text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Choose the perfect package for your business needs. All packages include bespoke design, AI-Ready SEO, and complete ownership of your website.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Essential Presence"
              price="From £1,000"
              description="Perfect for small businesses and startups"
              features={[
                "Up to 5 pages",
                "Custom WordPress design",
                "Mobile responsive",
                "Performance optimised",
                "Google Analytics setup",
                "Basic SEO setup",
                "Launch kit included",
                "3 months support"
              ]}
              onSelect={() => onNavigate('contact')}
            />
            
            <PricingCard
              title="Growth Website"
              price="From £2,500"
              description="For businesses ready to scale"
              features={[
                "Up to 15 pages",
                "Advanced site architecture",
                "Lead generation forms",
                "Advanced conversion tracking",
                "CRO optimization",
                "AI-Ready SEO",
                "6 months support",
                "Priority support"
              ]}
              isPopular
              onSelect={() => onNavigate('contact')}
            />
            
            <PricingCard
              title="Ecommerce"
              price="From £5,000"
              description="Complete online store solution"
              features={[
                "SureCart integration",
                "0% transaction fees",
                "Stripe & PayPal setup",
                "Product management",
                "Inventory system",
                "Conversion optimised",
                "12 months support",
                "Priority support"
              ]}
              onSelect={() => onNavigate('contact')}
            />
          </div>
        </div>
      </section>

      {/* Package Comparison Table */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Package Comparison"
            subtitle="Compare features across all packages"
            centered
            className="mb-16 text-center"
          />
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-4 font-heading font-bold text-text">Feature</th>
                  <th className="text-center py-4 font-heading font-bold text-text">Essential</th>
                  <th className="text-center py-4 font-heading font-bold text-text">Growth</th>
                  <th className="text-center py-4 font-heading font-bold text-text">Ecommerce</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-muted/50">
                    <td className="py-4 text-subtle">{item.feature}</td>
                    <td className="py-4 text-center">
                      {item.essential ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted mx-auto" />
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {item.growth ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted mx-auto" />
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {item.ecommerce ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="What's Included in Every Package"
            subtitle="Core features that come standard with all our packages"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-2">Bespoke Design</h3>
              <p className="text-subtle">Custom design tailored to your brand, no templates</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-2">Complete Ownership</h3>
              <p className="text-subtle">You own your website and all content completely</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-2">AI-Ready SEO</h3>
              <p className="text-subtle">Optimised for both traditional and AI search</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-2">UK Support</h3>
              <p className="text-subtle">Devon-based support during UK business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Optional Add-ons"
            subtitle="Enhance your package with these additional services"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--muted)',
              }}
            >
              <h3 className="font-heading font-bold text-text mb-4">Content Creation</h3>
              <p className="text-subtle mb-4">Professional copywriting and content strategy</p>
              <div className="text-accent font-medium">From £500</div>
            </div>
            
            <div 
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--muted)',
              }}
            >
              <h3 className="font-heading font-bold text-text mb-4">Branding Package</h3>
              <p className="text-subtle mb-4">Logo design and brand identity development</p>
              <div className="text-accent font-medium">From £1,500</div>
            </div>
            
            <div 
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--muted)',
              }}
            >
              <h3 className="font-heading font-bold text-text mb-4">Rush Delivery</h3>
              <p className="text-subtle mb-4">Accelerated timeline for urgent projects</p>
              <div className="text-accent font-medium">+50% package price</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <h2 className="font-heading font-bold text-text mb-6">
            Ready to choose your package?
          </h2>
          <p className="text-subtle text-lg mb-8 leading-relaxed">
            Not sure which package is right for you? Book a free consultation and we'll help you choose the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="primary"
              size="large"
              onClick={() => onNavigate('contact')}
            >
              Book Free Consultation
            </CTAButton>
            <CTAButton 
              variant="secondary"
              size="large"
              onClick={() => onNavigate('portfolio')}
            >
              View Our Work
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Mobile CTA Bar */}
      <CTABar
        text="Ready? Let's talk."
        buttonText="Get Started"
        onAction={() => onNavigate('contact')}
        showAfterScroll={600}
      />
    </div>
  );
}