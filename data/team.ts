export interface TeamMember {
  id: string
  name: string
  title: string
  description: string
  image: string
  role: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'laxman-dhungel',
    name: 'Laxman Dhungel',
    title: 'CEO & Full Stack Developer',
    description:
      'Visionary leader with expertise in full-stack development and architectural design. Laxman drives Aesthera\'s technological strategy and innovation initiatives across all product lines.',
    image: '/laxman.jpeg',
    role: 'CEO',
  },
  {
    id: 'prasna-maharjan',
    name: 'Prasna Maharjan',
    title: 'Marketing Lead & Customer Support',
    description:
      'Strategic marketing professional and customer advocate. Prasna ensures every client experience reflects Aesthera\'s commitment to excellence and builds lasting relationships with our partners.',
    image: '/prasna.jpeg',
    role: 'Marketing & Support',
  },
]

