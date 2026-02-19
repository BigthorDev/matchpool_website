# 🚀 QUICK START - Deploy in 5 Minutes

## ✅ Prerequisites Fixed

All `figma:asset` imports have been replaced with standard image files. The website is now ready to build!

## Option 1: Netlify (Fastest - No Command Line Needed)

1. **Build the site locally** (or skip to drag & drop if already built):
   - Open terminal in project folder
   - Run: `npm install`
   - Run: `npm run build`
   - A `dist/` folder will be created

2. **Deploy**:
   - Go to: https://app.netlify.com/drop
   - Drag the `dist/` folder onto the page
   - Done! Your site is live in seconds

**Live URL**: Netlify will give you a URL like `https://random-name-123.netlify.app`

---

## Option 2: Vercel (Fast - Command Line)

1. **Install Vercel**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   npm install
   npm run build
   vercel --prod
   ```

3. **Follow prompts** - Done!

**Live URL**: Vercel will give you a URL like `https://your-site.vercel.app`

---

## Option 3: Your Own Web Hosting (cPanel/FTP)

1. **Build the site**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload files**:
   - Open your hosting file manager or FTP client
   - Go to `public_html` or `www` folder
   - Upload everything from the `dist/` folder
   - Upload `.htaccess` from `public/.htaccess` to the root

3. **Done!** Visit your domain

---

## ✅ After Deployment - Test These

- [ ] Homepage loads
- [ ] Click "Pool Types" button → Goes to pool types page
- [ ] Click "Terms" in footer → Goes to terms page  
- [ ] Click "Privacy" in footer → Goes to privacy page
- [ ] Toggle language flag → Switches to Spanish
- [ ] Test on mobile phone

---

## 📦 What You're Deploying

- **Fully responsive website** (works on all devices)
- **Bilingual** (English & Spanish)
- **4 pages**: Home, Pool Types, Terms, Privacy
- **No backend needed** - Pure static HTML/CSS/JS

---

## 🆘 Problems?

- **White screen**: Check browser console (F12) for errors
- **404 on refresh**: See troubleshooting in `BUILD_CHECKLIST.md`
- **Images missing**: Make sure you uploaded the entire `dist/assets/` folder

---

## 📧 Questions?

Email: support@matchpool.app

---

**That's it!** Your Matchpool website is ready to deploy. Choose your preferred method above and go live! 🎉