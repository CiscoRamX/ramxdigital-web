// src/pages/ContactPage.tsx
import { useState } from 'react';
import { Mail, MapPin, Clock, Check } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Chip } from '../components/Chip';
import { CTAButton } from '../components/CTAButton';
import { submitContact } from '../lib/contact';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

// reCAPTCHA
declare global { interface Window { grecaptcha: any; } }

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string;
const RECAPTCHA_SITE_KEY: string | undefined =
  (import.meta.env as any).VITE_RECAPTCHA_SITEKEY || "6LdDf8ErAAAAAEum8aX8W_3fP9L8Lw15jLCfXNwf";

// Carga el script de reCAPTCHA v3 si hace falta
async function loadRecaptcha() {
  if (!RECAPTCHA_SITE_KEY) return;
  if (window.grecaptcha) return;
  await new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('reCAPTCHA failed to load'));
    document.head.appendChild(s);
  });
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  });

  const [hp, setHp] = useState(''); // honeypot
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError(null);

    try {
      setLoading(true);

      // Token de reCAPTCHA v3 (si hay clave configurada)
      let captcha_token: string | undefined;
      if (RECAPTCHA_SITE_KEY) {
        await loadRecaptcha();
        captcha_token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
      }

      await submitContact({ ...formData, hp, captcha_token });
      setIsSubmitted(true);
      setTimeout(() => onNavigate('thank-you'), 1200);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

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
            Thank you for getting in touch. We&rsquo;ll respond within 4 hours during UK business hours.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg border px-4 py-2 text-accent hover:underline"
          >
            Book a 30-min call
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-text mb-8">
              Let&rsquo;s Discuss Your Bespoke Website
            </h1>
            <p className="text-subtle text-lg leading-relaxed mb-8">
              Ready to transform your online presence? Let&rsquo;s have an honest conversation about your project.
              No sales pressure, just clear advice on how we can help your business grow.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {trustChips.map((chip, index) => <Chip key={index}>{chip}</Chip>)}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--muted)' }}>
                <form onSubmit={handleSubmit} className="space-y-6" aria-busy={loading}>
                  {/* Honeypot oculto */}
                  <input
                    type="text"
                    name="company"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        disabled={loading}
                        autoComplete="name"
                        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        disabled={loading}
                        autoComplete="email"
                        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business">Business Name / Website URL</Label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={(e) => handleInputChange('business', e.target.value)}
                      placeholder="Your business name or current website"
                      disabled={loading}
                      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(v) => handleInputChange('budget', v)}
                      disabled={loading}
                    >
                      <SelectTrigger
                        className="w-full"
                        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
                      >
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under £1,000</SelectItem>
                        <SelectItem value="1k-3k">£1,000 – £3,000</SelectItem>
                        <SelectItem value="3k-5k">£3,000 – £5,000</SelectItem>
                        <SelectItem value="5k-10k">£5,000 – £10,000</SelectItem>
                        <SelectItem value="over-10k">Over £10,000</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What do you need? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      required
                      disabled={loading}
                      placeholder="Tell us about your project, goals, and any specific requirements…"
                      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm" role="alert">{error}</p>}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <CTAButton
                      variant="primary"
                      size="large"
                      className="flex-1"
                      type="submit"
                      disabled={loading as any}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </CTAButton>

                    <CTAButton
                      variant="secondary"
                      size="large"
                      href={CALENDLY_URL}
                      className="flex-1"
                    >
                      Book a 30-min call
                    </CTAButton>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar (si lo usas) */}
            <div className="space-y-8">{/* ... */}</div>
          </div>
        </div>
      </section>

      {/* Sección extra si la tienes */}
      <section className="py-20" style={{ backgroundColor: 'var(--surface)' }}>
        {/* ... */}
      </section>
    </div>
  );
}
