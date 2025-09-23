import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: boolean;
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href,
  className = '',
  icon = false
}: CTAButtonProps) {
  // Get size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'large':
        return variant === 'tertiary' ? { fontSize: '18px' } : { 
          padding: '16px 32px', 
          fontSize: '18px', 
          borderRadius: '10px' 
        };
      case 'medium':
        return variant === 'tertiary' ? { fontSize: '16px' } : { 
          padding: '12px 24px', 
          fontSize: '16px', 
          borderRadius: '8px' 
        };
      case 'small':
        return variant === 'tertiary' ? { fontSize: '14px' } : { 
          padding: '8px 16px', 
          fontSize: '14px', 
          borderRadius: '6px' 
        };
      default:
        return {};
    }
  };

  // Get variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '#2ECE72',
          color: '#0F1115',
          border: 'none',
          boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: '#2ECE72',
          border: '2px solid #2ECE72',
          boxShadow: 'none',
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: '#2ECE72',
          border: 'none',
          padding: '0',
          boxShadow: 'none',
        };
      default:
        return {};
    }
  };

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: variant === 'tertiary' ? '4px' : '8px',
    fontFamily: 'Lexend, sans-serif',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.26s cubic-bezier(0.21, 0.8, 0.35, 1)',
    textDecoration: 'none',
    outline: 'none',
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    switch (variant) {
      case 'primary':
        target.style.backgroundColor = '#22B265';
        target.style.transform = 'scale(1.02)';
        target.style.boxShadow = '0 8px 25px rgba(46, 206, 114, 0.35)';
        break;
      case 'secondary':
        target.style.backgroundColor = '#2ECE72';
        target.style.color = '#0F1115';
        target.style.transform = 'scale(1.02)';
        target.style.boxShadow = '0 8px 25px rgba(46, 206, 114, 0.15)';
        break;
      case 'tertiary':
        target.style.color = '#22B265';
        target.style.gap = '8px';
        break;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    switch (variant) {
      case 'primary':
        target.style.backgroundColor = '#2ECE72';
        target.style.transform = 'scale(1)';
        target.style.boxShadow = '0 4px 14px 0 rgba(0, 0, 0, 0.2)';
        break;
      case 'secondary':
        target.style.backgroundColor = 'transparent';
        target.style.color = '#2ECE72';
        target.style.transform = 'scale(1)';
        target.style.boxShadow = 'none';
        break;
      case 'tertiary':
        target.style.color = '#2ECE72';
        target.style.gap = '4px';
        break;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    if (variant !== 'tertiary') {
      target.style.transform = 'scale(0.98)';
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    if (variant !== 'tertiary') {
      target.style.transform = 'scale(1.02)';
    }
  };

  const content = (
    <>
      {children}
      {(icon || variant === 'tertiary') && (
        <ArrowRight className={variant === 'tertiary' ? 'w-4 h-4' : 'w-5 h-5'} />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={className}
        style={baseStyle}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={className}
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {content}
    </button>
  );
}