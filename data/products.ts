export interface Product {
  id: string
  name: string
  description: string
  url: string
  category: string
  platforms: Array<'web' | 'android' | 'ios'>
  icon?: string
}

export const saasProducts: Product[] = [
  {
    id: 'motion-games',
    name: 'Motion Games',
    description: 'Immersive gaming experience with motion-based mechanics and engaging gameplay.',
    url: 'https://motiongames.me/',
    category: 'Gaming',
    platforms: ['web', 'android', 'ios'],
  },
  {
    id: 'coding-games',
    name: 'Coding Games',
    description: 'Interactive platform for learning to code through gamified challenges and puzzles.',
    url: 'https://codinggames.tech/',
    category: 'Education',
    platforms: ['web', 'android', 'ios'],
  },
  {
    id: 'aesthera-crm',
    name: 'Aesthera CRM',
    description: 'Comprehensive customer relationship management system for enterprise-scale operations.',
    url: 'https://crm.aesthera.tech/',
    category: 'Business',
    platforms: ['web', 'android', 'ios'],
  },
  {
    id: 'gymo',
    name: 'Gymo',
    description: 'Fitness and wellness platform connecting users with personalized workout programs.',
    url: 'https://gymo.aesthera.tech/',
    category: 'Fitness',
    platforms: ['web', 'android', 'ios'],
  },
]

