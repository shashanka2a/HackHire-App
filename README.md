# HackHire Landing Page

A modern, responsive landing page for HackHire - a technical hiring platform. This project has been migrated from React/Vite to **Next.js 14** with static export capabilities.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 📁 Project Structure

```
├── pages/                 # Next.js pages (Pages Router)
│   ├── _app.tsx          # App wrapper with global styles
│   ├── _document.tsx     # HTML document structure
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── screens/      # Page components
│   │   ├── ui/          # Reusable UI components
│   │   └── Router.tsx   # Client-side routing logic
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
└── next.config.js       # Next.js configuration
```

## 🛠 Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## 🚀 Deployment

This project is configured for **static export**, making it deployable to any static hosting service:

### Vercel (Recommended)
```bash
npx vercel --prod
```

### Netlify
```bash
npm run build
npx netlify deploy --prod --dir=out
```

### GitHub Pages
```bash
npm run build
# Deploy the 'out' directory to GitHub Pages
```

### Other Static Hosts
```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## 🎨 Design System

The project uses a comprehensive design system with:
- **Dark theme** by default
- **Responsive breakpoints** for all screen sizes
- **Accessible components** built with Radix UI
- **Consistent spacing** and typography
- **Modern animations** and interactions

## 🔧 Configuration

### Next.js Configuration
The project is configured for static export in `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}
```

### Tailwind Configuration
Custom design tokens and animations are defined in `tailwind.config.js`.

## 📱 Features

- **Responsive Design** - Works on all devices
- **Dark Theme** - Modern dark UI
- **Interactive Components** - Smooth animations and transitions
- **Accessible** - Built with accessibility in mind
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Optimized for performance

## 🔄 Migration Notes

This project was successfully migrated from React/Vite to Next.js 14:
- ✅ Converted Vite configuration to Next.js
- ✅ Updated Tailwind CSS from v4 to v3 for compatibility
- ✅ Added "use client" directives for interactive components
- ✅ Fixed versioned imports from Figma export
- ✅ Configured for static export
- ✅ Updated build and deployment scripts

## 📄 Original Design

The original Figma design is available at: https://www.figma.com/design/oMaJJur7QiwGmtQrIzo2X4/HackHire-Landing-Page

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is part of the HackHire platform.