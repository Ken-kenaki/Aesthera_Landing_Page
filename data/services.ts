import { Monitor, Terminal, Palette, Cloud, Shield, Globe, Smartphone, MousePointerClick, RefreshCw, Grid, Brain } from 'lucide-react'

export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  features: string[]
  icon: any // Lucide icon component
  stats?: { label: string; value: string }[]
  image?: string
}

export const services: Service[] = [
  {
    id: '01',
    title: 'Web Design & Development',
    slug: 'web-design-development',
    shortDescription: 'Editorial layouts with high-performance animations and architectural precision.',
    fullDescription: 'We build more than websites; we create digital landmarks that capture the kinetic energy of your brand. Our web solutions are built on modern frameworks (Next.js, React) ensuring lightning-fast load times, SEO optimization, and a seamless user experience across all devices. We focus on "Digital Fluidity" — the smooth transition of states and interactions that make a site feel alive.',
    features: [
      'High-Performance Animations',
      'Architectural Precision',
      'Responsive & Adaptive Layouts',
      'SEO & Accessibility Optimization',
      'Headless CMS Integration', 
      'Progressive Web App (PWA) Capabilities'
    ],
    icon: Monitor,
    stats: [
      { label: 'Digital Fluidity', value: '100%' },
      { label: 'Response Latency', value: '<200ms' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOOHRab02bRqMn9WK-G3-TAj3fBeyS_ZVUKILYzS0G6XF5pZldnPS7FyC4ivQZRqIoFEbuq6sYu88hFoefTD174nwg5FbYnS3MLIghpUUlLUapB3ptO_U39M-coUCr41VETRuosAwR3VrYHYlIvUwK4-9Y7ISm2OB2u9-2Dy1bttcRuKQSRJ287PKQRdTob_Dbn9NYIbzmdAKHi4t4vURUdBfij5hwfnGaPX_Sh_ZhviMHhg9Gy75t6KyCiYw9WJBbU6QHzJ9wq0k'
  },
  {
    id: '02',
    title: 'Android & iOS App Development',
    slug: 'app-development',
    shortDescription: 'Cross-platform mobile applications engineered for the modern user ecosystem.',
    fullDescription: 'We leverage native-level performance with unified codebases to deliver high-velocity mobile experiences. Whether it\'s iOS or Android, our apps are designed to feel at home on the device while maintaining a consistent brand identity. We prioritize offline capabilities, smooth gestures, and battery-efficient performance.',
    features: [
      'Cross-Platform Development (React Native / Flutter)',
      'Native Performance Optimization',
      'Offline-First Architecture',
      'Store Deployment & Management',
      'Push Notification Systems',
      'Biometric Authentication Integration'
    ],
    icon: Smartphone,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTK5eTahgKnML0NgZ8-LWClDrHR08wDjaaN8Wo1oHnxFx1CfQrcvaWmvZyLTGBvzHo64pUZTTIr4bIIyyXg9JnuVhAesz043k3czTUjG27zxjBC9c4m1sjlp1JBpyGSv1Iedp-f_BbyGUULQTSO9gVFL2YkPj2jH5PaelGV5cLn26grkCYXyjH1m5ZZZIk3Q2aAKfHCvvZOn1UfObqvCyhYcMHhPhC-CPnaRSfpQ9jMiwLWedCHD1e10zAz_vQ_NjNimqFobHoUZg'
  },
  {
    id: '03',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'User-centric design systems that balance aesthetic beauty with functional logic.',
    fullDescription: 'Our design philosophy embraces atomic design principles to create scalable visual systems. We map cognitive friction to create seamless navigational flows that guide users toward conversion effortlessly. Every pixel is placed with intention, ensuring that the interface is not just beautiful, but also intuitive and accessible.',
    features: [
      'User Research & Persona Mapping',
      'Wireframing & Prototyping',
      'Design Systems & Style Guides',
      'Interaction Design',
      'Accessibility Audits (WCAG)',
      'Usability Testing'
    ],
    icon: Palette,
    stats: [
      { label: 'User Retention Rate', value: '98%' }
    ]
  },
  {
    id: '04',
    title: 'SaaS Solutions',
    slug: 'saas-solutions',
    shortDescription: 'Scalable cloud architectures designed to handle high-velocity digital operations.',
    fullDescription: 'We build robust, multi-tenant environments that thrive under heavy load and complex logic. From database schema design to API architecture, we ensure your SaaS product is scalable, secure, and maintainable. We specialize in microservices, serverless functions, and real-time data synchronization.',
    features: [
      'Multi-Tenant Architecture',
      'Scalable Cloud Infrastructure (AWS/Vercel)',
      'API Development & Integration',
      'Database Design (SQL/NoSQL)',
      'Real-time Data Sync',
      'Automated CI/CD Pipelines'
    ],
    icon: Cloud
  }
]

