import type { DoctorCard } from '../../types/card.types'

export const drAlexandre: DoctorCard = {
  slug: 'dr-alexandre',
  theme: 'health',
  name: 'Dr. Alexandre Frascino',
  title: 'Cirurgião Bucomaxilofacial',
  credentials: 'Mestrado e Doutorado · USP',
  registration: 'CROSP 96104',
  photo: '/photos/Dr_Alexandre_Frascino.jpg',
  rating: 5.0,
  reviewCount: 32,
  reviewUrl: 'https://g.page/r/CWluL_Ps2ileEBM/review',
  whatsapp: '5511994258561',
  phone: '+5511994258561',
  email: 'aledefra@gmail.com',
  instagram: 'https://www.instagram.com/aledefra',
  website: 'https://www.aledefra.com.br',
  iconActions: [
    { id: 'email', label: 'E-mail', icon: 'mail', href: 'mailto:aledefra@gmail.com' },
    { id: 'map', label: 'Mapa', icon: 'map-pin', href: 'https://www.google.com/maps/search/Dr.+Alexandre+Frascino+Bucomaxilofacial+Vila+Clementino+Sao+Paulo' },
    { id: 'website', label: 'Site', icon: 'world', href: 'https://www.aledefra.com.br' },
    { id: 'instagram', label: 'Instagram', icon: 'brand-instagram', href: 'https://www.instagram.com/aledefra' },
  ],
  links: [
    { id: 'review', label: 'Sua opinião é muito importante', sublabel: 'Google · ajude outros pacientes', icon: 'star', href: 'https://g.page/r/CWluL_Ps2ileEBM/review', highlight: true },
    { id: 'schedule', label: 'Agendar consulta', sublabel: 'Doctoralia · com hora marcada', icon: 'calendar-plus', href: 'https://www.doctoralia.com.br/alexandre-frascino' },
    { id: 'website2', label: 'Conheça meu trabalho', sublabel: 'aledefra.com.br', icon: 'file-text', href: 'https://www.aledefra.com.br' },
    { id: 'address', label: 'Consultório', sublabel: 'R. Pedro de Toledo, 108 · 15º andar · Vila Clementino', icon: 'building', href: 'https://www.google.com/maps/search/Dr.+Alexandre+Frascino+Bucomaxilofacial+Vila+Clementino+Sao+Paulo' },
  ],
}
