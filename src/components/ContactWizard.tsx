import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { CTAButton } from './CTAButton';
import { submitContact } from '../lib/contact';

interface ContactWizardProps {
  onNavigate: (page: string) => void;
}

interface FormData {
  // Step 1: About You & Your Business
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  currentWebsite: string;

  // Step 2: Project Type
  projectTypes: string[];

  // Step 3: Budget & Timeline
  budget: string;
  timeline: string;
  carePlan: string;

  // Step 4: Project Details
  message: string;
  goals: string;
  targetAudience: string;
  designInspiration: string;
  specialRequirements: string;

  // Hidden fields
  hp: string;
}

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string;
const RECAPTCHA_SITE_KEY: string | undefined = import.meta.env.VITE_RECAPTCHA_SITEKEY;

// Load reCAPTCHA script
async function loadRecaptcha() {
  if (!RECAPTCHA_SITE_KEY) return;
  if (window.grecaptcha) return;
  await new Promise<void>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('reCAPTCHA failed to load'));
    document.head.appendChild(s);
  });
}

export function ContactWizard({ onNavigate }: ContactWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    currentWebsite: '',
    projectTypes: [],
    budget: '',
    timeline: '',
    carePlan: '',
    message: '',
    goals: '',
    targetAudience: '',
    designInspiration: '',
    specialRequirements: '',
    hp: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: checked
        ? [...prev.projectTypes, type]
        : prev.projectTypes.filter(t => t !== type)
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.company);
      case 2:
        return formData.projectTypes.length > 0;
      case 3:
        return !!(formData.budget && formData.timeline);
      case 4:
        return !!(formData.message && formData.goals);
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      setError(null);
    } else {
      setError('Please fill in all required fields before continuing.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setError(null);
  };

  const handleSubmit = async () => {
    if (loading) return;
    setError(null);

    if (!validateStep(4)) {
      setError('Please complete all required fields.');
      return;
    }

    try {
      setLoading(true);

      // Get reCAPTCHA token
      let captcha_token: string | undefined;
      if (RECAPTCHA_SITE_KEY) {
        await loadRecaptcha();
        captcha_token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
      }

      // Format data for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.company,
        industry: formData.industry,
        currentWebsite: formData.currentWebsite,
        projectTypes: formData.projectTypes.join(', '),
        budget: formData.budget,
        timeline: formData.timeline,
        carePlan: formData.carePlan,
        message: formData.message,
        goals: formData.goals,
        targetAudience: formData.targetAudience,
        designInspiration: formData.designInspiration,
        specialRequirements: formData.specialRequirements,
        hp: formData.hp,
        captcha_token
      };

      await submitContact(submissionData);
      setIsSubmitted(true);
      setTimeout(() => onNavigate('thank-you'), 1200);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-success" />
          </div>
          <h1 className="font-heading font-bold text-text mb-4">Message Sent!</h1>
          <p className="text-subtle text-lg">
            Thank you for getting in touch. We&rsquo;ll respond within 4 hours during UK business hours.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg border px-4 py-2 text-accent hover:underline"
          >
            Book a 30-min call
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-lg border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--muted)' }}>
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-subtle">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-subtle">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={formData.hp}
        onChange={(e) => handleInputChange('hp', e.target.value)}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Step content */}
      <div className="min-h-[400px]">
        {currentStep === 1 && <Step1 formData={formData} onChange={handleInputChange} />}
        {currentStep === 2 && (
          <Step2
            formData={formData}
            onChange={handleInputChange}
            onProjectTypeChange={handleProjectTypeChange}
          />
        )}
        {currentStep === 3 && <Step3 formData={formData} onChange={handleInputChange} />}
        {currentStep === 4 && <Step4 formData={formData} onChange={handleInputChange} />}
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-4 py-2 text-subtle hover:text-text disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        {currentStep < totalSteps ? (
          <CTAButton
            variant="primary"
            onClick={nextStep}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </CTAButton>
        ) : (
          <CTAButton
            variant="primary"
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </CTAButton>
        )}
      </div>
    </div>
  );
}

// Step 1: About You & Your Business
function Step1({ formData, onChange }: { formData: FormData; onChange: (field: keyof FormData, value: string) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text mb-2">About You & Your Business</h3>
        <p className="text-subtle">Tell us a bit about yourself and your company</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            required
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            required
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company/Business Name *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => onChange('company', e.target.value)}
            required
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="industry">Industry/Sector</Label>
          <Select value={formData.industry} onValueChange={(value) => onChange('industry', value)}>
            <SelectTrigger style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="professional-services">Professional Services</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="nonprofit">Non-profit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentWebsite">Current Website URL</Label>
          <Input
            id="currentWebsite"
            type="url"
            placeholder="https://yourwebsite.com"
            value={formData.currentWebsite}
            onChange={(e) => onChange('currentWebsite', e.target.value)}
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>
      </div>
    </div>
  );
}

