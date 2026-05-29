import { demoVideoBySlot } from './playableVideoSources';

export interface BrandFeature {
  title: string;
  description: string;
}

export interface BrandMediaItem {
  caption: string;
  image: string;
  videoUrl?: string[];
}

const primaryBrandName = 'SONAM';
const brandDisplayName = 'Sonam';
const companionBrandName = 'Pony';
const manufacturer = 'Krishnsai Industries';

const homeGallery: BrandMediaItem[] = [
  {
    caption: 'Sonam Mukhwas',
    image: '/brand/01_sonam_mukhwas.png',
    videoUrl: [...demoVideoBySlot[0]],
  },
  {
    caption: 'Sonam Sounf Mixture',
    image: '/brand/02_sonam_sounf_mixture.png',
    videoUrl: [...demoVideoBySlot[1]],
  },
  {
    caption: 'Pony Mouth Freshner',
    image: '/brand/03_pony_mouth_freshener.png',
    videoUrl: [...demoVideoBySlot[2]],
  },
];

const videosGallery: BrandMediaItem[] = [
  ...homeGallery,
  {
    caption: 'Shelf-ready branding',
    image: '/brand/01_sonam_mukhwas.png',
    videoUrl: [...demoVideoBySlot[3]],
  },
  {
    caption: 'Core sounf mixture line',
    image: '/brand/02_sonam_sounf_mixture.png',
    videoUrl: [...demoVideoBySlot[4]],
  },
  {
    caption: 'Pony value range',
    image: '/brand/03_pony_mouth_freshener.png',
    videoUrl: [...demoVideoBySlot[5]],
  },
];

