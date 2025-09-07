import { Check, X, Shield, Clock, Users } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { PricingCard } from '../components/PricingCard';
import { FAQItem } from '../components/FAQItem';
import { CTAButton } from '../components/CTAButton';

interface CarePlansPageProps {
  onNavigate: (page: string) => void;
}

export function CarePlansPage({ onNavigate }: CarePlansPageProps) {
  const planFeatures = {
    included: [
      'Security updates and monitoring',
      'Performance optimization',
      'Regular backups',
      'Uptime monitoring',
      'Basic content updates',
      'Email support',
      'Monthly performance reports'
    ],
    outOfScope: [
      'Major design changes',
      'New page creation',
      'Custom development',
      'Third-party integrations',
      'Content writing',
      'Marketing campaigns',
      'Training sessions'
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-text mb-8">
              RamxDigital Care Plans
            </h1>
            
            <p className="text-subtle text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Keep your website secure, fast, and up-to-date with our comprehensive care plans. Focus on your business while we handle the technical details.
            </p>
          </div>
        </div>
      </section>

      {/* Care Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Care Basic"
              price="£49/month"
              description="Essential maintenance for small sites"
              features={[
                "Security updates",
                "Weekly backups",
                "Uptime monitoring",
                "Basic support",
                "Performance checks",
                "Monthly reports"
              ]}
              onSelect={() => onNavigate('contact')}
            />
            
            <PricingCard
              title="Care Plus"
              price="£99/month"
              description="Enhanced support for growing businesses"
              features={[
                "Everything in Basic",
                "Priority support",
                "Content updates (2 hours)",
                "Performance optimization",
                "SEO monitoring",
                "Plugin management",
                "Bi-weekly reports"
              ]}
              isPopular
              onSelect={() => onNavigate('contact')}
            />
            
            <PricingCard
              title="Care Premium"
              price="£149/month"
              description="Comprehensive care for busy businesses"
              features={[
                "Everything in Plus",
                "Content updates (4 hours)",
                "Design tweaks",
                "Emergency support",
                "Advanced analytics",
                "A/B testing",
                "Weekly reports"
              ]}
              onSelect={() => onNavigate('contact')}
            />
          </div>
          
          {/* CTA under pricing */}
          <div className="text-center mt-12">
            <CTAButton 
              variant="primary"
              size="large"
              onClick={() => onNavigate('contact')}
            >
              Choose Your Plan
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What's Included vs Out of Scope */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="What's Included"
            subtitle="Clear guidelines on what our care plans cover"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Included */}
            <div 
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--success)',
              }}
            >
              <div className="flex items-center mb-6">
                <Check className="h-6 w-6 text-success mr-3" />
                <h3 className="font-heading font-bold text-text">What's Included</h3>
              </div>
              <ul className="space-y-3">
                {planFeatures.included.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-subtle">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Out of Scope */}
            <div 
              className="p-8 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--muted)',
              }}
            >
              <div className="flex items-center mb-6">
                <X className="h-6 w-6 text-muted mr-3" />
                <h3 className="font-heading font-bold text-text">Out of Scope</h3>
              </div>
              <ul className="space-y-3">
                {planFeatures.outOfScope.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-muted flex-shrink-0 mt-0.5" />
                    <span className="text-subtle">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-subtle text-sm mt-6 italic">
                These services are available as separate projects with custom quotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Care Plans */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Why Choose Our Care Plans"
            subtitle="Peace of mind for your website's ongoing success"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-4">Security First</h3>
              <p className="text-subtle">Regular security updates, monitoring, and backups to protect your website from threats and data loss.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-4">Always Online</h3>
              <p className="text-subtle">24/7 uptime monitoring ensures your website is always available when your customers need it most.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-text mb-4">Expert Support</h3>
              <p className="text-subtle">Direct access to Cisco for all your website needs, with UK business hours support and fast response times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <div 
            className="p-8 rounded-lg border"
            style={{
              backgroundColor: 'var(--bg)',
              borderColor: 'var(--accent)',
            }}
          >
            <h2 className="font-heading font-bold text-text mb-4">
              Save 30% on Your First Year
            </h2>
            <p className="text-subtle text-lg mb-6">
              Subscribe to any annual care plan and save 30% on your first year. Cancel anytime with 30 days notice.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span className="text-subtle">Basic: £49/month → £34/month</span>
              <span className="text-subtle">Plus: £99/month → £69/month</span>
              <span className="text-subtle">Premium: £149/month → £104/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Care Plan FAQs"
            subtitle="Common questions about our maintenance services"
            centered
            className="mb-16 text-center"
          />
          
          <div className="space-y-0">
            <FAQItem
              question="How does the first-year saving work?"
              answer="When you pay annually for any care plan, you receive a 30% discount on the first year. After the first year, pricing returns to standard monthly rates, but you can continue paying annually for convenience."
            />
            <FAQItem
              question="Can I upgrade or downgrade my plan?"
              answer="Yes, you can change your care plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll pro-rate any differences."
            />
            <FAQItem
              question="What's your cancellation policy?"
              answer="You can cancel your care plan at any time with 30 days written notice. Annual subscribers can cancel at their renewal date. There are no long-term contracts or cancellation fees."
            />
            <FAQItem
              question="What happens in an emergency?"
              answer="Care Plus and Premium subscribers get priority emergency support with response within 2 hours during UK business hours. We'll restore your site from backups if needed and fix critical issues immediately."
            />
            <FAQItem
              question="Do you work on websites you didn't build?"
              answer="Yes, we can provide care plans for websites built by other developers. We'll need to audit the site first to understand the setup and may require additional setup time."
            />
          </div>
          
          {/* CTA under FAQs */}
          <div className="text-center mt-12">
            <CTAButton 
              variant="primary"
              size="large"
              onClick={() => onNavigate('contact')}
            >
              Get Started Today
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <h2 className="font-heading font-bold text-text mb-6">
            Ready to protect your website?
          </h2>
          <p className="text-subtle text-lg mb-8 leading-relaxed">
            Choose a care plan that fits your needs and let us handle the technical details while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="primary"
              size="large"
              onClick={() => onNavigate('contact')}
            >
              Subscribe Now
            </CTAButton>
            <CTAButton 
              variant="secondary"
              size="large"
              onClick={() => onNavigate('contact')}
            >
              Ask Questions
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}