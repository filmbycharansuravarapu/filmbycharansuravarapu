# ✅ Deployment Checklist

Print this or keep it handy for every deployment!

---

## Pre-Deployment Checklist

- [ ] **Files edited in `temp-repo/` folder** (not root or other folders)
- [ ] **Changes tested locally** (open HTML files in browser)
- [ ] **Images optimized** (if adding new images)
- [ ] **All links work** (check internal navigation)
- [ ] **Contact form URL correct** (if modified contact.html)

---

## Deployment Steps

- [ ] **Step 1:** Open PowerShell in project folder
  ```powershell
  cd c:\project\charanphtography\filmbycharansuravarapu
  ```

- [ ] **Step 2:** Run deployment script
  ```powershell
  .\deploy.ps1 -Message "Your commit message here"
  ```

- [ ] **Step 3:** Authenticate with GitHub (if prompted)

- [ ] **Step 4:** Wait for success message

---

## Post-Deployment Verification

- [ ] **Wait 2 minutes** for Vercel to deploy
- [ ] **Visit live site:** https://filmbycharansuravarapu.vercel.app
- [ ] **Test navigation** (click through pages)
- [ ] **Test contact form** (submit a test inquiry)
- [ ] **Check mobile view** (resize browser or use phone)
- [ ] **Clear cache if needed** (Ctrl + Shift + R)

---

## Vercel Dashboard Check

- [ ] Go to https://vercel.com/dashboard
- [ ] Find your project: `filmbycharansuravarapu`
- [ ] Verify latest deployment status: ✅ Ready
- [ ] Check deployment time matches your push

---

## Contact Form Verification

- [ ] Submit test form on website
- [ ] Check Google Sheet for new entry
- [ ] Verify all fields captured correctly
- [ ] Confirm timestamp is correct

---

## If Something Goes Wrong

### Contact Form Issues
- [ ] Check Google Apps Script is deployed with "Anyone" access
- [ ] Verify script URL in contact.html
- [ ] Check Google Apps Script execution logs

### Site Not Updating
- [ ] Wait 2-3 more minutes
- [ ] Clear browser cache (Ctrl + Shift + R)
- [ ] Check Vercel dashboard for errors
- [ ] Verify GitHub commit was successful

### Git Push Failed
- [ ] Run: `git pull origin main --rebase`
- [ ] Try deploy script again
- [ ] Check internet connection
- [ ] Verify Git credentials

---

## Emergency Rollback

If you need to undo the deployment:

### Option A: Git Revert
```powershell
git revert HEAD
git push origin main
```

### Option B: Vercel Dashboard
1. Go to Vercel dashboard
2. Click on previous deployment
3. Click "Promote to Production"

---

## Quick Commands Reference

```powershell
# Standard deployment
.\deploy.ps1

# With custom message
.\deploy.ps1 -Message "Updated portfolio images"

# Check what changed
git status

# View recent commits
git log --oneline -5

# Check if Vercel is deploying (view in browser)
https://vercel.com/dashboard
```

---

## Contact for Help

**Email:** filmbycharansuravarapu@gmail.com

**Documentation:**
- Detailed guide: DEPLOYMENT.md
- Quick reference: QUICK-START.md
- Workflow diagrams: WORKFLOW.md

---

## Monthly Maintenance Checklist

- [ ] Update portfolio with new work
- [ ] Review contact form submissions
- [ ] Check all pages load correctly
- [ ] Verify all images display properly
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Review Google Analytics (if installed)

---

*Last Updated: January 30, 2026*

**Print this checklist or bookmark it for easy access!**
