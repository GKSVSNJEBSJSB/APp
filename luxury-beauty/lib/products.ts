import { Product } from './CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Radiant Youth Serum',
    price: 285,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    description: 'A luxurious elixir that transforms your skin overnight. Infused with 24K gold and rare botanical extracts, this serum delivers unparalleled hydration and luminosity.',
    category: 'Serums',
    badge: 'Bestseller',
  },
  {
    id: '2',
    name: 'Velvet Rose Moisturizer',
    price: 195,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    description: 'Indulge in the ultimate hydration experience. This silky cream envelops your skin in moisture, leaving it soft, supple, and delicately scented with rose.',
    category: 'Moisturizers',
    badge: 'New',
  },
  {
    id: '3',
    name: 'Diamond Eye Cream',
    price: 245,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&q=80',
    description: 'Illuminate the delicate eye area with this precious formula. Diamond powder and peptides work together to reduce fine lines and restore youthful radiance.',
    category: 'Eye Care',
  },
  {
    id: '4',
    name: 'Golden Hour Face Oil',
    price: 165,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80',
    description: 'A blend of seven precious oils that nourish and illuminate. This lightweight formula absorbs instantly, leaving skin with a natural, golden glow.',
    category: 'Oils',
    badge: 'Limited Edition',
  },
  {
    id: '5',
    name: 'Pearl Essence Cleanser',
    price: 125,
    image: 'https://images.unsplash.com/photo-1556228852-80a5e2c53b0e?w=800&q=80',
    description: 'Gently purify your skin with this creamy cleanser enriched with pearl extract. Removes impurities while maintaining skin\'s natural moisture balance.',
    category: 'Cleansers',
  },
  {
    id: '6',
    name: 'Silk Veil Primer',
    price: 95,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    description: 'Create the perfect canvas with this silky primer. Blurs imperfections and extends makeup wear while nourishing skin with botanical extracts.',
    category: 'Makeup',
    badge: 'Bestseller',
  },
  {
    id: '7',
    name: 'Champagne Glow Mask',
    price: 145,
    image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80',
    description: 'Indulge in a spa-like experience at home. This luxurious mask infused with champagne extract brightens and revitalizes tired, dull skin.',
    category: 'Masks',
  },
  {
    id: '8',
    name: 'Eternal Youth Cream',
    price: 325,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
    description: 'Our most advanced anti-aging formula. Combines cutting-edge peptides with rare botanicals to visibly reduce wrinkles and restore firmness.',
    category: 'Anti-Aging',
    badge: 'New',
  },
];

export const collections = [
  {
    id: 'radiance',
    name: 'Radiance Collection',
    description: 'Illuminate your natural beauty with our signature glow-enhancing formulas',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&q=80',
  },
  {
    id: 'youth',
    name: 'Youth Renewal',
    description: 'Turn back time with our advanced anti-aging technology',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1200&q=80',
  },
  {
    id: 'ritual',
    name: 'Daily Ritual',
    description: 'Essential luxuries for your everyday beauty routine',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80',
  },
];
