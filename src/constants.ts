import { Document, PricingTier } from './types';

// TOGGLE THIS TO SHOW/HIDE PRICING
export const SHOW_PRICING_SECTION = false; 

export const DOCUMENTS: Document[] = [
  { id: '1', title: 'Employee Code of Conduct', path: '/documents/employee-code-of-conduct.pdf' },
  { id: '2', title: 'Disciplinary Policy', path: '/documents/disciplinary-policy.pdf' },
  { id: '3', title: 'Grievance Policy', path: '/documents/grievance-policy.pdf' },
  { id: '4', title: 'Expenses Policy', path: '/documents/expenses-policy.pdf' },
  { id: '5', title: 'Absence Management Policy', path: '/documents/absence-management-policy.pdf' },
  { id: '6', title: 'Annual Leave Policy', path: '/documents/annual-leave-policy.pdf' },
  { id: '7', title: 'Remote Working Policy', path: '/documents/remote-working-policy.pdf' },
  { id: '8', title: 'Flexible Working Policy', path: '/documents/flexible-working-policy.pdf' },
  { id: '9', title: 'Health and Safety Policy', path: '/documents/health-and-safety-policy.pdf' },
  { id: '10', title: 'Data Protection Policy', path: '/documents/data-protection-policy.pdf' },
  { id: '11', title: 'IT and Acceptable Use Policy', path: '/documents/it-acceptable-use.pdf' },
  { id: '12', title: 'Social Media Policy', path: '/documents/social-media-policy.pdf' },
  { id: '13', title: 'Anti-Bribery and Corruption Policy', path: '/documents/anti-bribery.pdf' },
  { id: '14', title: 'Equality, Diversity and Inclusion Policy', path: '/documents/edi-policy.pdf' },
  { id: '15', title: 'Recruitment Policy', path: '/documents/recruitment-policy.pdf' },
  { id: '16', title: 'Performance Management Policy', path: '/documents/performance-management.pdf' },
  { id: '17', title: 'Training and Development Policy', path: '/documents/training-development.pdf' },
  { id: '18', title: 'Whistleblowing Policy', path: '/documents/whistleblowing-policy.pdf' },
  { id: '19', title: 'Environmental Policy', path: '/documents/environmental-policy.pdf' },
  { id: '20', title: 'Modern Slavery Policy', path: '/documents/modern-slavery-policy.pdf' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    price: '£49',
    description: 'Perfect for small startups getting started with policy management.',
    features: [
      'Up to 20 policy documents',
      'Basic document viewer',
      'Standard contact form',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    price: '£99',
    description: 'Ideal for growing teams that need a more professional portal.',
    features: [
      'Up to 50 policy documents',
      'Branded document portal',
      'Searchable policy library',
      'Basic analytics'
    ],
    cta: 'Go Intermediate',
    highlight: true
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '£199',
    description: 'Comprehensive features for businesses with complex compliance needs.',
    features: [
      'Unlimited policy documents',
      'Custom workflows',
      'User access controls',
      'Priority support',
      'Policy review reminders'
    ],
    cta: 'Go Advanced'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke solutions for multi-site global organizations.',
    features: [
      'Multi-site organisation support',
      'Bespoke implementation',
      'Advanced reporting',
      'SSO-ready structure',
      'Dedicated account support'
    ],
    cta: 'Contact Sales'
  }
];

export const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Placeholder video URL
