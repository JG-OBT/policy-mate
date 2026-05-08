import { Document, PricingTier } from './types';

// TOGGLE THIS TO SHOW/HIDE PRICING
export const SHOW_PRICING_SECTION = true;

export const DOCUMENTS: Document[] = [
  {
    id: '1',
    title: 'Employee Code of Conduct',
    path: '/documents/employee-code-of-conduct.pdf',
  },
  {
    id: '2',
    title: 'Disciplinary Policy',
    path: '/documents/disciplinary-policy.pdf',
  },
  {
    id: '3',
    title: 'Grievance Policy',
    path: '/documents/grievance-policy.pdf',
  },
  {
    id: '4',
    title: 'Expenses Policy',
    path: '/documents/expenses-policy.pdf',
  },
  {
    id: '5',
    title: 'Absence Management Policy',
    path: '/documents/absence-management-policy.pdf',
  },
  {
    id: '6',
    title: 'Annual Leave Policy',
    path: '/documents/annual-leave-policy.pdf',
  },
  {
    id: '7',
    title: 'Remote Working Policy',
    path: '/documents/remote-working-policy.pdf',
  },
  {
    id: '8',
    title: 'Flexible Working Policy',
    path: '/documents/flexible-working-policy.pdf',
  },
  {
    id: '9',
    title: 'Health and Safety Policy',
    path: '/documents/health-and-safety-policy.pdf',
  },
  {
    id: '10',
    title: 'Data Protection Policy',
    path: '/documents/data-protection-policy.pdf',
  },
  {
    id: '11',
    title: 'IT and Acceptable Use Policy',
    path: '/documents/it-acceptable-use.pdf',
  },
  {
    id: '12',
    title: 'Social Media Policy',
    path: '/documents/social-media-policy.pdf',
  },
  {
    id: '13',
    title: 'Anti-Bribery and Corruption Policy',
    path: '/documents/anti-bribery.pdf',
  },
  {
    id: '14',
    title: 'Equality, Diversity and Inclusion Policy',
    path: '/documents/edi-policy.pdf',
  },
  {
    id: '15',
    title: 'Recruitment Policy',
    path: '/documents/recruitment-policy.pdf',
  },
  {
    id: '16',
    title: 'Performance Management Policy',
    path: '/documents/performance-management.pdf',
  },
  {
    id: '17',
    title: 'Training and Development Policy',
    path: '/documents/training-development.pdf',
  },
  {
    id: '18',
    title: 'Whistleblowing Policy',
    path: '/documents/whistleblowing-policy.pdf',
  },
  {
    id: '19',
    title: 'Environmental Policy',
    path: '/documents/environmental-policy.pdf',
  },
  {
    id: '20',
    title: 'Modern Slavery Policy',
    path: '/documents/modern-slavery-policy.pdf',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£59 / month + £39 per site',
    description: 'Perfect for small operators and independents.',
    features: [
      'Up to 10 sites',
      'Up to 5,000 queries/mo',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '£99 / month + £49 per site',
    description: 'Ideal for multi-site chains and regional operators.',
    features: [
      '10-50 sites',
      'Up to 20,000 queries/mo',
      'Priority Support',
    ],
    cta: 'Go Growth',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description:
      'Bespoke solutions for national chains and large groups.',
    features: [
      '50+ sites',
      'Unlimited queries',
      'Dedicated account manager',
      'Advanced reporting and analytics',
      'Optimised policy handling',
    ],
    cta: 'Contact Sales',
  },
];

export const VIDEO_URL =
  'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video URL