export const company = {
  brandName: primaryBrandName,
  brandDisplayName,
  companionBrandName,
  manufacturer,
  productLine: 'Sounf Mixture and Mukhwas',
  tagline: 'The art of instant freshness',
  email: 'krishnsaiindustries@gmail.com',
  location: 'Hyderabad - 37, Telangana, India',
  region: 'Hyderabad, Telangana',
  marketFocus: 'Retail, wholesale, HoReCa, e-commerce, and export-oriented saunf products',
  heroSummary:
    `${brandDisplayName} presents everyday saunf freshness in recognizable packs made for counters, shelves, and repeat purchase.`,
  complianceSummary:
    'The business is positioned around hygienic handling, food-grade storage, labeling discipline, and FSSAI-aligned manufacturing practices.',
  assets: {
    headerLogo: {
      src: '/img/client/sonam_logo.png',
      alt: `${brandDisplayName} Sounf Mixture and Mukhwas logo`,
    },
    footerLogo: {
      src: '/img/client/krish_and_sai_logo.png',
      alt: `${manufacturer} logo`,
    },
    favicon: '/brand/06_sonam_favicon.png',
    heroPack: {
      src: '/brand/02_sonam_sounf_mixture.png',
      alt: `${brandDisplayName} Sounf Mixture pack`,
    },
    aboutPack: {
      src: '/brand/02_sonam_sounf_mixture.png',
      alt: `${brandDisplayName} Sounf Mixture pack`,
    },
  },
  content: {
    aboutPageDescription:
      'A Hyderabad-based saunf and mouth freshener brand built around freshness, clean packaging, and dependable supply.',
    aboutIntroLead:
      `${manufacturer} brings familiar saunf-based products to market through branded packs that are easy to recognize, easy to display, and practical for everyday sale.`,
    aboutIntroBody:
      'Our focus is simple: deliver mouth freshener products that combine appealing presentation with consistent handling, dependable quality, and a business approach that supports both trade buyers and consumers.',
    aboutWhoWeServeIntro:
      'We serve a broad mix of customers through practical pack formats, consistent presentation, and dependable channel support.',
    homeMobileSummary:
      `${brandDisplayName} is built for quick shelf recall, familiar taste, and simple everyday freshness.`,
    homeRangeSummary:
      `The current range highlights the ${brandDisplayName} core packs and the ${companionBrandName} value pack, each presented with product details for retailers, distributors, and trade enquiries.`,
    homeHeroPackEyebrow: 'Featured pack',
    homeHeroPackTitle: `${brandDisplayName} Sounf Mixture`,
    homeCompanyProfile:
      `${manufacturer} develops ${brandDisplayName} and ${companionBrandName} as trade-ready mouth freshener packs with cleaner presentation, dependable handling, and everyday retail appeal.`,
    homeContactPrompt:
      `For distributor interest, retail placement, bulk supply, export enquiries, or brand-related discussions around the ${brandDisplayName} range.`,
    homeTopBadge: manufacturer,
    productsPageDescription:
      `A focused retail range covering ${brandDisplayName} Mukhwas, ${brandDisplayName} Sounf Mixture, and ${companionBrandName} Mouth Freshner.`,
    videosPageDescription:
      `Pack art from the ${brandDisplayName} and ${companionBrandName} range. Every tile uses the same Pexels stock clip as a placeholder until you drop your own MP4s in public/videos.`,
    videosCtaDescription:
      `For higher-resolution assets, distributor discussions, or product details about the ${brandDisplayName} range.`,
    contactPageDescription:
      `Send a retail, wholesale, distribution, or export enquiry for the ${brandDisplayName} and ${companionBrandName} product range.`,
  },
  homeHighlights: [
    {
      value: 'Clean Packing',
      label: 'Shelf-ready presentation with hygienic handling',
    },
    {
      value: 'Fresh Taste',
      label: 'Familiar saunf blends made for everyday refreshment',
    },
    {
      value: 'Trade Ready',
      label: 'Suitable for retail, wholesale, and hospitality channels',
    },
  ],
  motto: [
    'Pure natural sounf',
    'No compromise on quality',
    'Provide good service',
    'On-time delivery',
  ],
  strengths: [
    `Focused brand identity built around ${brandDisplayName} and ${companionBrandName} retail packs`,
    'Suitable for distributor, supermarket, restaurant, and sweet-shop channels',
    'Aligned with demand for natural breath fresheners and digestive products',
  ],
  customerSegments: [
    'Retailers, supermarkets, and neighborhood grocery stores',
    'Restaurants, hotels, caterers, and sweet shops',
    'Food processors, spice blenders, and packaged food companies',
    'Exporters and online sellers serving domestic and overseas buyers',
  ],
  operatingPriorities: [
    'Consistent product quality and clean packing',
    'FSSAI-compliant labeling and traceable manufacturing details',
    'Reliable distribution across wholesale, retail, and bulk channels',
  ],
  industryNotes: [
    'The fennel seed market remains fragmented, with strong competition from regional and national players.',
    'Demand is supported by processed foods, post-meal refreshment use, and digestive-health positioning.',
    'Seasonality matters: procurement and processing are strongest after the March-April harvest cycle.',
  ],
  aboutHighlights: [
    {
      title: 'What We Make',
      description:
        'Branded saunf and mouth freshener products designed for everyday use, retail visibility, and repeat customer recall.',
    },
    {
      title: 'How We Work',
      description:
        'We focus on hygienic handling, clean packing, accurate labeling, and food-grade practices that support product quality.',
    },
    {
      title: 'Where We Serve',
      description:
        'Our products are suited for retail shelves, wholesale buyers, restaurants, sweet shops, and growing distribution channels.',
    },
  ] as BrandFeature[],
  aboutQualityPoints: [
    'Clean processing and careful packing',
    'Strong presentation for shelf-ready products',
    'Reliable supply for trade and retail buyers',
  ],
  homeGallery,
  videosGallery,
};

export const contactChannels = [
  {
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    label: 'Location',
    value: company.location,
  },
  {
    label: 'Business Focus',
    value: company.marketFocus,
  },
] as const;