import { 
  Check, 
  Search, 
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { ServiceIcon, IconName } from './ui/ServiceIcon';
import { Breadcrumbs } from './ui/Breadcrumbs';

export default function DesignSystem() {
  const colors = [
    { 
      name: 'Primary', 
      series: 'primary', 
      swatches: [
        { weight: 50, hex: '#f1f8f1' },
        { weight: 100, hex: '#ddf8df' },
        { weight: 200, hex: '#b9edbc' },
        { weight: 300, hex: '#88dc8d' },
        { weight: 400, hex: '#55c15c' },
        { weight: 500, hex: '#385E38' },
        { weight: 600, hex: '#2c4a2c' },
        { weight: 700, hex: '#2C3C30' },
        { weight: 800, hex: '#1C2D1F' },
        { weight: 900, hex: '#1a4a2e' },
      ]
    },
    { 
      name: 'Accent (Amber)', 
      series: 'accent', 
      swatches: [
        { weight: 50, hex: '#fffbeb' },
        { weight: 100, hex: '#fef3c7' },
        { weight: 200, hex: '#fde68a' },
        { weight: 300, hex: '#fcd34d' },
        { weight: 400, hex: '#fbbf24' },
        { weight: 500, hex: '#EBAA34' },
        { weight: 600, hex: '#e6a817' },
        { weight: 700, hex: '#b45309' },
        { weight: 800, hex: '#92400e' },
        { weight: 900, hex: '#78350f' },
      ]
    },
    { 
      name: 'Neutral (Gray)', 
      series: 'neutral', 
      swatches: [
        { weight: 50, hex: '#f9fafb' },
        { weight: 100, hex: '#f3f4f6' },
        { weight: 200, hex: '#e5e7eb' },
        { weight: 300, hex: '#d1d5db' },
        { weight: 400, hex: '#9ca3af' },
        { weight: 500, hex: '#6b7280' },
        { weight: 600, hex: '#4b5563' },
        { weight: 700, hex: '#374151' },
        { weight: 800, hex: '#1f2937' },
        { weight: 900, hex: '#111827' },
      ]
    },
  ];

  const spacing = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];

  return (
    <div className="container ds-container">
      <div className="page-header">
        <h1 className="page-title">Design System</h1>
        <p className="page-description">
          A collection of design tokens and UI components that define the visual language of the Open Niger State project.
        </p>
      </div>

      {/* Colors Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Colors</h2>
        {colors.map((color) => (
          <div key={color.name} style={{ marginBottom: 'var(--space-8)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
              <h3 style={{ margin: 0 }}>{color.name}</h3>
              <code style={{ fontSize: 'var(--font-size-xs)', background: 'var(--neutral-100)', padding: '2px 6px', borderRadius: '4px' }}>--{color.series}-*</code>
            </div>
            <div className="ds-grid">
              {color.swatches.map((swatch) => (
                <div key={swatch.weight} className="ds-color-card">
                  <div 
                    className="ds-color-swatch" 
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="ds-color-info">
                    <span className="ds-color-name">{swatch.weight}</span>
                    <span className="ds-color-hex">{swatch.hex}</span>
                    <div style={{ fontSize: '10px', color: 'var(--neutral-400)', marginTop: '4px' }}>var(--{color.series}-{swatch.weight})</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Typography Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Typography</h2>
        <div className="ds-card-example" style={{ maxWidth: 'none', marginBottom: 'var(--space-8)' }}>
          <p className="ds-type-label">Font Family: Figtree</p>
          {[
            { label: '5xl / H1', class: 'font-size-5xl', size: '56px', weight: '700' },
            { label: '4xl', class: 'font-size-4xl', size: '48px', weight: '700' },
            { label: '3xl / H2', class: 'font-size-3xl', size: '36px', weight: '700' },
            { label: '2xl', class: 'font-size-2xl', size: '30px', weight: '600' },
            { label: 'xl', class: 'font-size-xl', size: '24px', weight: '600' },
            { label: 'lg', class: 'font-size-lg', size: '20px', weight: '500' },
            { label: 'base / Body', class: 'font-size-base', size: '18px', weight: '400' },
            { label: 'sm', class: 'font-size-sm', size: '14px', weight: '400' },
            { label: 'xs', class: 'font-size-xs', size: '12px', weight: '400' },
          ].map((type) => (
            <div key={type.label} className="ds-type-row">
              <span className="ds-type-label">{type.label} ({type.size})</span>
              <span style={{ fontSize: `var(--${type.class})`, fontWeight: type.weight as any, color: 'var(--neutral-900)' }}>
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Buttons</h2>
        <div className="ds-component-grid">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent Button</Button>
          <Button variant="outline">Outline Action</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="pill">Pill Suggestion</Button>
        </div>
        <div className="ds-component-grid" style={{ marginTop: 'var(--space-4)' }}>
          <Button variant="primary">
            With Icon <ArrowRight size={18} style={{ marginLeft: 'var(--space-2)' }} />
          </Button>
          <Button variant="outline">
            <Search size={18} style={{ marginRight: 'var(--space-2)' }} /> Search
          </Button>
          <Button variant="pill" to="/">
            Link Button (Pill)
          </Button>
        </div>
      </section>

      {/* Icons Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Service Icons</h2>
        <div className="ds-component-grid">
          {(['rocket', 'clipboard-check', 'coins', 'map', 'users', 'help-circle'] as IconName[]).map((icon) => (
            <div key={icon} style={{ textAlign: 'center' }}>
              <ServiceIcon name={icon} />
              <code style={{ fontSize: '10px', display: 'block', marginTop: 'var(--space-2)' }}>{icon}</code>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--neutral-500)' }}>
            These icons are used in the main category lists. They feature a primary-100 background and primary-500 icon color, with a hover effect.
          </p>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Forms & Inputs</h2>
        <div style={{ maxWidth: '400px' }}>
          <Input label="Regular Input" placeholder="Type something..." />
          <Input 
            label="Search Input" 
            placeholder="Search services..." 
            icon={<Search size={18} />} 
          />
          <Input 
            label="Input with Error" 
            placeholder="Error state" 
            error="This field is required" 
            defaultValue="Invalid data"
          />
          <Input label="Disabled State" disabled placeholder="Can't type here" />
        </div>
      </section>

      {/* Navigation Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Navigation (Breadcrumbs)</h2>
        <div style={{ background: 'white', padding: 'var(--space-4) var(--space-8)', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-200)' }}>
          <Breadcrumbs 
            items={[
              { title: 'Start or run a business', path: '/start-business' },
              { title: 'Register my business', path: '/start-business/register-my-business' },
              { title: 'Register with CAC', path: '/start-business/register-my-business/register-with-cac' }
            ]} 
          />
        </div>
      </section>

      {/* Badges & Data Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Data Display & Cards</h2>
        <div className="ds-component-grid">
          <Badge variant="primary">Recommended</Badge>
          <Badge variant="accent">Popular</Badge>
          <Badge variant="neutral">New</Badge>
        </div>
        
        <div className="ds-grid" style={{ marginTop: 'var(--space-8)' }}>
          <Card variant="premium">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-100)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-600)' }}>
                <Check size={24} />
              </div>
              <Badge variant="primary">Step 1</Badge>
            </div>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Register Your Business</h3>
            <p style={{ color: 'var(--neutral-500)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-6)' }}>
              Start the process by submitting your documents to the CAC portal for verification.
            </p>
            <Button variant="primary" style={{ width: '100%' }}>Get Started</Button>
          </Card>

          <Card variant="accent">
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Quick Help</h3>
            <p style={{ color: 'var(--neutral-500)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-6)' }}>
              Need assistance with your registration? Contact our support team.
            </p>
            <Button variant="outline" style={{ width: '100%' }}>Contact Us</Button>
          </Card>
        </div>
      </section>

      {/* Spacing Section */}
      <section className="ds-section">
        <h2 className="ds-section-title">Spacing</h2>
        <div style={{ maxWidth: '600px' }}>
          {spacing.map((s) => (
            <div key={s} style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <span style={{ width: '100px', fontSize: 'var(--font-size-xs)', fontWeight: 600 }}>Space {s} ({s * 4}px)</span>
              <div className="ds-spacing-bar" style={{ width: `var(--space-${s})` }} />
              <code style={{ fontSize: 'var(--font-size-xs)' }}>var(--space-{s})</code>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows & Radii */}
      <section className="ds-section">
        <h2 className="ds-section-title">Radii & Shadows</h2>
        <div className="ds-grid">
          <div style={{ padding: 'var(--space-8)', background: 'white', border: '1px solid var(--neutral-100)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700 }}>Shadow SM / Radius SM</p>
          </div>
          <div style={{ padding: 'var(--space-8)', background: 'white', border: '1px solid var(--neutral-100)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
            <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700 }}>Shadow MD / Radius MD</p>
          </div>
          <div style={{ padding: 'var(--space-8)', background: 'white', border: '1px solid var(--neutral-100)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700 }}>Shadow LG / Radius LG</p>
          </div>
          <div style={{ padding: 'var(--space-8)', background: 'white', border: '1px solid var(--neutral-100)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-premium)' }}>
            <p style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700 }}>Premium / Radius XL</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: 'var(--space-20)', padding: 'var(--space-10) 0', borderTop: '1px solid var(--neutral-100)', textAlign: 'center' }}>
        <p style={{ color: 'var(--neutral-400)', fontSize: 'var(--font-size-sm)' }}>
          Design System v1.0 • Created with Antigravity for Open Niger State
        </p>
      </footer>
    </div>
  );
}
