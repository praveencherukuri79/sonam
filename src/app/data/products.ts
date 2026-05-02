export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  flavors: string[];
  isLaunched: boolean;
  image: string;
  ingredients: string[];
  benefits: string[];
  weight: string;
}

export const products: Product[] = [
  {
    id: 'sonam-mukhwas',
    name: 'Sonam Mukhwas',
    description: 'Sweet saunf mouth freshener with bright shelf presence and a familiar everyday profile.',
    longDescription: 'Sonam Mukhwas is one of the lead retail-facing packs in the Sonam range. It is positioned as an easy, familiar post-meal mouth freshener built around sweet saunf appeal, quick brand recognition, and practical everyday consumption.',
    flavors: ['Sweet', 'Classic', 'Everyday'],
    isLaunched: true,
    image: '/brand/01_sonam_mukhwas.png',
    ingredients: ['Selected fennel seeds', 'Sweet flavor coating', 'Aromatic blend notes', 'Food-grade packed freshness'],
    benefits: ['Freshens breath after meals', 'Offers a recognizable sweet saunf taste', 'Supports everyday retail sale', 'Built for visible shelf recall'],
    weight: 'Retail pack'
  },
  {
    id: 'sonam-sounf-mixture',
    name: 'Sonam Sounf Mixture',
    description: 'Core Sonam blend centered on classic saunf taste, aroma, and repeat purchase potential.',
    longDescription: 'Sonam Sounf Mixture is the core brand expression for the business. It is presented as a traditional saunf mixture with strong visual identity, straightforward product communication, and suitability for retail, wholesale, and hospitality channels.',
    flavors: ['Classic', 'Aromatic', 'Digestive'],
    isLaunched: true,
    image: '/brand/02_sonam_sounf_mixture.png',
    ingredients: ['Saunf base blend', 'Flavoring support', 'Aromatic mix profile', 'Hygienic retail packaging'],
    benefits: ['Fits daily post-meal consumption', 'Works across multiple customer segments', 'Supports distributor-led movement', 'Extends core brand recognition'],
    weight: 'Retail pack'
  },
  {
    id: 'pony-mouth-freshner',
    name: 'Pony Mouth Freshner',
    description: 'Value-focused Pony pack designed for quick freshness and broad everyday retail reach.',
    longDescription: 'Pony Mouth Freshner adds a sharper value-pack identity to the portfolio. It is well suited to fast-moving counter sales, impulse purchases, and outlets that need a recognizable low-ticket freshness product alongside the Sonam line.',
    flavors: ['Value Pack', 'Fresh', 'On-the-go'],
    isLaunched: true,
    image: '/brand/03_pony_mouth_freshener.png',
    ingredients: ['Retail-oriented freshness blend', 'Flavor support', 'Compact pack communication', 'Easy counter display format'],
    benefits: ['Supports value retail positioning', 'Designed for quick freshness use', 'Suitable for impulse purchase points', 'Adds range depth beside the Sonam packs'],
    weight: 'Value pack'
  },
];
