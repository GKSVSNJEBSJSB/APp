# LUMIÈRE - Luxury Beauty Brand Website

A sophisticated, high-end luxury beauty brand e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS v4.

## Features

### Pages
- **Homepage**: Hero section, featured collections, signature products, brand story teaser, editorial content, and newsletter signup
- **Collections**: Product grid with filtering and sorting capabilities
- **Product Detail**: Image gallery, detailed product information, reviews, and related products
- **About**: Brand story, heritage, philosophy, craftsmanship, and founder's message
- **Checkout**: Complete checkout flow with order summary

### Design Elements
- **Color Palette**: Deep blacks, ivory whites, rose gold, champagne gold accents
- **Typography**: Elegant serif fonts (Playfair Display, Cormorant Garamond) paired with clean sans-serif (Montserrat)
- **Animations**: Smooth transitions, hover effects, fade-ins, and parallax scrolling
- **Responsive**: Mobile-first design with breakpoints for all devices

### Functionality
- Shopping cart with slide-out panel
- Add/remove products from cart
- Quantity management
- Product filtering by category
- Product sorting (price, name, featured)
- Newsletter subscription
- Gift options and personalized messages

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond, Montserrat, Allura)
- **State Management**: React Context API
- **Images**: Next.js Image optimization with Unsplash

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

\`\`\`bash
npm run build
\`\`\`

### Production

\`\`\`bash
npm start
\`\`\`

## Project Structure

\`\`\`
luxury-beauty/
├── app/
│   ├── about/          # About page
│   ├── checkout/       # Checkout page
│   ├── collections/    # Collections page
│   ├── product/[id]/   # Dynamic product detail page
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout with fonts and providers
│   └── page.tsx        # Homepage
├── components/
│   ├── Button.tsx      # Reusable button component
│   ├── Cart.tsx        # Shopping cart slide-out panel
│   ├── Footer.tsx      # Footer with newsletter
│   ├── Header.tsx      # Navigation header
│   └── ProductCard.tsx # Product card component
├── lib/
│   ├── CartContext.tsx # Shopping cart state management
│   └── products.ts     # Product data and collections
└── public/
    └── images/         # Static images
\`\`\`

## Design Philosophy

This website embodies luxury through:
- **Minimalist layouts** with abundant white space
- **Elegant typography** with generous letter spacing
- **Sophisticated color palette** inspired by high-end beauty brands
- **Smooth animations** and micro-interactions
- **High-quality imagery** with editorial-style photography
- **Attention to detail** in every element

## Key Components

### CartContext
Manages global shopping cart state using React Context API:
- Add/remove products
- Update quantities
- Calculate totals
- Cart open/close state

### ProductCard
Reusable product card with:
- Hover effects
- Quick add to cart
- Product badges (New, Bestseller, Limited Edition)
- Category labels

### Header
Sticky navigation with:
- Transparent overlay on hero
- Glass morphism effect on scroll
- Mobile-responsive menu
- Cart icon with item count

### Footer
Comprehensive footer with:
- Newsletter subscription
- Navigation links
- Social media icons
- Trust signals

## Customization

### Colors
Edit the CSS variables in `app/globals.css` under the `@theme` directive:
\`\`\`css
--color-luxury-black: #000000;
--color-luxury-rose-gold: #B76E79;
// ... etc
\`\`\`

### Products
Add or modify products in `lib/products.ts`:
\`\`\`typescript
export const products: Product[] = [
  {
    id: '1',
    name: 'Product Name',
    price: 285,
    image: 'image-url',
    description: 'Description',
    category: 'Category',
    badge: 'Bestseller',
  },
  // ...
];
\`\`\`

### Fonts
Fonts are configured in `app/layout.tsx` using next/font/google.

## Performance

- Lazy loading for images
- Optimized image formats via Next.js Image component
- Static page generation where possible
- Minimal JavaScript for fast load times
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project created for educational purposes.

## Credits

- Images: Unsplash
- Fonts: Google Fonts
- Framework: Next.js by Vercel
