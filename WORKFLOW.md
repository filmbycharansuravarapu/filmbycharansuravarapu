# 📊 Deployment Workflow

## Visual Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT WORKFLOW                      │
└─────────────────────────────────────────────────────────────┘

1️⃣  EDIT FILES
    📁 temp-repo/
    ├── contact.html
    ├── index.html
    ├── styles.css
    └── assets/
         └── images/
                  ↓
2️⃣  RUN DEPLOYMENT SCRIPT
    💻 .\deploy.ps1
         ↓
    ┌──────────────────────────┐
    │ Script automatically:     │
    │ • Copies files to root    │
    │ • Commits changes         │
    │ • Pushes to GitHub        │
    └──────────────────────────┘
                  ↓
3️⃣  GITHUB RECEIVES PUSH
    🐙 GitHub Repository
    📍 main branch updated
                  ↓
4️⃣  VERCEL AUTO-DEPLOYS
    ⚡ Vercel detects push
    🔨 Builds website
    📦 Deploys to production
                  ↓
5️⃣  LIVE WEBSITE UPDATED
    🌐 filmbycharansuravarapu.vercel.app
    ✅ Changes are live!
```

---

## File Structure Explained

```
filmbycharansuravarapu/
│
├── 🎯 PRODUCTION (Root Level - Gets Deployed)
│   ├── contact.html          ← Synced from temp-repo
│   ├── index.html            ← Synced from temp-repo
│   ├── wedding.html          ← Synced from temp-repo
│   ├── brand-identity.html   ← Synced from temp-repo
│   ├── product.html          ← Synced from temp-repo
│   ├── event.html            ← Synced from temp-repo
│   ├── styles.css            ← Synced from temp-repo
│   ├── assets/               ← Synced from temp-repo
│   └── vercel.json           ← Deployment config
│
├── 📝 WORKING DIRECTORY
│   └── temp-repo/            ← EDIT HERE
│       ├── contact.html      ← Your working files
│       ├── index.html
│       ├── wedding.html
│       ├── styles.css
│       └── assets/
│
├── 🚫 BACKUP/ARCHIVE (Not deployed)
│   ├── website/              ← Old backup
│   ├── redeploy-temp/        ← Old backup
│   └── public/               ← Old backup
│
└── 📚 DOCUMENTATION
    ├── README.md             ← Project overview
    ├── DEPLOYMENT.md         ← Detailed guide
    ├── QUICK-START.md        ← Quick reference
    ├── WORKFLOW.md           ← This file
    └── deploy.ps1            ← Automation script
```

---

## Deployment Flow Diagram

```
┌──────────────┐
│ Developer    │
│ Makes Change │
└──────┬───────┘
       │
       ↓
┌──────────────────┐
│ Edit files in    │
│ temp-repo/       │
└──────┬───────────┘
       │
       ↓
┌──────────────────┐
│ Run deploy.ps1   │
└──────┬───────────┘
       │
       ├─────────────────────┐
       ↓                     ↓
┌──────────────┐   ┌────────────────┐
│ Copy files   │   │ Commit & Push  │
│ to root      │ → │ to GitHub      │
└──────────────┘   └────────┬───────┘
                            │
                            ↓
                   ┌────────────────┐
                   │ GitHub main    │
                   │ branch updated │
                   └────────┬───────┘
                            │
                            ↓ (webhook)
                   ┌────────────────┐
                   │ Vercel detects │
                   │ new commit     │
                   └────────┬───────┘
                            │
                            ↓
                   ┌────────────────┐
                   │ Vercel builds  │
                   │ & deploys      │
                   └────────┬───────┘
                            │
                            ↓
                   ┌────────────────┐
                   │ ✅ Live Site   │
                   │ Updated!       │
                   └────────────────┘
```

---

## Contact Form Data Flow

```
┌──────────────────┐
│ User fills form  │
│ on website       │
└────────┬─────────┘
         │
         ↓
