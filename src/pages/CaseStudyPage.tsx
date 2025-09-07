import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Chip } from '../components/Chip';

interface CaseStudyPageProps {
  projectId: string | null;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export function CaseStudyPage({ projectId, onNavigate }: CaseStudyPageProps) {
  // Mock project data - in real app this would come from a CMS or API
  const projects: Record<string, any> = {
    'field-to-fork': {
      title: 'Field to Fork Catering',
      subtitle: 'Transforming a local catering business with conversion-focused web design',
      services: ['Web Design', 'WordPress Development', 'SEO Optimization'],
      client: 'Field to Fork Catering, Exeter',
      timeline: '6 weeks',
      metrics: [
        { label: 'Booking Increase', value: '40%', description: 'within 3 months' },
        { label: 'Page Load Speed', value: '2.1s', description: 'improved performance' },
        { label: 'Mobile Traffic', value: '65%', description: 'mobile optimization' }
      ],
      overview: 'Field to Fork Catering needed a modern, professional website that could showcase their premium catering services and convert visitors into customers. The existing site was outdated and not generating leads effectively.',
      challenges: 'The main challenges included an outdated design that didn\'t reflect their premium service quality, poor mobile experience, slow loading times, and lack of clear calls-to-action for potential customers.',
      approach: 'We created a clean, elegant design that showcases their food photography prominently. The new site features streamlined navigation, clear service descriptions, an easy-to-use contact form, and mobile-first responsive design.',
      outcome: 'The new website launched successfully and immediately began generating more qualified leads. The client reported a 40% increase in bookings within the first three months, with particular improvements in mobile inquiries.',
      testimonial: 'RamxDigital transformed our online presence completely. The new website not only looks fantastic but has increased our bookings by 40%. Cisco\'s attention to detail and clear communication made the whole process seamless.',
      images: [
        'https://images.unsplash.com/photo-1671700024109-e0c243959748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2F0ZXJpbmclMjBmb29kfGVufDF8fHx8MTc1NzIzNjIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1676204831270-fb24cd66bcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzEzMzcwOXww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    'ibrewit': {
      title: 'iBrewit',
      subtitle: 'Custom ecommerce solution with 0% transaction fees using SureCart',
      services: ['Ecommerce Development', 'SureCart Integration', 'Payment Setup'],
      client: 'iBrewit, Online Brewing Equipment Retailer',
      timeline: '8 weeks',
      metrics: [
        { label: 'Transaction Fees Saved', value: '0%', description: 'vs 2.9% industry standard' },
        { label: 'Conversion Rate', value: '3.2%', description: 'optimized checkout' },
        { label: 'Cart Abandonment', value: '-45%', description: 'streamlined process' }
      ],
      overview: 'iBrewit required a modern ecommerce platform that could handle their brewing equipment inventory while minimizing transaction costs. They wanted to move away from expensive platforms with high monthly fees.',
      challenges: 'The challenges included high transaction fees eating into profit margins, complex product variants for brewing equipment, need for detailed product specifications, and integration with existing inventory systems.',
      approach: 'We implemented SureCart for 0% transaction fees, created detailed product pages with specifications and reviews, built a streamlined checkout process, and integrated with Stripe and PayPal for secure payments.',
      outcome: 'The new ecommerce platform significantly reduced operational costs while improving user experience. The streamlined checkout process reduced cart abandonment by 45% and increased overall conversion rates.',
      testimonial: 'The SureCart integration has saved us thousands in transaction fees. The new site looks professional and our customers love how easy it is to find and purchase the equipment they need.',
      images: [
        'https://images.unsplash.com/photo-1748895177768-b4a54b9c2954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmV3aW5nJTIwZXF1aXBtZW50JTIwY29mZmVlfGVufDF8fHx8MTc1NzIzNjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1688561809321-e51e8a4d6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzdG9yZXxlbnwxfHx8fDE3NTcyMzYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    }
  };

  const project = projectId ? projects[projectId] : null;
  const projectIds = Object.keys(projects);
  const currentIndex = projectId ? projectIds.indexOf(projectId) : -1;
  const nextProjectId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : projectIds[0];
  const prevProjectId = currentIndex > 0 ? projectIds[currentIndex - 1] : projectIds[projectIds.length - 1];

  if (!project) {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <h1 className="font-heading font-bold text-text mb-8">Project Not Found</h1>
          <p className="text-subtle mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => onNavigate('portfolio')}>
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <Button
            variant="ghost"
            onClick={() => onNavigate('portfolio')}
            className="mb-8 text-subtle hover:text-text"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-text mb-4">
              {project.title}
            </h1>
            
            <p className="text-subtle text-xl leading-relaxed mb-8">
              {project.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.services.map((service: string, index: number) => (
                <Chip key={index}>{service}</Chip>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <span className="text-subtle">Client:</span>
                <div className="text-text font-medium">{project.client}</div>
              </div>
              <div>
                <span className="text-subtle">Timeline:</span>
                <div className="text-text font-medium">{project.timeline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.metrics.map((metric: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                <h3 className="font-heading font-bold text-text mb-1">{metric.label}</h3>
                <p className="text-subtle text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="space-y-16">
            {/* Overview */}
            <div>
              <h2 className="font-heading font-bold text-text mb-6">Overview</h2>
              <p className="text-subtle leading-relaxed">{project.overview}</p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="font-heading font-bold text-text mb-6">Challenges</h2>
              <p className="text-subtle leading-relaxed">{project.challenges}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="font-heading font-bold text-text mb-6">Approach</h2>
              <p className="text-subtle leading-relaxed">{project.approach}</p>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="font-heading font-bold text-text mb-6">Outcome</h2>
              <p className="text-subtle leading-relaxed">{project.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="font-heading font-bold text-text mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <div 
            className="p-8 rounded-lg border text-center"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--muted)',
            }}
          >
            <blockquote className="text-xl text-text leading-relaxed mb-6">
              "{project.testimonial}"
            </blockquote>
            <div className="text-subtle">— {project.client}</div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => onNavigate('case-study', { caseStudyId: prevProjectId })}
              className="flex items-center"
              style={{
                borderColor: 'var(--muted)',
                color: 'var(--subtle)',
              }}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Project
            </Button>
            
            <Button
              onClick={() => onNavigate('contact')}
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--text)',
              }}
            >
              Start Your Project
            </Button>
            
            <Button
              variant="outline"
              onClick={() => onNavigate('case-study', { caseStudyId: nextProjectId })}
              className="flex items-center"
              style={{
                borderColor: 'var(--muted)',
                color: 'var(--subtle)',
              }}
            >
              Next Project
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}