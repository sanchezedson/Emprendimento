import { NeighborhoodProject } from '../types/index';
import heroImg from '../assets/images/hero_apartamentos_sp_1790208049936.jpg';
import vilaEmaImg from '../assets/images/apartamento_vila_ema_1790208059918.jpg';
import moocaImg from '../assets/images/apartamento_mooca_1790208070644.jpg';
import tatuapeImg from '../assets/images/apartamento_tatuape_1790208079322.jpg';

export { heroImg };

export const LOCATIONS_DATA: NeighborhoodProject[] = [
  {
    id: 'vila-ema',
    name: 'Origem Vila Ema',
    tagline: 'Modernidade e conexão verde a passos do metrô',
    neighborhood: 'Vila Ema',
    addressSummary: 'A 450m da Estação São Lucas e Oratório',
    formUrl: 'https://forms.gle/y8RfbkT2TGap5y6u5',
    image: vilaEmaImg,
    priceFrom: 'R$ 389.000',
    typologies: ['Studios Modernos', '2 Dorms (Opção Suíte)', 'Varanda Gourmet'],
    areaRange: '42m² a 68m²',
    bedrooms: '1 e 2 Dorms',
    parkingSpots: '1 Vaga Coberta',
    highlights: [
      'Piscina climatizada com raia e deck molhado',
      'Espaço coworking integrado de alta velocidade',
      'Varanda com ponto grill e vista livre',
      'Condições especiais com fluxo estendido de obras',
    ],
    description:
      'Projetado para quem busca mobilidade ágil e qualidade de vida na Zona Leste. Perto do monotrilho, ciclofaixas, mercados e colégios tradicionais.',
    deliveryYear: '2027',
    walkScore: '92 / 100 de Mobilidade',
  },
  {
    id: 'mooca',
    name: 'Palazzo Mooca',
    tagline: 'A essência da tradição paulistana em arquitetura contemporânea',
    neighborhood: 'Mooca',
    addressSummary: 'Região nobre da Mooca, próximo ao Clube Juventus',
    formUrl: 'https://forms.gle/MzZFHagdUSbhM2Yt9',
    image: moocaImg,
    priceFrom: 'R$ 645.000',
    typologies: ['2 Dorms c/ Suíte', '3 Dorms c/ 2 Suítes', 'Terraço Gourmet com Churrasqueira'],
    areaRange: '65m² a 115m²',
    bedrooms: '2 e 3 Dorms',
    parkingSpots: '1 a 2 Vagas Determinadas',
    highlights: [
      'Terraço com churrasqueira a carvão tradicional',
      'Rooftop Lounge com adega e espaço de degustação',
      'Academia com equipamentos de ponta e espaço pilates',
      'Localização em rua arborizada e silenciosa',
    ],
    description:
      'Um tributo à elegância e à rica gastronomia da Mooca. Arquitetura com tijolos aparentes, acabamentos nobres e espaços pensados para receber a família.',
    deliveryYear: '2026',
    walkScore: '96 / 100 de Gastronomia',
  },
  {
    id: 'tatuape',
    name: 'Iconic Tatuapé Sky',
    tagline: 'O ápice da sofisticação e valorização no endereço mais cobiçado',
    neighborhood: 'Tatuapé',
    addressSummary: 'Próximo ao Parque CERET e Shopping Anália Franco',
    formUrl: 'https://forms.gle/YjFkEVhcm1qyq3My6',
    image: tatuapeImg,
    priceFrom: 'R$ 890.000',
    typologies: ['3 Dormitórios (2 Suítes)', '4 Dormitórios (3 Suítes)', 'Penthouse Duplex'],
    areaRange: '78m² a 145m²',
    bedrooms: '3 e 4 Dorms',
    parkingSpots: '2 a 3 Vagas + Depósito Privativo',
    highlights: [
      'Piscina suspensa de borda infinita com vista 360° para SP',
      'Quadra oficial de Beach Tennis e Quadra Poliesportiva',
      'Spa privativo com sauna seca, úmida e sala de massagem',
      'Elevador privativo com biometria digital',
    ],
    description:
      'Imponência e exclusividade no bairro com a maior valorização imobiliária da região. A poucos minutos dos melhores centros de compras e parques da capital.',
    deliveryYear: '2026',
    walkScore: '98 / 100 de Conveniência',
  },
];
