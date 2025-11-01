"use client";

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-luxury-script text-3xl text-luxury-rose-gold mb-2">Shop</p>
          <h1 className="font-playfair text-5xl md:text-6xl mb-4">Our Collections</h1>
          <p className="text-luxury-black/70 max-w-2xl mx-auto">
            Discover our complete range of luxury beauty products, each crafted to perfection
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b border-luxury-pearl-gray">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all ${
                  selectedCategory === category
                    ? 'bg-luxury-black text-luxury-ivory'
                    : 'bg-luxury-pearl-gray text-luxury-black hover:bg-luxury-rose-gold hover:text-luxury-ivory'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label className="text-sm tracking-wider uppercase">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-luxury-pearl-gray bg-luxury-ivory text-luxury-black focus:outline-none focus:border-luxury-rose-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12 text-luxury-black/70">
          Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
        </div>
      </div>
    </div>
  );
}
