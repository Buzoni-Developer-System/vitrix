export type CardTheme = 'health' | 'business'

export interface CardLink {
  id: string
  label: string
  sublabel?: string
  icon: string
  href: string
  highlight?: boolean
}

export interface CardIconAction {
  id: string
  label: string
  icon: string
  href: string
}

export interface DoctorCard {
  slug: string
  theme: CardTheme
  name: string
  title: string
  credentials: string
  registration: string
  photo?: string
  rating: number
  reviewCount: number
  reviewUrl: string
  whatsapp: string
  phone: string
  email: string
  instagram?: string
  website?: string
  iconActions: CardIconAction[]
  links: CardLink[]
}
