# 📋 Build & Deployment Checklist

## ✅ Pre-Build Checklist

- [ ] All dependencies installed (`npm install` or `pnpm install`)
- [ ] Website works correctly in development
- [ ] All pages load without errors (Home, Pool Types, Terms, Privacy)
- [ ] Language toggle works (English ↔ Spanish)
- [ ] All navigation links work
- [ ] All images load correctly
- [ ] Mobile responsive design verified
- [ ] Contact form displays correctly

## 🔨 Build Process

### Step 1: Install Dependencies
```bash
npm install
# or
pnpm install
```

### Step 2: Run Build Command
```bash
npm run build
# or
pnpm build
```

### Step 3: Verify Build Output
- [ ] `dist/` folder created
- [ ] `dist/index.html` exists
- [ ] `dist/assets/` folder contains JS, CSS, and images
- [ ] `dist/_redirects` file exists (for SPA routing)

### Step 4: Preview Locally (Optional)
```bash
npm run preview
```
- [ ] Open http://localhost:4173
- [ ] Test all routes work
- [ ] Test language switching
- [ ] Test navigation

## 🌐 Deployment Options

### Option A: Netlify (Easiest - Recommended)

**Method 1: Drag & Drop**
1. [ ] Go to https://app.netlify.com/drop
2. [ ] Drag the entire `dist/` folder onto the page
3. [ ] Wait for upload to complete
4. [ ] Your site is live!

**Method 2: Git Integration**
1. [ ] Push code to GitHub/GitLab
2. [ ] Connect repository in Netlify dashboard
3. [ ] Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. [ ] Deploy!

### Option B: Vercel

**Method 1: CLI**
```bash
npm install -g vercel
vercel --prod
```

**Method 2: Git Integration**
1. [ ] Push code to GitHub/GitLab
2. [ ] Import project in Vercel dashboard
3. [ ] Auto-detects settings from vercel.json
4. [ ] Deploy!

### Option C: Traditional Web Hosting (cPanel, FTP)

1. [ ] Build the project: `npm run build`
2. [ ] Connect to your server via FTP/SFTP or cPanel File Manager
3. [ ] Navigate to your public directory (usually `public_html` or `www`)
4. [ ] Upload ALL contents from the `dist/` folder
5. [ ] Upload the `.htaccess` file from `public/.htaccess` to root
6. [ ] Verify your site URL

**Important Files to Upload:**
- [ ] `index.html`
- [ ] `assets/` folder (entire folder)
- [ ] `.htaccess` (from public/.htaccess)

### Option D: GitHub Pages

```bash
# After building
npm run build

# Install gh-pages package
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d dist
```

Then enable GitHub Pages in repository settings.

### Option E: AWS S3 + CloudFront

1. [ ] Build: `npm run build`
2. [ ] Create S3 bucket
3. [ ] Enable static website hosting
4. [ ] Upload `dist/` contents
5. [ ] Set index document: `index.html`
6. [ ] Set error document: `index.html` (important for SPA)
7. [ ] Configure bucket policy for public access
8. [ ] (Optional) Create CloudFront distribution

## ✅ Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] Homepage displays correctly
- [ ] All navigation links work:
  - [ ] How It Works section
  - [ ] Pool Types page (`/pool-types`)
  - [ ] FAQs section
  - [ ] Terms page (`/terms`)
  - [ ] Privacy page (`/privacy`)
  - [ ] Contact section
- [ ] Language toggle works
- [ ] All images load
- [ ] Mobile view works correctly
- [ ] Footer links work
- [ ] Logo appears correctly
- [ ] Direct URL navigation works (e.g., `/terms`, `/privacy`)
- [ ] Page refresh doesn't cause 404 errors

## 🔧 Troubleshooting

### Issue: 404 on page refresh
**Cause**: Server not redirecting routes to index.html
**Fix**: 
- Netlify: Ensure `_redirects` file is in dist
- Vercel: Should work automatically
- Apache: Upload `.htaccess` file
- Nginx: Configure `try_files $uri $uri/ /index.html;`

### Issue: White blank screen
**Cause**: JavaScript files not loading
**Fix**:
1. Check browser console for errors
2. Verify all files from `dist/assets/` uploaded
3. Check file permissions (should be readable)
4. Clear browser cache

### Issue: Images not showing
**Cause**: Asset files not uploaded or wrong path
**Fix**:
1. Ensure entire `dist/assets/` folder uploaded
2. Check network tab in browser dev tools
3. Verify file paths are correct

### Issue: CSS not applying
**Cause**: CSS files not loaded or wrong MIME type
**Fix**:
1. Ensure CSS files in `dist/assets/` uploaded
2. Check server MIME type settings
3. Clear browser cache

## 📊 Build Output Structure

After successful build:

```
dist/
├── index.html                    # Main HTML file
├── _redirects                    # SPA routing (Netlify)
└── assets/
    ├── index-[hash].js          # Main JavaScript bundle
    ├── react-vendor-[hash].js   # React libraries
    ├── ui-vendor-[hash].js      # UI components
    ├── index-[hash].css         # Compiled styles
    └── [images].[hash].png/jpg  # Optimized images
```

## 🎉 Success!

Once all checkboxes are complete, your Matchpool website is live!

**Test URL**: [Your deployment URL]
**Contact**: support@matchpool.app

---

**Need Help?** Refer to `DEPLOYMENT.md` for detailed instructions.
