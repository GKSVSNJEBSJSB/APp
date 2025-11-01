"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/CartContext';
import { useCart } from '@/lib/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="group relative animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square mb-4 overflow-hidden bg-luxury-pearl-gray">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-luxury-black text-luxury-ivory px-4 py-1 text-xs tracking-wider uppercase">
              {product.badge}
            </div>
          )}
          
          {/* Quick Add Button - Shows on Hover */}
          <div className={`absolute inset-0 bg-luxury-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="transform scale-90 hover:scale-100"
            >
              Add to Collection
            </Button>
          </div>
        </div>
      </Link>

      <div className="text-center">
        <p className="text-xs tracking-wider uppercase text-luxury-rose-gold mb-2">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-playfair text-xl mb-2 hover:text-luxury-rose-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-luxury-black font-medium">${product.price}</p>
      </div>
    </div>
  );
}
