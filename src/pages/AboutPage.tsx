import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, MessageSquare, Award, ExternalLink, Clock, Shield, Target, Eye } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SectionCTA } from '../components/SectionCTA';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      {/* Hero Section - Enhanced with parallax */}
      <section 
        ref={heroRef}
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        {/* Dynamic background with mouse tracking */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(46, 206, 114, 0.1), transparent 40%)`,
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-green-500/20 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              className="mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-h1)',
                fontWeight: '700',
                lineHeight: 'var(--text-h1-lh)',
                color: '#F5F7FB'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About RamxDigital
            </motion.h1>
            
            <div className="space-y-8">
              <motion.p 
                className="text-lg leading-relaxed"
                style={{ color: '#C7CFDC' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Founded by Cisco, a self-taught developer with a passion for creating websites that actually work for businesses. Based in beautiful Devon, we serve clients across the UK with bespoke WordPress and SureCart solutions that focus on one thing: converting visitors into customers.
              </motion.p>
              
              <motion.p 
                className="leading-relaxed"
                style={{ color: '#C7CFDC' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                After seeing too many businesses struggle with template-based websites that don't convert, Cisco founded RamxDigital to offer a different approach. Every website is custom-built from the ground up, designed specifically for your business goals and target audience.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Devon-Based Section - Enhanced with 3D effects */}
      <section 
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        {/* Animated gradient backgrounds */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'var(--grad-glow)' }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionTitle
                title="Devon-Based, UK-Wide"
                subtitle="Local expertise with national reach"
                className="mb-8"
              />
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Local Roots",
                    description: "Based in Devon, we understand the local business landscape while serving clients across the UK.",
                    delay: 0.1
                  },
                  {
                    icon: Users,
                    title: "Personal Service",
                    description: "Work directly with Cisco throughout your project. No account managers, no outsourcing.",
                    delay: 0.2
                  },
                  {
                    icon: MessageSquare,
                    title: "UK Business Hours",
                    description: "Available during UK business hours for calls, meetings, and support.",
                    delay: 0.3
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'rgba(46, 206, 114, 0.1)' }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(46, 206, 114, 0.2)',
                          boxShadow: '0 0 20px rgba(46, 206, 114, 0.3)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          className="h-6 w-6 flex-shrink-0" 
                          style={{ color: '#2ECE72' }}
                        />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="mb-2"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-h3)',
                            fontWeight: '700',
                            lineHeight: 'var(--text-h3-lh)',
                            color: '#F5F7FB'
                          }}
                          whileHover={{ color: '#2ECE72' }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.h3>
                        <p style={{ color: '#C7CFDC' }}>{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="rounded-lg p-8 border-2 relative overflow-hidden"
                style={{
                  backgroundColor: '#111318',
                  borderColor: '#2ECE72',
                  boxShadow: '0 20px 60px rgba(46, 206, 114, 0.15)'
                }}
              >
                {/* Subtle static gradient border */}
                <div
                  className="absolute inset-0 rounded-lg opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, #2ECE72, #22D3EE)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    padding: '2px'
                  }}
                />
                
                <div className="relative z-10">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: '700',
                      lineHeight: 'var(--text-h3-lh)',
                      color: '#F5F7FB'
                    }}
                  >
                    Our Location
                  </h3>
                  <p className="mb-6" style={{ color: '#C7CFDC' }}>
                    Nestled in the heart of Devon, we bring the calm and creativity of the countryside to every project. Our remote-first approach means we can work with clients anywhere in the UK while maintaining that personal touch.
                  </p>
                  <motion.div 
                    className="flex items-center space-x-2"
                    style={{ color: '#2ECE72' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Devon, United Kingdom</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plain-English Promise - Enhanced with staggered animations */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Floating particles for this section */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                backgroundColor: i % 3 === 0 ? '#2ECE72' : i % 3 === 1 ? '#22D3EE' : '#8B5CF6',
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-15, 15, -15],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
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
              title="Plain-English Promise"
              subtitle="No jargon, no confusion, just clear communication"
              centered
              className="mb-16 text-center"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Clear Updates",
                description: "Regular project updates in plain English, not technical jargon you need a dictionary to understand.",
                delay: 0.1
              },
              {
                icon: Users,
                title: "Direct Communication",
                description: "Speak directly with Cisco throughout your project. No passing messages through multiple team members.",
                delay: 0.2
              },
              {
                icon: Award,
                title: "Honest Advice",
                description: "We'll tell you what you need to hear, not what you want to hear. Honest recommendations that serve your business.",
                delay: 0.3
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
                    y: -12,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="relative w-20 h-20 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Glowing background */}
                    <motion.div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                      style={{ 
                        background: 'var(--ring)',
                        filter: 'blur(12px)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Main icon container */}
                    <div 
                      className="relative w-full h-full rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: 'rgba(46, 206, 114, 0.1)',
                        border: '2px solid rgba(46, 206, 114, 0.2)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(46, 206, 114, 0.2)';
                        e.currentTarget.style.borderColor = '#2ECE72';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(46, 206, 114, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(46, 206, 114, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(46, 206, 114, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <IconComponent 
                        className="h-8 w-8 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: '#2ECE72' }} 
                      />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="mb-4 transition-colors duration-300 group-hover:text-green-400"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: '700',
                      lineHeight: 'var(--text-h3-lh)',
                      color: '#F5F7FB'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="transition-colors duration-300 group-hover:text-gray-300"
                    style={{ color: '#C7CFDC' }}
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

      {/* Service Standards - Enhanced with glassmorphism */}
      <section 
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        {/* Background animation */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-64"
            style={{ 
              background: 'linear-gradient(45deg, var(--accent-2), var(--accent-3), var(--accent))' 
            }}
            animate={{ 
              x: [-100, 100, -100],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionTitle
              title="Service Standards"
              subtitle="What you can expect when working with RamxDigital"
              centered
              className="mb-16 text-center"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Response Times",
                items: [
                  "Initial enquiries: Within 4 hours",
                  "Project updates: Weekly minimum", 
                  "Support requests: Same day",
                  "Emergency issues: Within 2 hours"
                ],
                icon: Clock,
                delay: 0.1
              },
              {
                title: "Quality Guarantees",
                items: [
                  "Mobile-responsive design",
                  "Fast loading speeds (under 3 seconds)",
                  "SEO-optimized from launch",
                  "Browser compatibility testing"
                ],
                icon: Shield,
                delay: 0.2
              }
            ].map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                >
                  {/* Glassmorphism background */}
                  <div 
                    className="p-8 rounded-lg border backdrop-blur-sm relative overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(15, 17, 21, 0.6)',
                      borderColor: 'rgba(46, 206, 114, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#2ECE72';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(46, 206, 114, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(46, 206, 114, 0.2)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10"
                      style={{ background: 'var(--grad-glow)' }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: 'rgba(46, 206, 114, 0.1)' }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(46, 206, 114, 0.2)',
                          }}
                        >
                          <IconComponent className="h-5 w-5" style={{ color: '#2ECE72' }} />
                        </motion.div>
                        <h3 
                          className="font-bold"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-h3)',
                            fontWeight: '700',
                            lineHeight: 'var(--text-h3-lh)',
                            color: '#F5F7FB'
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {card.items.map((item, itemIndex) => (
                          <motion.li 
                            key={itemIndex}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: card.delay + itemIndex * 0.1,
                              ease: "easeOut" 
                            }}
                          >
                            <span 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: '#2ECE72' }}
                            />
                            <span style={{ color: '#C7CFDC' }}>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionCTA
            title="Book a discovery call"
            description="Let's discuss your project requirements and explore how we can help your business succeed online."
            primaryText="Book Discovery Call"
            primaryAction={() => onNavigate('contact')}
          />
        </div>
      </motion.section>

      {/* Selected Work - Enhanced with hover effects */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2346CE72' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionTitle
              title="Selected Work"
              subtitle="Recent projects that showcase our approach"
              centered
              className="mb-16 text-center"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Field to Fork Catering",
                description: "Complete website redesign for Devon catering company, resulting in 40% increase in bookings and improved online presence.",
                tags: ["Web Design", "WordPress", "SEO"],
                delay: 0.1
              },
              {
                title: "iBrewit",
                description: "Custom ecommerce solution using SureCart for brewing equipment retailer, featuring 0% transaction fees and streamlined checkout.",
                tags: ["Ecommerce", "SureCart", "WordPress"],
                delay: 0.2
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: project.delay, ease: "easeOut" }}
                onClick={() => onNavigate('portfolio')}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div 
                  className="p-8 rounded-lg border transition-all duration-500 relative overflow-hidden"
                  style={{
                    backgroundColor: '#111318',
                    borderColor: '#262A35',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2ECE72';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(46, 206, 114, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#262A35';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5"
                    style={{ background: 'var(--grad-glow)' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.h3 
                        className="transition-colors duration-300"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'var(--text-h3)',
                          fontWeight: '700',
                          lineHeight: 'var(--text-h3-lh)',
                          color: '#F5F7FB'
                        }}
                        whileHover={{ color: '#2ECE72' }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink 
                          className="h-5 w-5 transition-colors duration-300" 
                          style={{ color: '#C7CFDC' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#2ECE72'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#C7CFDC'}
                        />
                      </motion.div>
                    </div>
                    <p className="mb-4" style={{ color: '#C7CFDC' }}>
                      {project.description}
                    </p>
                    <div className="flex space-x-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded transition-all duration-300"
                          style={{ 
                            backgroundColor: 'rgba(46, 206, 114, 0.1)',
                            color: '#2ECE72'
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(46, 206, 114, 0.2)'
                          }}
                          transition={{ duration: 0.2, delay: tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 lg:py-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <SectionCTA
            title="Ready to work together?"
            description="Let's have a conversation about your project. No sales pressure, just an honest discussion about how we can help your business grow online."
            primaryText="Book Consultation"
            primaryAction={() => onNavigate('contact')}
            secondaryText="View Our Packages"
            secondaryAction={() => onNavigate('packages')}
          />
        </div>
      </motion.section>
    </div>
  );
}