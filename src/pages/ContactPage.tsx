import { useState } from 'react';
import { Mail, MapPin, Clock, Check } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { SectionTitle } from '../components/SectionTitle';
import { Chip } from '../components/Chip';
import { CTAButton } from '../components/CTAButton';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Redirect to thank you page after short delay
    setTimeout(() => {
      onNavigate('thank-you');
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const plainEnglishPromises = [
    'No technical jargon in our conversations',
    'Clear project timelines and milestones',
    'Honest advice about what you actually need'
  ];

  const trustChips = [
    'Devon-based',
    'UK business hours',
    'Direct partnership',
    'Plain-English communication'
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-success" />
          </div>
          <h1 className="font-heading font-bold text-text mb-4">Message Sent!</h1>
          <p className="text-subtle text-lg">
            Thank you for getting in touch. We'll respond within 4 hours during UK business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-text mb-8">
              Let's Discuss Your Bespoke Website
            </h1>
            
            <p className="text-subtle text-lg leading-relaxed mb-8">
              Ready to transform your online presence? Let's have an honest conversation about your project. No sales pressure, just clear advice on how we can help your business grow.
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-3 mb-12">
              {trustChips.map((chip, index) => (
                <Chip key={index}>{chip}</Chip>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div 
                className="p-8 rounded-lg border"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--muted)',
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        style={{
                          backgroundColor: 'var(--bg)',
                          borderColor: 'var(--muted)',
                          color: 'var(--text)',
                        }}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        style={{
                          backgroundColor: 'var(--bg)',
                          borderColor: 'var(--muted)',
                          color: 'var(--text)',
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business">Business Name / Website URL</Label>
                    <Input
                      id="business"
                      value={formData.business}
                      onChange={(e) => handleInputChange('business', e.target.value)}
                      placeholder="Your business name or current website"
                      style={{
                        backgroundColor: 'var(--bg)',
                        borderColor: 'var(--muted)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger 
                        className="w-full"
                        style={{
                          backgroundColor: 'var(--bg)',
                          borderColor: 'var(--muted)',
                          color: 'var(--text)',
                        }}
                      >
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under £1,000</SelectItem>
                        <SelectItem value="1k-3k">£1,000 - £3,000</SelectItem>
                        <SelectItem value="3k-5k">£3,000 - £5,000</SelectItem>
                        <SelectItem value="5k-10k">£5,000 - £10,000</SelectItem>
                        <SelectItem value="over-10k">Over £10,000</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What do you need? *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={6}
                      required
                      style={{
                        backgroundColor: 'var(--bg)',
                        borderColor: 'var(--muted)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <CTAButton 
                      variant="primary"
                      size="large"
                      onClick={handleSubmit}
                      className="flex-1"
                    >
                      Send Message
                    </CTAButton>
                    <CTAButton 
                      variant="secondary"
                      size="large"
                      href="mailto:hello@ramxdigital.com"
                      className="flex-1"
                    >
                      Book a 30-min call
                    </CTAButton>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div 
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--muted)',
                }}
              >
                <h3 className="font-heading font-bold text-text mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="text-text font-medium">Email</div>
                      <a 
                        href="mailto:hello@ramxdigital.com"
                        className="text-subtle hover:text-accent transition-colors"
                      >
                        hello@ramxdigital.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="text-text font-medium">Location</div>
                      <div className="text-subtle">Devon, United Kingdom</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="text-text font-medium">Response Time</div>
                      <div className="text-subtle">Within 4 hours (UK hours)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plain-English Promise */}
              <div 
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--muted)',
                }}
              >
                <h3 className="font-heading font-bold text-text mb-4">Our Plain-English Promise</h3>
                <ul className="space-y-3">
                  {plainEnglishPromises.map((promise, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-subtle text-sm">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alternative Contact */}
              <div 
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: 'var(--bg)',
                  borderColor: 'var(--accent)',
                }}
              >
                <h3 className="font-heading font-bold text-text mb-3">Prefer Email?</h3>
                <p className="text-subtle text-sm mb-4">
                  Send us a direct email and we'll get back to you within 4 hours during UK business hours.
                </p>
                <a 
                  href="mailto:hello@ramxdigital.com"
                  className="text-accent hover:underline"
                >
                  hello@ramxdigital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="What Happens Next?"
            subtitle="Our simple process after you get in touch"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-accent">1</span>
              </div>
              <h3 className="font-heading font-bold text-text mb-3">We Respond Fast</h3>
              <p className="text-subtle">Get a personal response from Cisco within 4 hours during UK business hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-accent">2</span>
              </div>
              <h3 className="font-heading font-bold text-text mb-3">Discovery Call</h3>
              <p className="text-subtle">Free 30-minute consultation to understand your needs and provide honest advice.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-accent">3</span>
              </div>
              <h3 className="font-heading font-bold text-text mb-3">Proposal</h3>
              <p className="text-subtle">Detailed proposal with clear timelines, costs, and what you can expect.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}