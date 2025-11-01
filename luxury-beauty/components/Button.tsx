import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 font-montserrat text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-luxury-black text-luxury-ivory hover:bg-luxury-rose-gold hover:scale-105',
    secondary: 'bg-luxury-rose-gold text-luxury-ivory hover:bg-luxury-gold-accent hover:scale-105',
    outline: 'border-2 border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-ivory',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
