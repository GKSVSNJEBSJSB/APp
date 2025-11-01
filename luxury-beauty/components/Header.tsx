"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import Cart from './Cart';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl md:text-3xl font-playfair tracking-luxury">
              <span className="text-luxury-black">LUMIÈRE</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors">
                Collections
              </Link>
              <Link href="/about" className="text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors">
                Our Story
              </Link>
              <Link href="/collections" className="text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors">
                Shop
              </Link>
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-luxury-rose-gold transition-colors"
                aria-label="Shopping cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-luxury-rose-gold text-luxury-ivory text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-6 pb-4 space-y-4 animate-fade-in">
              <Link 
                href="/collections" 
                className="block text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                href="/about" 
                className="block text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link 
                href="/collections" 
                className="block text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </nav>
          )}
        </div>
      </header>
      <Cart />
    </>
  );
}
