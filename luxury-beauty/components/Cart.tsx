"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import Button from './Button';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-luxury-black/50 z-50 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-luxury-ivory z-50 shadow-2xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-luxury-pearl-gray flex justify-between items-center">
          <h2 className="font-playfair text-2xl">Your Collection</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="hover:text-luxury-rose-gold transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-luxury-pearl-gray mb-6">Your collection is empty</p>
              <Button onClick={() => setIsCartOpen(false)}>
                <Link href="/collections">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-luxury-pearl-gray">
                  <div className="relative w-24 h-24 flex-shrink-0 bg-luxury-pearl-gray">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg mb-1">{item.name}</h3>
                    <p className="text-sm text-luxury-pearl-gray mb-3">${item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-luxury-pearl-gray">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-luxury-pearl-gray transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-luxury-pearl-gray transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-luxury-rose-gold hover:text-luxury-burgundy transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-luxury-pearl-gray bg-luxury-ivory-soft">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-playfair">Subtotal</span>
              <span className="text-2xl font-playfair">${cartTotal.toFixed(2)}</span>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full" onClick={() => setIsCartOpen(false)}>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm tracking-wider uppercase hover:text-luxury-rose-gold transition-colors"
              >
                Continue Shopping
              </button>
            </div>
            
            <p className="text-xs text-center text-luxury-pearl-gray mt-4">
              Free shipping on orders over $200
            </p>
          </div>
        )}
      </div>
    </>
  );
}