// Step 2: Project Type
function Step2({
  formData,
  onChange,
  onProjectTypeChange
}: {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onProjectTypeChange: (type: string, checked: boolean) => void;
}) {
  const projectTypes = [
    { id: 'new-website', label: 'New website development' },
    { id: 'redesign', label: 'Website redesign/refresh' },
    { id: 'ecommerce', label: 'E-commerce store' },
    { id: 'landing-pages', label: 'Landing pages' },
    { id: 'maintenance', label: 'Website maintenance & care' },
    { id: 'seo', label: 'SEO optimization & monitoring' },
    { id: 'performance', label: 'Performance optimization' },
    { id: 'other', label: 'Other (please specify in project details)' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text mb-2">Your Project Type</h3>
        <p className="text-subtle">What do you need help with? (Select all that apply)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes.map((type) => (
          <div key={type.id} className="flex items-center space-x-3">
            <Checkbox
              id={type.id}
              checked={formData.projectTypes.includes(type.id)}
              onCheckedChange={(checked) => onProjectTypeChange(type.id, checked as boolean)}
            />
            <Label htmlFor={type.id} className="text-sm font-normal cursor-pointer">
              {type.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

// Step 3: Budget & Timeline
function Step3({ formData, onChange }: { formData: FormData; onChange: (field: keyof FormData, value: string) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text mb-2">Budget & Timeline</h3>
        <p className="text-subtle">Help us understand your project scope and timing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="budget">Project Budget *</Label>
          <Select value={formData.budget} onValueChange={(value) => onChange('budget', value)}>
            <SelectTrigger style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}>
              <SelectValue placeholder="Select your budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-3k">Under £3,000</SelectItem>
              <SelectItem value="3k-7k">£3,000 - £7,000</SelectItem>
              <SelectItem value="7k-15k">£7,000 - £15,000</SelectItem>
              <SelectItem value="15k-plus">£15,000+</SelectItem>
              <SelectItem value="lets-discuss">Let's discuss</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline *</Label>
          <Select value={formData.timeline} onValueChange={(value) => onChange('timeline', value)}>
            <SelectTrigger style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}>
              <SelectValue placeholder="When do you need this completed?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP (1-2 weeks)</SelectItem>
              <SelectItem value="1-2-months">1-2 months</SelectItem>
              <SelectItem value="3-6-months">3-6 months</SelectItem>
              <SelectItem value="ongoing">Ongoing support</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {formData.projectTypes.includes('maintenance') && (
        <div className="space-y-2">
          <Label htmlFor="carePlan">Interested in ongoing care?</Label>
          <Select value={formData.carePlan} onValueChange={(value) => onChange('carePlan', value)}>
            <SelectTrigger style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}>
              <SelectValue placeholder="Select a care plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Care Basic (£49/month) - Essential maintenance</SelectItem>
              <SelectItem value="plus">Care Plus (£99/month) - Enhanced support</SelectItem>
              <SelectItem value="premium">Care Premium (£149/month) - Comprehensive care</SelectItem>
              <SelectItem value="tell-me-more">Tell me more about care plans</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}

// Step 4: Project Details
function Step4({ formData, onChange }: { formData: FormData; onChange: (field: keyof FormData, value: string) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-text mb-2">Project Details</h3>
        <p className="text-subtle">Tell us more about your vision and requirements</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="message">Detailed Project Description *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => onChange('message', e.target.value)}
            rows={4}
            placeholder="Describe your project in detail..."
            required
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="goals">Main Goals/Objectives *</Label>
          <Textarea
            id="goals"
            value={formData.goals}
            onChange={(e) => onChange('goals', e.target.value)}
            rows={3}
            placeholder="What do you want to achieve with this project?"
            required
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input
            id="targetAudience"
            value={formData.targetAudience}
            onChange={(e) => onChange('targetAudience', e.target.value)}
            placeholder="Who are your customers?"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="designInspiration">Design Inspiration/References</Label>
          <Input
            id="designInspiration"
            value={formData.designInspiration}
            onChange={(e) => onChange('designInspiration', e.target.value)}
            placeholder="Any websites you like or want to emulate?"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialRequirements">Special Requirements/Features</Label>
          <Textarea
            id="specialRequirements"
            value={formData.specialRequirements}
            onChange={(e) => onChange('specialRequirements', e.target.value)}
            rows={3}
            placeholder="Any specific features, integrations, or requirements?"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--muted)', color: 'var(--text)' }}
          />
        </div>
      </div>
    </div>
  );
}