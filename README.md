# Matchpool Website

A responsive, bilingual (English/Spanish) football prediction pool website built with React, TypeScript, Vite, and Tailwind CSS.

## 🎯 Features

- **Bilingual Support**: Toggle between English and Spanish
- **Responsive Design**: Optimized for mobile and desktop
- **Pool Types**: Standard, Full, and Extreme prediction pools
- **Complete Information**: Terms, Privacy Policy, FAQs, and Contact form
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS v4

## 🚀 Quick Start

### Development
```bash
# This project runs in Figma Make environment
# No local development setup needed
```

### Production Build

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Build the static site:**
   ```bash
   npm run build
   ```

3. **Preview the build locally:**
   ```bash
   npm run preview
   ```

4. **Deploy the `dist/` folder to your hosting provider**

## 📦 What Gets Built

After running `npm run build`, you'll get a `dist/` folder containing:
- Optimized HTML, CSS, and JavaScript files
- All images and assets
- Routing configuration for single-page app behavior

## 🌐 Deployment

The `dist/` folder can be deployed to:
- **Netlify** (recommended) - Just drag & drop the dist folder
- **Vercel** - Connect your repo or use CLI
- **GitHub Pages** - Upload dist contents to gh-pages branch
- **Traditional hosting** (cPanel, FTP) - Upload dist contents to public_html
- **AWS S3** - Upload as static website
- **Firebase Hosting** - Use Firebase CLI

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📁 Project Structure

```
matchpool-website/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components (Home, Terms, Privacy, etc.)
│   │   ├── context/        # Language context for i18n
│   │   ├── routes.tsx      # React Router configuration
│   │   └── App.tsx         # Main app component
│   ├── styles/             # Global styles and Tailwind config
│   └── main.tsx            # Application entry point
├── public/
│   └── _redirects          # SPA routing config for Netlify
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4
- **Routing**: React Router 7
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## 📄 Pages

1. **Home** (`/`) - Hero, How It Works, Pool Types, FAQs, Contact
2. **Pool Types Details** (`/pool-types`) - Detailed pool type information
3. **Terms & Conditions** (`/terms`) - Full legal terms
4. **Privacy Policy** (`/privacy`) - Privacy and data policy

## 🌍 Internationalization

The website supports English and Spanish with a flag toggle in the navigation bar. All content is fully translated including:
- Navigation and UI elements
- Page content and descriptions
- FAQs (11 questions)
- Terms & Conditions (12 sections)
- Privacy Policy (10 sections)

## 🎯 Brand Guidelines

- **Primary Colors**: Green (#22c55e), Black (#000000), White (#ffffff)
- **Accent Colors**: Muted Yellow, Teal (#14b8a6)
- **Typography**: Bold, sporty, energetic
- **Logo**: Matchpool shield with soccer ball elements

## 📧 Contact

- **Email**: support@matchpool.app
- **Developer**: BIGTHOR DEVELOPMENT

## 📝 License

Private - All rights reserved

---

**Ready to deploy!** Run `npm run build` and upload the `dist/` folder to your hosting provider.
