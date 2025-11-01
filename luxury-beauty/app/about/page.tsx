import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="container mx-auto text-center">
          <p className="text-luxury-script text-4xl text-luxury-rose-gold mb-4">Our Story</p>
          <h1 className="font-playfair text-5xl md:text-7xl mb-6">
            Where Passion Meets<br />Perfection
          </h1>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for timeless beauty and uncompromising quality, LUMIÈRE represents the pinnacle of luxury skincare.
          </p>
        </div>
      </section>

      {/* Heritage */}
      <section className="px-6 mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80"
                alt="Luxury beauty heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl">Our Heritage</h2>
              <p className="text-luxury-black/70 leading-relaxed">
                Founded in the heart of Paris in 1985, LUMIÈRE began as a small atelier dedicated to creating the finest beauty formulations. Our founder, Marie Dubois, believed that true luxury lies in the perfect marriage of nature&apos;s treasures and scientific innovation.
              </p>
              <p className="text-luxury-black/70 leading-relaxed">
                What started as a collection of three signature products has grown into a comprehensive range of luxury beauty essentials, each one crafted with the same meticulous attention to detail and unwavering commitment to excellence that defined our first creation.
              </p>
              <p className="text-luxury-black/70 leading-relaxed">
                Today, LUMIÈRE continues to honor Marie&apos;s vision, creating products that don&apos;t just enhance beauty—they celebrate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 mb-24 py-24 bg-luxury-ivory-soft">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-luxury-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-luxury-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl">Timeless Elegance</h3>
              <p className="text-luxury-black/70">
                We believe beauty is timeless. Our formulations are designed to enhance your natural radiance, not chase fleeting trends.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-luxury-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-luxury-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl">Uncompromising Quality</h3>
              <p className="text-luxury-black/70">
                Every ingredient is carefully sourced and rigorously tested. We never compromise on quality, purity, or efficacy.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-luxury-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-luxury-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl">Sustainable Luxury</h3>
              <p className="text-luxury-black/70">
                Luxury and responsibility go hand in hand. We&apos;re committed to sustainable practices and eco-conscious packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="px-6 mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-playfair text-4xl md:text-5xl">The Art of Craftsmanship</h2>
              <p className="text-luxury-black/70 leading-relaxed">
                Each LUMIÈRE product is the result of years of research and development. Our team of expert chemists and botanists work tirelessly to create formulations that deliver visible, lasting results.
              </p>
              <p className="text-luxury-black/70 leading-relaxed">
                We source the finest ingredients from around the world—rare botanical extracts from the Amazon, precious oils from Morocco, and cutting-edge peptides from Swiss laboratories. Every ingredient is chosen for its proven efficacy and luxurious sensorial properties.
              </p>
              <p className="text-luxury-black/70 leading-relaxed">
                Our small-batch production process ensures that every bottle meets our exacting standards. From formulation to packaging, every step is executed with precision and care.
              </p>
            </div>

            <div className="relative aspect-[4/5] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80"
                alt="Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 mb-24 py-24 bg-luxury-black text-luxury-ivory">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: '1985', title: 'The Beginning', desc: 'Marie Dubois opens her first atelier in Paris, creating three signature products.' },
              { year: '1992', title: 'International Recognition', desc: 'LUMIÈRE wins the prestigious Prix de la Beauté for innovation in luxury skincare.' },
              { year: '2005', title: 'Global Expansion', desc: 'Our products become available in select boutiques across Europe, Asia, and North America.' },
              { year: '2015', title: 'Sustainability Initiative', desc: 'Launch of our eco-conscious packaging program and commitment to carbon neutrality.' },
              { year: '2025', title: 'The Future', desc: 'Continuing to innovate while honoring our heritage of timeless beauty and excellence.' },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="text-luxury-rose-gold font-playfair text-3xl min-w-[100px]">
                  {milestone.year}
                </div>
                <div className="flex-1 border-l-2 border-luxury-rose-gold pl-8 pb-8">
                  <h3 className="font-playfair text-2xl mb-2">{milestone.title}</h3>
                  <p className="text-luxury-ivory/70">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="px-6 mb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                alt="Founder"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <h2 className="font-playfair text-3xl mb-2">A Message from Our Founder</h2>
            <p className="text-luxury-rose-gold">Marie Dubois</p>
          </div>

          <div className="space-y-6 text-center text-luxury-black/70 leading-relaxed">
            <p className="text-lg italic">
              &quot;Beauty is not about perfection—it&apos;s about confidence, self-care, and the joy of feeling your absolute best.&quot;
            </p>
            <p>
              When I created LUMIÈRE, my vision was simple: to offer women products that make them feel as beautiful as they truly are. Every formula we create is infused with this intention—to enhance, to nourish, to celebrate.
            </p>
            <p>
              Thank you for allowing us to be part of your beauty ritual. It is an honor and a privilege.
            </p>
            <p className="font-allura text-3xl text-luxury-rose-gold mt-8">
              Marie Dubois
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="container mx-auto text-center py-16 luxury-gradient">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">Experience LUMIÈRE</h2>
          <p className="text-luxury-black/70 mb-8 max-w-2xl mx-auto">
            Discover our complete collection of luxury beauty products
          </p>
          <Button variant="primary">
            <Link href="/collections">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
