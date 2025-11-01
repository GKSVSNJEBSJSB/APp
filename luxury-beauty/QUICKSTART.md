# LUMIÈRE - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd luxury-beauty
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📱 What You'll See

### Homepage
- Elegant hero section with "Where Luxury Meets Beauty"
- Featured collections grid
- Signature products showcase
- Brand story teaser
- Beauty journal articles
- Newsletter signup

### Navigation
- **Collections** - Browse all products with filters
- **Our Story** - Learn about the brand
- **Cart Icon** - View shopping cart (top right)

---

## 🛍️ Try These Features

### Shopping Experience
1. **Browse Products**: Click "Explore Collections" or navigate to Collections
2. **View Details**: Click any product to see full details
3. **Add to Cart**: Hover over product and click "Add to Collection"
4. **View Cart**: Click cart icon in header
5. **Checkout**: Click "Proceed to Checkout" in cart

### Interactive Elements
- Hover over products to see zoom effect
- Scroll down to see fade-in animations
- Try the mobile menu (resize browser)
- Filter products by category
- Sort products by price or name

---

## 🎨 Design Highlights

### Colors
- **Primary**: Deep black (#000000) and ivory white (#FEFEFE)
- **Accent**: Rose gold (#B76E79) and champagne gold (#F7E7CE)
- **Supporting**: Soft blush, pearl gray, burgundy

### Typography
- **Headlines**: Playfair Display (elegant serif)
- **Body**: Montserrat (clean sans-serif)
- **Script**: Allura (for special accents)

### Animations
- Smooth fade-ins on scroll
- Hover effects on products and buttons
- Slide-in cart panel
- Parallax effects on hero sections

---

## 📦 Build for Production

```bash
npm run build
npm start
```

The site will be optimized and ready for deployment!

---

## 🔧 Customization

### Add New Products
Edit `lib/products.ts`:
```typescript
{
  id: '9',
  name: 'Your Product Name',
  price: 199,
  image: 'https://images.unsplash.com/photo-...',
  description: 'Product description',
  category: 'Category',
  badge: 'New', // optional
}
```

### Change Colors
Edit `app/globals.css` under `@theme`:
```css
--color-luxury-rose-gold: #B76E79;
```

### Modify Content
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Collections: `app/collections/page.tsx`

---

## 📁 Project Structure

```
luxury-beauty/
├── app/              # Pages and routes
├── components/       # Reusable UI components
├── lib/             # Utilities and data
├── public/          # Static assets
└── package.json     # Dependencies
```

---

## 🌟 Key Features

✅ Fully responsive design
✅ Shopping cart functionality
✅ Product filtering and sorting
✅ Smooth animations
✅ TypeScript for type safety
✅ SEO optimized
✅ Accessible (WCAG compliant)
✅ Fast performance

---

## 💡 Tips

- **Mobile View**: Resize browser to see responsive design
- **Cart**: Cart state resets on page refresh (add localStorage for persistence)
- **Images**: Using Unsplash for demo (replace with your own)
- **Checkout**: Demo only - no real payment processing

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

**Enjoy building with LUMIÈRE!** ✨
