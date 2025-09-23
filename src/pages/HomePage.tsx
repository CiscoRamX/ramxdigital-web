import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { Monitor, ShoppingCart, Search, Users, Target, Shield, Clock, MapPin, Clock3, Award, Zap } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { Chip } from '../components/Chip';
import { TrustBadge } from '../components/TrustBadge';
import { IconCard } from '../components/IconCard';
import { PricingCard } from '../components/PricingCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { TimelineStep } from '../components/TimelineStep';
import { FAQItem } from '../components/FAQItem';
import { CTAButton } from '../components/CTAButton';
import { SectionCTA } from '../components/SectionCTA';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const glowRef1 = useRef<HTMLDivElement>(null);
  const glowRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // GSAP Hero Animation Timeline
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Animate background glows with parallax effect
    if (glowRef1.current && glowRef2.current) {
      gsap.set([glowRef1.current, glowRef2.current], { 
        opacity: 0,
        scale: 0.8 
      });
      
      tl.to([glowRef1.current, glowRef2.current], {
        opacity: 0.3,
        scale: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3
      }, 0);
      
      // Continuous floating animation for glows
      gsap.to(glowRef1.current, {
        y: -30,
        rotation: 5,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
      });
      
      gsap.to(glowRef2.current, {
        y: 20,
        rotation: -3,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        delay: 1
      });
    }
    
    // Hero content stagger animation
    if (titleRef.current) {
      gsap.set(titleRef.current, { 
        y: 60, 
        opacity: 0 
      });
      
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 0.4);
    }
    
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { 
        y: 40, 
        opacity: 0 
      });
      
      tl.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
      }, 0.6);
    }
    
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { 
        y: 30, 
        opacity: 0 
      });
      
      tl.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, 0.8);
    }
    
    if (chipsRef.current) {
      gsap.set(chipsRef.current, { 
        y: 20, 
        opacity: 0 
      });
      
      tl.to(chipsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      }, 1.0);
    }
    
    // Scroll-triggered parallax effect for glows
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeed = 0.5;
      
      if (glowRef1.current) {
        gsap.to(glowRef1.current, {
          y: scrollY * parallaxSpeed * 0.6,
          duration: 0.3,
          ease: "none"
        });
      }
      
      if (glowRef2.current) {
        gsap.to(glowRef2.current, {
          y: scrollY * parallaxSpeed * -0.4,
          duration: 0.3,
          ease: "none"
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        {/* GSAP NOTES: Hero stagger with advanced parallax glows and smooth entrance animations */}
        {/* Background Art Direction - Animated Glow vectors */}
        <div 
          ref={glowRef1}
          className="absolute top-20 right-0 w-96 h-96 rounded-full blur-[180px] will-change-transform opacity-30"
          style={{
            background: 'var(--grad-glow)',
          }}
        />
        <div 
          ref={glowRef2}
          className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-[120px] will-change-transform opacity-20"
          style={{
            background: 'var(--grad-glow)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <h1 
              ref={titleRef}
              className="font-heading font-bold mb-6"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 'clamp(48px, 6vw, 72px)',
                color: 'var(--color-text)'
              }}
            >
              Bespoke <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Web Design UK</span> & Custom WordPress Development
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-subtle text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Transform your business with bespoke web design UK that converts. Our custom WordPress development delivers fast, search-optimised sites that turn visitors into customers. SureCart ecommerce with 0% transaction fees. Devon-based expertise, UK-wide service.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
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
                onClick={() => onNavigate('packages')}
              >
                View Packages
              </CTAButton>
            </div>
            
            {/* Trust Strip */}
            <div 
              ref={chipsRef}
              className="flex flex-wrap gap-3"
            >
              <TrustBadge icon={<MapPin className="h-4 w-4" />}>
                Devon-based
              </TrustBadge>
              <TrustBadge icon={<Clock3 className="h-4 w-4" />}>
                UK business hours
              </TrustBadge>
              <TrustBadge icon={<Award className="h-4 w-4" />}>
                SureCart specialist
              </TrustBadge>
              <TrustBadge icon={<Zap className="h-4 w-4" />}>
                0% transaction fees
              </TrustBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        {/* MOTION NOTES: Icon cards slide-up sequentially with stagger 80ms */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Premium Web Design UK Services"
            subtitle="Comprehensive digital solutions that drive business growth"
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              icon={<Monitor className="h-6 w-6" />}
              title="Bespoke Web Design UK"
              description="Custom WordPress websites designed to convert visitors into customers. Fast, responsive, and search-optimised."
            />
            <IconCard
              icon={<ShoppingCart className="h-6 w-6" />}
              title="SureCart Ecommerce UK"
              description="0% transaction fee ecommerce stores with SureCart. Stripe and PayPal integration for seamless payments."
            />
            <IconCard
              icon={<Search className="h-6 w-6" />}
              title="AI-Ready SEO"
              description="Future-proof SEO strategies that work with AI search. Get found by your ideal customers online."
            />
          </div>
        </div>
      </section>
      
      {/* See Our Work CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionCTA
            title="See our work in action"
            description="Explore our portfolio of successful web design projects for UK businesses."
            primaryText="View Portfolio"
            primaryAction={() => onNavigate('portfolio')}
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section 
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        {/* Enhanced gradient background with multiple layers */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'var(--grad-glow)' }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ background: 'linear-gradient(135deg, var(--accent-2) 0%, var(--accent-3) 100%)' }}
          />
        </div>
        
        {/* Animated floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{ 
                backgroundColor: i % 2 === 0 ? '#2ECE72' : '#22D3EE',
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionTitle
              title="Why Choose RamxDigital"
              subtitle="We're different from other web design agencies"
              centered
              className="mb-16 text-center"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Direct partnership",
                description: "Work directly with Cisco, no account managers or middlemen",
                delay: 0.1
              },
              {
                icon: Shield,
                title: "Complete ownership",
                description: "You own your WordPress + SureCart website completely",
                delay: 0.2
              },
              {
                icon: Target,
                title: "Clear communication",
                description: "Plain-English updates, no technical jargon",
                delay: 0.3
              },
              {
                icon: Clock,
                title: "UK-based service",
                description: "Devon-based studio with UK business hours",
                delay: 0.4
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: item.delay,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="relative w-16 h-16 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Glowing background ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                      style={{ 
                        background: 'var(--ring)',
                        filter: 'blur(8px)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Main icon container */}
                    <div 
                      className="relative w-full h-full rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'rgba(46, 206, 114, 0.1)',
                        border: '2px solid rgba(46, 206, 114, 0.2)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(46, 206, 114, 0.2)';
                        e.currentTarget.style.borderColor = '#2ECE72';
                        e.currentTarget.style.boxShadow = '0 0 25px rgba(46, 206, 114, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(46, 206, 114, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(46, 206, 114, 0.2)';
                        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <IconComponent 
                        className="h-7 w-7 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: '#2ECE72' }} 
                      />
                    </div>
                    
                    {/* Subtle pulse effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-green-500/30"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="mb-3 transition-colors duration-300 group-hover:text-green-400"
                    style={{ 
                      color: '#F5F7FB',
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: '700',
                      lineHeight: 'var(--text-h3-lh)'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="transition-colors duration-300 group-hover:text-gray-300"
                    style={{ 
                      color: '#C7CFDC',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body)',
                      fontWeight: '400',
                      lineHeight: 'var(--text-body-lh)'
                    }}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Transparent Pricing"
            subtitle="No hidden fees, no surprises. Choose the package that fits your needs."
            centered
            className="mb-16 text-center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Website Design"
              price="From £1,000"
              description="Perfect for small businesses"
              features={[
                "Up to 5 pages",
                "Custom WordPress design",
                "Mobile responsive",
                "Basic SEO setup",
                "Launch kit included"
              ]}
              onSelect={() => onNavigate('packages')}
            />
            
            <PricingCard
              title="Ecommerce Stores"
              price="From £5,000"
              description="Complete online store solution"
              features={[
                "SureCart integration",
                "0% transaction fees",
                "Stripe & PayPal setup",
                "Conversion optimised",
                "Product management"
              ]}
              isPopular
              onSelect={() => onNavigate('packages')}
            />
            
            <PricingCard
              title="Care Plans"
              price="From £49/month"
              description="Ongoing support & maintenance"
              features={[
                "Security updates",
                "Performance monitoring",
                "Content updates",
                "Priority support",
                "Save 30% first year (annual)"
              ]}
              onSelect={() => onNavigate('care-plans')}
            />
          </div>
          
          <div className="text-center mt-12">
            <SectionCTA
              title="Choose your package"
              description="Ready to start your project? Select the perfect package for your business needs."
              primaryText="Choose Your Package"
              primaryAction={() => onNavigate('packages')}
              secondaryText="Ask a question"
              secondaryAction={() => onNavigate('contact')}
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="What Clients Say"
            centered
            className="mb-16 text-center"
          />
          
          <TestimonialCard
            quote="RamxDigital transformed our online presence completely. The new website not only looks fantastic but has increased our bookings by 40%. Cisco's attention to detail and clear communication made the whole process seamless."
            author="Sarah"
            company="Field to Fork Catering, Exeter"
          />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="Simple 8-Week Process"
            subtitle="From brief to launch, here's how we bring your vision to life"
            centered
            className="mb-16 text-center"
          />
          
          <div className="max-w-3xl mx-auto">
            <TimelineStep
              step="1-2"
              title="Discovery"
              description="We dive deep into your business goals, target audience, and project requirements through detailed consultation calls."
            />
            <TimelineStep
              step="3-5"
              title="Build"
              description="Custom design and development phase where your website comes to life with regular progress updates."
            />
            <TimelineStep
              step="6-8"
              title="SEO & Launch"
              description="Final optimization, testing, and launch with full training on managing your new website."
              isLast
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-20 lg:py-32"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionTitle
            title="FAQs"
            subtitle="Common questions about our bespoke web design process"
            centered
            className="mb-16 text-center"
          />
          
          <div className="space-y-0">
            <FAQItem
              question="What makes your approach bespoke?"
              answer="Every website is custom-designed from scratch to match your brand and business goals. No templates, no shortcuts - just unique design that reflects your business perfectly."
            />
            <FAQItem
              question="Why do you recommend SureCart?"
              answer="SureCart offers 0% transaction fees compared to Shopify's 2.9% + 30p per transaction. For a business making £10k/month, that's a saving of £290 monthly, or £3,480 annually."
            />
            <FAQItem
              question="Is AI-Ready SEO included?"
              answer="Yes, all our websites include AI-Ready SEO as standard. This ensures your site is optimized for both traditional and AI-powered search engines like ChatGPT and Google's AI features."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionCTA
            title="Start your bespoke web design project"
            description="Ready to transform your online presence? Let's discuss your project and create something exceptional together."
            primaryText="Book Free Consultation"
            primaryAction={() => onNavigate('contact')}
            secondaryText="View Our Work"
            secondaryAction={() => onNavigate('portfolio')}
          />
        </div>
      </section>
    </div>
  );
}