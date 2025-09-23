import { ExternalLink } from 'lucide-react';
import { Chip } from './Chip';
import { CTAButton } from './CTAButton';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
  className?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  onClick,
  className = '' 
}: ProjectCardProps) {
  return (
    <div 
      className={`group cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-[var(--ring)] hover:-translate-y-1 ${className}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* MOTION NOTES: Card lift (translateY -4px) + elevate to medium shadow on hover */}
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 
            className="font-heading font-bold group-hover:text-accent transition-colors"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h3>
          <ExternalLink 
            className="h-5 w-5 group-hover:text-accent transition-colors" 
            style={{ color: 'var(--color-subtle)' }}
          />
        </div>
        
        <p className="leading-relaxed mb-4" style={{ color: 'var(--color-subtle)' }}>{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Chip key={index} variant="outline">
              {tag}
            </Chip>
          ))}
        </div>

        {/* CTA Button */}
        <CTAButton 
          variant="tertiary" 
          size="small"
          onClick={onClick}
        >
          View Case Study
        </CTAButton>
      </div>
    </div>
  );
}