┌──────────────────────┐
│ Form submits to      │
│ Google Apps Script   │
│ (POST request)       │
└────────┬─────────────┘
         │
         ↓
┌──────────────────────┐
│ Script processes     │
│ form data            │
│ (e.parameter)        │
└────────┬─────────────┘
         │
         ↓
┌──────────────────────┐
│ Data saved to        │
│ Google Sheet         │
│ (new row added)      │
└────────┬─────────────┘
         │
         ↓
┌──────────────────────┐
│ Success response     │
│ sent to browser      │
└────────┬─────────────┘
         │
         ↓
┌──────────────────────┐
│ User sees            │
│ confirmation message │
└──────────────────────┘
```

---

## Git Workflow

```
Local Repository              Remote Repository
────────────────              ─────────────────

temp-repo/
   ↓ (edit files)
   
.\deploy.ps1
   ↓ (copies & commits)
   
main branch (local)
   ├── contact.html
   ├── index.html
   └── ...
   │
   │ git push origin main
   ↓
────────────────────────────────────────────
                                 │
                                 ↓
                        main branch (remote)
                           GitHub
                        ├── contact.html
                        ├── index.html
                        └── ...
                                 │
                                 │ (webhook)
                                 ↓
                              Vercel
                           (auto-deploy)
                                 │
                                 ↓
                          Live Website
```

---

## Decision Tree: When to Deploy

```
Do you need to update the website?
│
├─ YES
│  │
│  └─ What changed?
│     │
│     ├─ Content/HTML → Edit temp-repo/*.html → Deploy
│     ├─ Styles → Edit temp-repo/styles.css → Deploy
│     ├─ Images → Add to temp-repo/assets/ → Update HTML → Deploy
│     └─ Contact Form URL → Edit temp-repo/contact.html → Deploy
│
└─ NO
   │
   └─ Just testing locally?
      │
      └─ Open temp-repo/*.html in browser
```

---

## Rollback Process

```
❌ Problem Detected on Live Site
         │
         ↓
   Option 1: Revert Git Commit
   ┌─────────────────────┐
   │ git revert HEAD     │
   │ git push origin main│
   └─────────┬───────────┘
             │
             ↓ (Vercel auto-deploys)
   ┌─────────────────────┐
   │ ✅ Site restored    │
   └─────────────────────┘

         OR

   Option 2: Vercel Dashboard
   ┌─────────────────────────┐
   │ Go to Vercel Dashboard  │
   │ Find working deployment │
   │ Click "Promote"         │
   └─────────┬───────────────┘
             │
             ↓ (instant)
   ┌─────────────────────┐
   │ ✅ Site restored    │
   └─────────────────────┘
```

---

## Timeline: Typical Deployment

```
T+0:00   - Developer edits file in temp-repo/
T+0:01   - Developer runs .\deploy.ps1
T+0:02   - Script copies files, commits, starts push
T+0:05   - Git push completes (may require auth)
T+0:06   - GitHub receives commit
T+0:07   - Vercel webhook triggered
T+0:08   - Vercel starts build
T+0:15   - Build completes
T+0:16   - Deploy to production
T+0:20   - DNS propagation
T+0:30   - ✅ Changes visible on live site

Total: ~30 seconds to 2 minutes
```

---

## Maintenance Schedule

### Weekly
- [ ] Check contact form is working
- [ ] Review Google Sheet submissions
- [ ] Check website loads correctly

### Monthly
- [ ] Update portfolio images
- [ ] Review and update content
- [ ] Check all links work

### Quarterly
- [ ] Review Google Apps Script logs
- [ ] Update dependencies if any
- [ ] Backup Google Sheet data

---

## Emergency Contacts

**If deployment fails:**
1. Check Vercel dashboard: https://vercel.com/dashboard
2. Check GitHub commits: https://github.com/filmbycharansuravarapu/filmbycharansuravarapu/commits
3. Review DEPLOYMENT.md troubleshooting section
4. Contact: filmbycharansuravarapu@gmail.com

---

*This workflow ensures smooth, automated deployments every time!*
