import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { products, collections } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 luxury-gradient" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1920&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <p className="text-luxury-script text-4xl md:text-5xl mb-4 text-luxury-rose-gold">
            Timeless Elegance
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-6 tracking-luxury">
            Where Luxury<br />Meets Beauty
          </h1>
          <p className="text-lg md:text-xl text-luxury-black/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the art of timeless beauty. Each product is a masterpiece, crafted with the finest ingredients and designed to elevate your daily ritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">
              <Link href="/collections">Explore Collections</Link>
            </Button>
            <Button variant="outline">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-luxury-script text-3xl text-luxury-rose-gold mb-2">Curated for You</p>
            <h2 className="font-playfair text-4xl md:text-5xl mb-4">Featured Collections</h2>
            <p className="text-luxury-black/70 max-w-2xl mx-auto">
              Explore our carefully curated collections, each designed to address your unique beauty needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link 
                key={collection.id} 
                href="/collections"
                className="group relative aspect-[3/4] overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-luxury-ivory">
                  <h3 className="font-playfair text-3xl mb-2">{collection.name}</h3>
                  <p className="text-luxury-ivory/80 mb-4">{collection.description}</p>
                  <span className="inline-block text-sm tracking-wider uppercase border-b border-luxury-rose-gold pb-1 group-hover:border-luxury-ivory transition-colors">
                    Discover
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Products */}
      <section className="py-24 px-6 bg-luxury-ivory-soft">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-luxury-script text-3xl text-luxury-rose-gold mb-2">Bestsellers</p>
            <h2 className="font-playfair text-4xl md:text-5xl mb-4">Signature Products</h2>
            <p className="text-luxury-black/70 max-w-2xl mx-auto">
              Discover the products that define luxury beauty
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline">
              <Link href="/collections">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&q=80"
                alt="Luxury beauty products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <p className="text-luxury-script text-3xl text-luxury-rose-gold">Our Heritage</p>
              <h2 className="font-playfair text-4xl md:text-5xl">
                Crafted with Passion, Perfected with Science
              </h2>
              <p className="text-luxury-black/70 leading-relaxed">
                Born from a passion for timeless beauty and uncompromising quality, LUMIÈRE represents the pinnacle of luxury skincare. Every formula is a testament to our commitment to excellence, blending cutting-edge science with nature&apos;s most precious ingredients.
              </p>
              <p className="text-luxury-black/70 leading-relaxed">
                Our journey began with a simple belief: that true beauty is timeless, and luxury should be an experience, not just a product. Today, we continue to honor that vision with every creation.
              </p>
              <Button variant="outline">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-24 px-6 bg-luxury-black text-luxury-ivory">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-luxury-script text-3xl text-luxury-rose-gold mb-2">Beauty Journal</p>
            <h2 className="font-playfair text-4xl md:text-5xl mb-4">The Art of Beauty</h2>
            <p className="text-luxury-ivory/70 max-w-2xl mx-auto">
              Expert insights, rituals, and secrets from the world of luxury beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Morning Ritual',
                excerpt: 'Discover the perfect morning skincare routine for radiant, glowing skin',
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
              },
              {
                title: 'Ingredient Spotlight: 24K Gold',
                excerpt: 'Explore the luxurious benefits of gold in skincare and its transformative properties',
                image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80',
              },
              {
                title: 'Timeless Beauty Secrets',
                excerpt: 'Age-old wisdom meets modern science in these essential beauty practices',
                image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80',
              },
            ].map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-playfair text-2xl mb-2 group-hover:text-luxury-rose-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-luxury-ivory/70 mb-4">{article.excerpt}</p>
                <span className="text-sm tracking-wider uppercase text-luxury-rose-gold">
                  Read More →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-6 border-t border-luxury-pearl-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Cruelty Free', desc: 'Never tested on animals' },
              { title: 'Clean Beauty', desc: 'No harmful ingredients' },
              { title: 'Sustainable', desc: 'Eco-conscious packaging' },
              { title: 'Dermatologist Tested', desc: 'Clinically proven results' },
            ].map((item, index) => (
              <div key={index}>
                <h4 className="font-playfair text-xl mb-2">{item.title}</h4>
                <p className="text-sm text-luxury-black/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
