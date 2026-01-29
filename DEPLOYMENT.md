# Deployment Guide - Film by Charan Suravarapu

## 📁 Project Structure

```
filmbycharansuravarapu/
├── temp-repo/          ← PRODUCTION FILES (Deploy this folder)
│   ├── assets/
│   ├── *.html
│   ├── styles.css
│   └── vercel.json
├── website/            ← Development/backup files
├── redeploy-temp/      ← Backup files
└── public/             ← Additional assets
```

## 🚀 Deployment Process

### Method 1: Automatic Deployment via GitHub (Recommended)

#### Prerequisites
- GitHub account with repository: `filmbycharansuravarapu/filmbycharansuravarapu`
- Vercel account linked to GitHub repository
- Git credentials configured

#### Steps

1. **Make Changes in `temp-repo` folder**
   ```powershell
   cd c:\project\charanphtography\filmbycharansuravarapu\temp-repo
   ```

2. **Copy updated files from temp-repo to root** (if needed)
   ```powershell
   # From project root
   Copy-Item -Path "temp-repo\*" -Destination "." -Recurse -Force -Exclude ".git"
   ```

3. **Commit and Push Changes**
   ```powershell
   cd c:\project\charanphtography\filmbycharansuravarapu
   git add .
   git commit -m "Update website files"
   git push origin main
   ```

4. **Vercel Auto-Deploys**
   - Vercel automatically detects the push
   - Builds and deploys within 1-2 minutes
   - Check deployment status at: https://vercel.com/dashboard

### Method 2: Direct Vercel Deployment

#### Using Vercel CLI

1. **Install Vercel CLI** (one-time setup)
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```powershell
   vercel login
   ```

3. **Deploy from temp-repo**
   ```powershell
   cd c:\project\charanphtography\filmbycharansuravarapu\temp-repo
   vercel --prod
   ```

### Method 3: Manual Vercel Dashboard Upload

1. Go to https://vercel.com/dashboard
2. Select your project: `filmbycharansuravarapu`
3. Click "Redeploy" or upload new files manually

---

## 🔄 Quick Deployment Script

I've created a PowerShell script for streamlined deployment. See `deploy.ps1` file.

### Usage:
```powershell
# Deploy to production
.\deploy.ps1

# Or with custom commit message
.\deploy.ps1 -Message "Updated contact form"
```

---

## 📝 Contact Form Configuration

### Google Apps Script Setup

**Script URL:** `https://script.google.com/macros/s/AKfycbwHvsJ_EalQlQyPxQ1MhVElO5VmRg7YwviG30LaNuYoHdPpIDz8cGuqr8FQfXc30TPglw/exec`

#### Required Google Apps Script Code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter; // Handles URL-encoded data
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.contact || '',
      data.email || '',
      data.eventDate || '',
      data.eventType || '',
      data.place || '',
      data.notes || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

#### Deployment Settings:
- **Execute as:** Me (your email)
- **Who has access:** Anyone ← CRITICAL
- After changes, click **Deploy → New deployment**

---

## 🔧 Making Updates

### 1. Update Contact Form Script URL

If Google Apps Script URL changes:

```javascript
// In contact.html (line ~170)
const GOOGLE_SCRIPT_URL = 'YOUR_NEW_URL_HERE';
```

### 2. Update Styles

Edit `temp-repo/styles.css` and deploy.

### 3. Update Images

1. Add images to `temp-repo/assets/images/`
2. Update HTML references
3. Deploy

### 4. Update Content

1. Edit HTML files in `temp-repo/`
2. Test locally (optional): Open HTML in browser
3. Deploy using one of the methods above

---

## ✅ Pre-Deployment Checklist

- [ ] All changes made in `temp-repo/` folder
- [ ] Google Apps Script is deployed with "Anyone" access
- [ ] Contact form tested locally
- [ ] Image paths are correct (`assets/images/...`)
- [ ] All HTML files updated if needed
- [ ] Git credentials are configured

---

## 🐛 Troubleshooting

### Contact Form Not Working

1. **403 Forbidden Error**
   - Ensure Google Apps Script is deployed with "Anyone" access
   - Redeploy the script if settings were changed

2. **Data Not Saving to Sheet**
   - Check Google Apps Script logs
   - Verify the script URL is correct
   - Ensure the script has `e.parameter` (not `e.postData`)

3. **Form Submits but No Confirmation**
   - Check browser console for errors
   - Verify the fetch request completes

### Git Push Issues

1. **Authentication Failed**
   ```powershell
   # Configure credentials
   git config --global credential.helper manager
   git push origin main
   ```

2. **Push Rejected**
   ```powershell
   # Pull first, then push
   git pull origin main --rebase
   git push origin main
   ```

### Vercel Deployment Failed

1. Check build logs in Vercel dashboard
2. Ensure `vercel.json` exists in deployment folder
3. Verify all file paths are relative (not absolute)

---

## 📞 Support

**Website:** https://filmbycharansuravarapu.vercel.app
**GitHub:** https://github.com/filmbycharansuravarapu/filmbycharansuravarapu
**Email:** filmbycharansuravarapu@gmail.com

---

## 📌 Quick Reference

### Current Deployment Setup
- **Platform:** Vercel
- **Repository:** GitHub (filmbycharansuravarapu/filmbycharansuravarapu)
- **Branch:** main
- **Production Files:** `temp-repo/` folder
- **Auto-Deploy:** Enabled on push to main branch

### Important URLs
- **Live Site:** https://filmbycharansuravarapu.vercel.app
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/filmbycharansuravarapu/filmbycharansuravarapu
- **Google Apps Script:** https://script.google.com (requires login)

---

*Last Updated: January 30, 2026*
