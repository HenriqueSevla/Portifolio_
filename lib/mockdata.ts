import type { CardItem } from '@/types/card'

export const mockData: CardItem[] = [
  {
    id: '1',
    slug: 'thermas-dos-laranjais',
    title: 'Thermas dos Laranjais',
    description: 'Um dos maiores parques aquáticos da América Latina, com dezenas de atrações.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    tag: 'Parque Aquático',
    price: 'R$ 129',
    category: 'atracao'
  },
  {
    id: '2',
    slug: 'hot-beach-olimpia',
    title: 'Hot Beach Olímpia',
    description: 'Resort & parque com águas quentes, praia artificial e estrutura completa.',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop',
    tag: 'Resort & Parque',
    price: 'R$ 159',
    category: 'atracao'
  },
  {
    id: '3',
    slug: 'pousada-bem-te-vi',
    title: 'Pousada Bem-te-vi',
    description: 'Conforto e café da manhã colonial a 5 min do parque.',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e008f61c76?q=80&w=1600&auto=format&fit=crop',
    tag: 'Pousada',
    price: 'R$ 220/noite',
    category: 'hospedagem'
  },
  {
    id: '4',
    slug: 'restaurante-dona-olimpia',
    title: 'Restaurante Dona Olímpia',
    description: 'Culinária regional com ingredientes locais e ambiente familiar.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
    tag: 'Culinária Regional',
    price: 'R$ 60/pessoa',
    category: 'restaurante'
  },
  {
    id: '5',
    slug: 'festival-do-folclore',
    title: 'Festival do Folclore',
    description: 'Evento tradicional com danças, música e artesanato local.',
    image: 'https://images.unsplash.com/photo-1546707012-0e6b85b498ea?q=80&w=1600&auto=format&fit=crop',
    tag: 'Cultura',
    price: 'Gratuito',
    category: 'evento'
  },
  {
    id: '6',
    slug: 'resort-aguas-quentes',
    title: 'Resort Águas Quentes',
    description: 'Resort completo com spa, piscina termal e área kids.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1600&auto=format&fit=crop',
    tag: 'Resort',
    price: 'R$ 480/noite',
    category: 'hospedagem'
  }
]
