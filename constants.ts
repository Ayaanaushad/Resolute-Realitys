
import { Package } from './types';

export const SOCIAL_MEDIA_PACKAGES: Package[] = [
  {
    title: 'Stepping Stones',
    price: 15000,
    priceUnit: '/ month',
    features: [
      'Upto 8 posts & reels',
      '5 story creatives per month',
      'Captions included',
      'No comment management',
      'No engagement enhancement'
    ],
  },
  {
    title: 'Start-Up Launchpad',
    price: 25000,
    priceUnit: '/ month',
    features: [
      'Upto 12 posts & reels',
      '8 stories per month',
      'Captions included',
      'Active comment management',
      'Engagement enhancement'
    ],
    highlight: true,
  },
  {
    title: 'Digital Marketing Pro',
    price: 40000,
    priceUnit: '/ month',
    features: [
      'Upto 20 posts & reels',
      '30 stories per month',
      'Captions & comment management',
      'Engagement enhancement',
      'Content boosting included',
      'Guaranteed minimum 100k views'
    ],
  }
];

export const LEAD_GEN_PACKAGES: Package[] = [
  {
    title: 'Stepping Stones (Ads)',
    price: 20000,
    priceUnit: '/ month',
    features: [
      'Ad budgets upto ₹5 lakhs/month',
      'Platforms: Meta + Google',
      'Upto 10 ads with 4 variations each',
      'Complete creative design & research',
      'Off-page SEO only'
    ],
    addOn: {
      price: 2000,
      description: 'Include LinkedIn management'
    }
  },
  {
    title: 'Advanced Ads + SEO Plan',
    price: 35000,
    priceUnit: '/ month',
    features: [
      'Everything in Basic Ads Plan',
      'Organic social media posting',
      'On-page SEO',
      'Off-page SEO',
      'SEO Blogs for long-term visibility'
    ],
    highlight: true,
  }
];
