# Matchpool Website - Deployment Guide

## 🚀 Quick Start

This is a static website built with React, TypeScript, Vite, and Tailwind CSS.

## 📦 Building for Production

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   # or
   pnpm build
   ```

3. **The static files will be generated in the `dist/` folder**

## 📁 Deployment Structure

After running the build command, you'll find these files in the `dist/` folder:

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── *.js                # JavaScript bundles
│   ├── *.css               # Compiled CSS
│   └── *.png, *.jpg, *.svg # Images and assets
└── _redirects              # Routing configuration (for SPA)
```

## 🌐 Deployment Options

### Option 1: Netlify
1. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository and use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

The `_redirects` file is already included for proper SPA routing.

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Or connect your Git repository in the Vercel dashboard

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your gh-pages branch
3. Enable GitHub Pages in repository settings

### Option 4: Traditional Web Hosting (cPanel, FTP, etc.)
1. Build the project: `npm run build`
2. Upload all contents of the `dist/` folder to your web server's public directory
3. Configure your server to:
   - Serve `index.html` for all routes (SPA routing)
   - Enable HTTPS (recommended)

#### Apache (.htaccess example)
Create a `.htaccess` file in your web root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx (configuration example)
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Option 5: AWS S3 + CloudFront
1. Build: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure S3 for static website hosting
4. Set error document to `index.html` (for SPA routing)
5. (Optional) Add CloudFront for CDN

### Option 6: Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Set public directory to `dist`
4. Configure as single-page app: Yes
5. Deploy: `firebase deploy`

## 🔧 Build Configuration

The build is configured in `vite.config.ts`:
- Output directory: `dist/`
- Assets directory: `dist/assets/`
- Code splitting enabled for optimal loading
- Minification enabled for production

## 🌍 Environment Considerations

- The website is fully static with no backend dependencies
- All routing is handled client-side using React Router
- Images are bundled during build
- The contact form is a UI placeholder (connect to your preferred email service)

## 📱 Features

- ✅ Fully responsive (mobile and desktop)
- ✅ Bilingual support (English/Spanish)
- ✅ Client-side routing (React Router)
- ✅ Optimized assets and code splitting
- ✅ SEO-friendly meta tags

## 🛠️ Troubleshooting

### Issue: 404 errors on page refresh
**Solution:** Ensure your hosting provider redirects all routes to `index.html`
- Netlify: Use `_redirects` file (already included)
- Vercel: Automatic
- Apache: Use `.htaccess` (see above)
- Nginx: Configure `try_files` (see above)

### Issue: Images not loading
**Solution:** Ensure all files from `dist/assets/` are uploaded to your server

### Issue: Blank white page
**Solution:** 
1. Check browser console for errors
2. Ensure all JavaScript files are properly uploaded
3. Verify MIME types are correctly set on your server

## 📧 Support

For questions or issues, contact: support@matchpool.app

---

**Built by BIGTHOR DEVELOPMENT**
