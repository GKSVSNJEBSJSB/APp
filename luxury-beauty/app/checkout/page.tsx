"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import Button from '@/components/Button';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phone: '',
  });

  const shipping = cartTotal > 200 ? 0 : 15;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your order! This is a demo checkout.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 text-center">
        <h1 className="font-playfair text-4xl mb-4">Your cart is empty</h1>
        <p className="text-luxury-black/70 mb-8">Add some products to continue</p>
        <Button>
          <Link href="/collections">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="font-playfair text-4xl md:text-5xl text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="font-playfair text-2xl mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="font-playfair text-2xl mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal code"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-3 border border-luxury-pearl-gray focus:outline-none focus:border-luxury-rose-gold transition-colors"
                  />
                </div>
              </div>

              {/* Gift Options */}
              <div className="border-t border-luxury-pearl-gray pt-8">
                <h2 className="font-playfair text-2xl mb-6">Gift Options</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Add luxury gift wrapping (+$15)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Include personalized message card</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border-t border-luxury-pearl-gray pt-8">
                <h2 className="font-playfair text-2xl mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-luxury-pearl-gray hover:border-luxury-rose-gold transition-colors">
                    <input type="radio" name="payment" value="card" defaultChecked />
                    <span>Credit Card</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-luxury-pearl-gray hover:border-luxury-rose-gold transition-colors">
                    <input type="radio" name="payment" value="paypal" />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-luxury-ivory-soft p-8 sticky top-32">
              <h2 className="font-playfair text-2xl mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-luxury-pearl-gray">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0 bg-luxury-pearl-gray">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-black text-luxury-ivory rounded-full flex items-center justify-center text-xs">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{item.name}</h3>
                      <p className="text-sm text-luxury-black/70">${item.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-6 pb-6 border-b border-luxury-pearl-gray">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center text-xl font-playfair mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Free Shipping Notice */}
              {shipping > 0 && (
                <div className="bg-luxury-blush p-4 text-sm text-center">
                  Add ${(200 - cartTotal).toFixed(2)} more for free shipping
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-luxury-pearl-gray space-y-3 text-sm text-luxury-black/70">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-luxury-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-luxury-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>30-day satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-luxury-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ships within 2-3 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
