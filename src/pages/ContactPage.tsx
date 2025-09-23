// src/pages/ContactPage.tsx
import { Chip } from '../components/Chip';
import { ContactWizard } from '../components/ContactWizard';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

// reCAPTCHA global declaration
declare global { interface Window { grecaptcha: any; } }

export function ContactPage({ onNavigate }: ContactPageProps) {

  const trustChips = [
    'Devon-based',
    'UK business hours',
    'Direct partnership',
    'Plain-English communication'
  ];

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
              <ContactWizard onNavigate={onNavigate} />
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
