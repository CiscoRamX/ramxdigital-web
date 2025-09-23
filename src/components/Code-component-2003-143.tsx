import { useState, useEffect } from 'react';
import { Palette, X } from 'lucide-react';

interface ColorMode {
  id: string;
  name: string;
  description: string;
  preview: {
    bg: string;
    surface: string;
    accent: string;
    accent2: string;
  };
}

const colorModes: ColorMode[] = [
  {
    id: 'core',
    name: 'Core',
    description: 'Default brand theme with Ramx Green',
    preview: {
      bg: '#0F1115',
      surface: '#111318',
      accent: '#2ECE72',
      accent2: '#22D3EE'
    }
  },
  {
    id: 'cool-glow',
    name: 'Cool Glow',
    description: 'Pantone-inspired cool blues and cyans',
    preview: {
      bg: '#0A0E1A',
      surface: '#0F1420',
      accent: '#2ECE72',
      accent2: '#00D4FF'
    }
  },
  {
    id: 'warm-pulse',
    name: 'Warm Pulse',
    description: 'Energetic warm oranges and reds',
    preview: {
      bg: '#1C0A0A',
      surface: '#2A1010',
      accent: '#2ECE72',
      accent2: '#FF6B35'
    }
  },
  {
    id: 'soft-neutrals',
    name: 'Soft Neutrals',
    description: 'Sophisticated grays and purples',
    preview: {
      bg: '#0C0C0E',
      surface: '#15151A',
      accent: '#2ECE72',
      accent2: '#6366F1'
    }
  }
];

export function ColorModeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState('core');

  useEffect(() => {
    // Get initial mode from localStorage or default to 'core'
    const savedMode = localStorage.getItem('ramx-color-mode') || 'core';
    setCurrentMode(savedMode);
    applyColorMode(savedMode);
  }, []);

  const applyColorMode = (mode: string) => {
    const root = document.documentElement;
    
    if (mode === 'core') {
      root.removeAttribute('data-color-mode');
    } else {
      root.setAttribute('data-color-mode', mode);
    }
    
    localStorage.setItem('ramx-color-mode', mode);
    setCurrentMode(mode);
  };

  const handleModeChange = (modeId: string) => {
    applyColorMode(modeId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
          color: 'var(--accent)'
        }}
        title="Color Mode Selector"
      >
        <Palette className="w-5 h-5" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-4xl rounded-2xl shadow-2xl border p-8"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                  Color Modes
                </h2>
                <p className="text-base" style={{ color: 'var(--color-subtle)' }}>
                  Choose your preferred visual theme for RamxDigital
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg transition-colors hover:bg-opacity-10 hover:bg-white"
                style={{ color: 'var(--color-subtle)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Color Mode Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => handleModeChange(mode.id)}
                  className={`
                    relative p-6 rounded-xl border-2 transition-all duration-300 text-left
                    hover:scale-[1.02] hover:shadow-lg group
                    ${currentMode === mode.id 
                      ? 'border-[var(--accent)] shadow-lg shadow-[var(--ring)]' 
                      : 'border-transparent'
                    }
                  `}
                  style={{
                    backgroundColor: mode.preview.bg,
                    borderColor: currentMode === mode.id ? 'var(--accent)' : 'var(--color-border)'
                  }}
                >
                  {/* Preview Section */}
                  <div className="mb-4">
                    <div className="flex gap-2 mb-3">
                      <div 
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: mode.preview.accent }}
                      />
                      <div 
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: mode.preview.accent2 }}
                      />
                      <div 
                        className="w-8 h-8 rounded-lg"
                        style={{ backgroundColor: mode.preview.surface }}
                      />
                    </div>
                    
                    {/* Mini Components Preview */}
                    <div className="space-y-2">
                      {/* Mini Hero */}
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: mode.preview.surface }}
                      >
                        <div className="h-3 w-20 rounded mb-2" style={{ backgroundColor: mode.preview.accent }} />
                        <div className="h-2 w-full rounded opacity-60" style={{ backgroundColor: '#F5F7FB' }} />
                        <div className="h-2 w-3/4 rounded mt-1 opacity-40" style={{ backgroundColor: '#F5F7FB' }} />
                      </div>
                      
                      {/* Mini CTA */}
                      <div className="flex gap-2">
                        <div 
                          className="h-6 w-16 rounded"
                          style={{ backgroundColor: mode.preview.accent }}
                        />
                        <div 
                          className="h-6 w-16 rounded border"
                          style={{ 
                            borderColor: mode.preview.accent,
                            backgroundColor: 'transparent'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mode Info */}
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1" style={{ color: '#F5F7FB' }}>
                      {mode.name}
                    </h3>
                    <p className="text-sm opacity-80" style={{ color: '#C7CFDC' }}>
                      {mode.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {currentMode === mode.id && (
                    <div 
                      className="absolute top-4 right-4 w-3 h-3 rounded-full"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-muted)' }}>
              <p className="text-sm" style={{ color: 'var(--color-subtle)' }}>
                <strong style={{ color: 'var(--accent)' }}>Note:</strong> All modes maintain the Ramx Green brand color for consistency while changing supporting colors and atmospheres.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}