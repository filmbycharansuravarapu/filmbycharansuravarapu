# 🚀 Quick Start Guide

## For First-Time Setup

### 1. Verify Git is Connected

```powershell
cd c:\project\charanphtography\filmbycharansuravarapu
git remote -v
```

Should show:
```
origin  https://github.com/filmbycharansuravarapu/filmbycharansuravarapu.git
```

### 2. Test Deployment Script

```powershell
.\deploy.ps1 -Message "Test deployment"
```

---

## Daily Workflow

### Making Changes

1. **Edit files in `temp-repo/` folder only**
   ```
   temp-repo/
   ├── contact.html      ← Edit contact page
   ├── index.html        ← Edit homepage
   ├── wedding.html      ← Edit wedding gallery
   ├── styles.css        ← Edit styles
   └── assets/images/    ← Add/update images
   ```

2. **Deploy Changes**
   ```powershell
   .\deploy.ps1
   ```

3. **Wait 1-2 minutes** - Vercel auto-deploys

4. **Check live site:** https://filmbycharansuravarapu.vercel.app

---

## Common Tasks

### Update Contact Form Script URL

**File:** `temp-repo/contact.html` (around line 170)

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_NEW_URL_HERE';
```

Then deploy: `.\deploy.ps1 -Message "Updated contact form URL"`

### Add New Portfolio Images

1. Copy images to: `temp-repo/assets/images/wedding/` (or other category)
2. Edit HTML file to reference new images
3. Deploy: `.\deploy.ps1 -Message "Added new portfolio images"`

### Update Styles

1. Edit: `temp-repo/styles.css`
2. Deploy: `.\deploy.ps1 -Message "Updated styles"`

### Update Contact Information

1. Edit: `temp-repo/contact.html`
2. Find the contact details section (around line 48-69)
3. Update email, phone, or location
4. Deploy: `.\deploy.ps1 -Message "Updated contact info"`

---

## Troubleshooting

### "Git push failed"

**Solution 1:** Pull first, then try again
```powershell
git pull origin main --rebase
.\deploy.ps1
```

**Solution 2:** Check credentials
```powershell
git config --global credential.helper manager
.\deploy.ps1
```

### "Contact form not working"

1. Check Google Apps Script is deployed with "Anyone" access
2. Verify script URL in `temp-repo/contact.html`
3. Test by submitting the form and checking Google Sheet

### "Changes not showing on live site"

1. Wait 2-3 minutes for Vercel deployment
2. Clear browser cache (Ctrl + Shift + R)
3. Check Vercel dashboard for deployment status

---

## One-Line Commands

```powershell
# Deploy with default message
.\deploy.ps1

# Deploy with custom message
.\deploy.ps1 -Message "Your commit message"

# Check what's changed
git status

# View recent deployments
git log --oneline -5

# Undo last commit (before push)
git reset --soft HEAD~1
```

---

## Emergency Rollback

If something breaks after deployment:

1. Go to Vercel dashboard
2. Find previous working deployment
3. Click "Promote to Production"

---

## Need Help?

- **Detailed Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project Info:** See [README.md](README.md)
- **Contact:** filmbycharansuravarapu@gmail.com

---

*Keep this file handy for quick reference!*
