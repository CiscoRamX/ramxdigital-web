import { ProjectCard } from '../components/ProjectCard';
import { SectionTitle } from '../components/SectionTitle';
import { SectionCTA } from '../components/SectionCTA';

interface PortfolioPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const projects = [
    {
      id: 'field-to-fork',
      title: 'Field to Fork Catering',
      description: 'Complete website redesign for Devon catering company, resulting in 40% increase in bookings and improved online presence.',
      image: 'https://images.unsplash.com/photo-1671700024109-e0c243959748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2F0ZXJpbmclMjBmb29kfGVufDF8fHx8MTc1NzIzNjIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web Design', 'WordPress', 'SEO']
    },
    {
      id: 'ibrewit',
      title: 'iBrewit',
      description: 'Custom ecommerce solution using SureCart for brewing equipment retailer, featuring 0% transaction fees and streamlined checkout.',
      image: 'https://images.unsplash.com/photo-1748895177768-b4a54b9c2954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmV3aW5nJTIwZXF1aXBtZW50JTIwY29mZmVlfGVufDF8fHx8MTc1NzIzNjIxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Ecommerce', 'SureCart', 'WordPress']
    },
    {
      id: 'devon-tech',
      title: 'Devon Tech Solutions',
      description: 'Modern B2B website for tech consultancy with focus on lead generation and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1735825764485-93a381fd5779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMHdlYnNpdGV8ZW58MXx8fHwxNzU3MTYyMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web Design', 'Lead Generation', 'B2B']
    },
    {
      id: 'creative-studio',
      title: 'Creative Studio Portfolio',
      description: 'Striking portfolio website for creative agency with custom animations and interactive elements.',
      image: 'https://images.unsplash.com/photo-1742540531234-146d41a8833b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTcyMzYwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Portfolio', 'Creative', 'Animation']
    },
    {
      id: 'wellness-center',
      title: 'Wellness Center',
      description: 'Calming and professional website for wellness center with booking system integration and class schedules.',
      image: 'https://images.unsplash.com/photo-1676204831270-fb24cd66bcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzEzMzcwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web Design', 'Booking System', 'Wellness']
    },
    {
      id: 'luxury-retail',
      title: 'Luxury Retail Store',
      description: 'High-end ecommerce platform with premium user experience and seamless SureCart integration.',
      image: 'https://images.unsplash.com/photo-1688561809321-e51e8a4d6651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzdG9yZXxlbnwxfHx8fDE3NTcyMzYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Ecommerce', 'Luxury', 'SureCart']
    }
  ];

  const handleProjectClick = (projectId: string) => {
    onNavigate('case-study', { caseStudyId: projectId });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-text mb-8">
              Our Portfolio
            </h1>
            
            <p className="text-subtle text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Explore our recent projects showcasing bespoke web design, custom WordPress development, and SureCart ecommerce solutions that deliver real results for UK businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Featured Projects"
            subtitle="Recent work that showcases our approach and results"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Our Approach"
            subtitle="How we deliver exceptional results for every project"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">1</span>
              </div>
              <h3 className="font-heading font-bold text-text mb-4">Discovery & Strategy</h3>
              <p className="text-subtle">Deep dive into your business goals, target audience, and competitive landscape to create a strategic foundation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">2</span>
              </div>
              <h3 className="font-heading font-bold text-text mb-4">Design & Development</h3>
              <p className="text-subtle">Custom design and development focused on user experience, conversion optimization, and your brand identity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">3</span>
              </div>
              <h3 className="font-heading font-bold text-text mb-4">Launch & Optimize</h3>
              <p className="text-subtle">Strategic launch with performance monitoring, SEO optimization, and ongoing refinements for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Results That Matter"
            subtitle="Real outcomes from our recent projects"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-lg border text-center"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--muted)',
              }}
            >
              <div className="text-4xl font-bold text-accent mb-2">40%</div>
              <h3 className="font-heading font-bold text-text mb-2">Booking Increase</h3>
              <p className="text-subtle">Field to Fork Catering saw 40% more bookings within 3 months of launch</p>
            </div>
            
            <div 
              className="p-8 rounded-lg border text-center"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--muted)',
              }}
            >
              <div className="text-4xl font-bold text-accent mb-2">0%</div>
              <h3 className="font-heading font-bold text-text mb-2">Transaction Fees</h3>
              <p className="text-subtle">SureCart integration saves businesses thousands in transaction fees annually</p>
            </div>
            
            <div 
              className="p-8 rounded-lg border text-center"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--muted)',
              }}
            >
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <h3 className="font-heading font-bold text-text mb-2">Client Satisfaction</h3>
              <p className="text-subtle">Every client project delivered on time and within budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Technologies We Use"
            subtitle="Modern tools and platforms for exceptional results"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-heading font-bold text-text mb-2">WordPress</h3>
              <p className="text-subtle text-sm">Custom development</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-text mb-2">SureCart</h3>
              <p className="text-subtle text-sm">0% transaction fees</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-text mb-2">Stripe</h3>
              <p className="text-subtle text-sm">Secure payments</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-text mb-2">Google Analytics</h3>
              <p className="text-subtle text-sm">Performance tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionCTA
            title="Ready to create something amazing?"
            description="Let's discuss your project and explore how we can help bring your vision to life."
            primaryText="Start Your Project"
            primaryAction={() => onNavigate('contact')}
            secondaryText="View Packages"
            secondaryAction={() => onNavigate('packages')}
          />
        </div>
      </section>
    </div>
  );
}