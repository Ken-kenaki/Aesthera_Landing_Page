import { saasProducts } from './products'

export interface ClientProject {
  id: string
  name: string
  description: string
  url: string
  category: string
  industry: string
  featured?: boolean
}

const saasAsProjects: ClientProject[] = saasProducts.map(p => ({
  id: p.id,
  name: p.name,
  description: p.description,
  url: p.url,
  category: p.category,
  industry: 'SaaS / Proprietary',
  featured: true
}))

export const clientProjects: ClientProject[] = [
  ...saasAsProjects,
  {
    id: 'gurukul-education',
    name: 'Gurukul Education',
    description: 'Comprehensive educational platform offering online courses and learning management systems.',
    url: 'https://www.gurukuleduc.com/',
    category: 'Education',
    industry: 'EdTech',
    featured: true,
  },
  {
    id: 'nextgen-advisors',
    name: 'NextGen Advisors',
    description: 'Financial advisory and consulting services for modern enterprises and startups.',
    url: 'https://nextgenadvisors.com.np/',
    category: 'Finance',
    industry: 'Financial Services',
    featured: true,
  },
  {
    id: 'joe-un-education',
    name: 'Joe Un Education Consultancy',
    description: 'Expert education consultancy services for international student placements and abroad education.',
    url: 'https://joeuneducationconsultancy.com/',
    category: 'Education',
    industry: 'Education Consultancy',
  },
  {
    id: 'udef-cms',
    name: 'UDEF CMS',
    description: 'Custom consultancy CRM built specifically for education sector consultancy workflows.',
    url: 'https://cms.udef.com.np/',
    category: 'CRM/Business',
    industry: 'Education Consultancy',
  },
  {
    id: 'fairmount-education',
    name: 'Fairmount Education Consultancy',
    description: 'Premier education consultancy providing guidance for international education opportunities.',
    url: 'https://fairmounteducationconsultancy.org/',
    category: 'Education',
    industry: 'Education Consultancy',
  },
  {
    id: 'better-days-marketplace',
    name: 'Better Days Marketplace',
    description: 'Shopify-powered pet store offering premium pet supplies and accessories.',
    url: 'https://www.betterdaysmarketplace.com/',
    category: 'E-commerce',
    industry: 'Retail/Pet Supplies',
  },
]
