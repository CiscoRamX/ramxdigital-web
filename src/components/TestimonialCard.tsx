import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  author, 
  company, 
  rating = 5,
  className = '' 
}: TestimonialCardProps) {
  return (
    <div 
      className={`p-8 rounded-lg border ${className}`}
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--muted)',
      }}
    >
      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-warning fill-current' : 'text-muted'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-text text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center">
          <span className="font-bold text-white text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-medium text-text">{author}</div>
          <div className="text-subtle">{company}</div>
        </div>
      </div>
    </div>
  );
}