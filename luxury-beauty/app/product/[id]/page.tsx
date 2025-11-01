"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { useCart } from '@/lib/CartContext';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 text-center">
        <h1 className="font-playfair text-4xl mb-4">Product Not Found</h1>
        <Button>
          <Link href="/collections">Back to Collections</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = [product.image, product.image, product.image]; // In real app, would have multiple images

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Product Details */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-luxury-pearl-gray overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <div className="absolute top-6 left-6 bg-luxury-black text-luxury-ivory px-6 py-2 text-sm tracking-wider uppercase">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-luxury-pearl-gray overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-luxury-rose-gold' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm tracking-wider uppercase text-luxury-rose-gold mb-2">
                {product.category}
              </p>
              <h1 className="font-playfair text-4xl md:text-5xl mb-4">{product.name}</h1>
              <p className="text-3xl font-playfair text-luxury-black mb-6">${product.price}</p>
            </div>

            <div className="py-6 border-y border-luxury-pearl-gray">
              <p className="text-luxury-black/80 leading-relaxed">{product.description}</p>
            </div>

            {/* Key Ingredients */}
            <div>
              <h3 className="font-playfair text-xl mb-3">Key Ingredients</h3>
              <ul className="space-y-2 text-luxury-black/70">
                <li>• 24K Gold Flakes - Illuminates and revitalizes</li>
                <li>• Hyaluronic Acid - Deep hydration</li>
                <li>• Rose Oil - Nourishes and soothes</li>
                <li>• Vitamin C - Brightens and protects</li>
              </ul>
            </div>

            {/* How to Use */}
            <div>
              <h3 className="font-playfair text-xl mb-3">How to Use</h3>
              <p className="text-luxury-black/70 leading-relaxed">
                Apply a small amount to clean, dry skin. Gently massage in upward circular motions until fully absorbed. Use morning and evening for best results.
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <label className="text-sm tracking-wider uppercase">Quantity:</label>
                <div className="flex items-center border border-luxury-pearl-gray">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-luxury-pearl-gray transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 border-x border-luxury-pearl-gray">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-luxury-pearl-gray transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) {
                      addToCart(product);
                    }
                  }}
                >
                  Add to Collection
                </Button>
                <button className="px-6 border-2 border-luxury-black hover:bg-luxury-black hover:text-luxury-ivory transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-luxury-pearl-gray">
              <div className="text-center p-4 bg-luxury-ivory-soft">
                <p className="text-sm font-medium mb-1">Free Shipping</p>
                <p className="text-xs text-luxury-black/70">On orders over $200</p>
              </div>
              <div className="text-center p-4 bg-luxury-ivory-soft">
                <p className="text-sm font-medium mb-1">Satisfaction Guaranteed</p>
                <p className="text-xs text-luxury-black/70">30-day returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-luxury-ivory-soft py-16 px-6">
        <div className="container mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sophie M.', rating: 5, review: 'Absolutely transformative! My skin has never looked better.' },
              { name: 'Isabella R.', rating: 5, review: 'The texture is divine and the results are visible within days.' },
              { name: 'Charlotte L.', rating: 5, review: 'Worth every penny. This is luxury in a bottle.' },
            ].map((review, index) => (
              <div key={index} className="bg-luxury-ivory p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-luxury-gold-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-luxury-black/80 mb-3">&quot;{review.review}&quot;</p>
                <p className="text-sm font-medium">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-6 py-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Complete Your Ritual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
