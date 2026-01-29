# Film by Charan Suravarapu

Professional photography portfolio website showcasing wedding, brand identity, product, and event photography services.

![Website](https://filmbycharansuravarapu.vercel.app)

## 🌐 Live Website

**URL:** [https://filmbycharansuravarapu.vercel.app](https://filmbycharansuravarapu.vercel.app)

## 📋 Overview

This is a static HTML website featuring:
- Wedding Photography Gallery
- Brand Identity Photography
- Product Photography
- Event Coverage Portfolio
- Contact Form (integrated with Google Sheets)

## 🚀 Quick Start

### Deployment

The easiest way to deploy changes:

```powershell
# Run the deployment script
.\deploy.ps1

# Or with a custom message
.\deploy.ps1 -Message "Updated portfolio images"
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 📁 Project Structure

```
├── temp-repo/          ← Production files (edit here)
│   ├── assets/
│   ├── contact.html
│   ├── index.html
│   ├── wedding.html
│   ├── brand-identity.html
│   ├── product.html
│   ├── event.html
│   ├── styles.css
│   └── vercel.json
├── deploy.ps1          ← Automated deployment script
├── DEPLOYMENT.md       ← Detailed deployment guide
└── README.md          ← This file
```

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Deployment:** Vercel
- **Version Control:** Git/GitHub
- **Contact Form:** Google Apps Script + Google Sheets

## 📝 Making Changes

### Update Content

1. Edit files in `temp-repo/` folder
2. Run deployment script: `.\deploy.ps1`
3. Vercel auto-deploys in 1-2 minutes

### Update Contact Form

Contact form submissions are saved to Google Sheets via Google Apps Script.

**Script URL:** Configured in `temp-repo/contact.html`

See [DEPLOYMENT.md](DEPLOYMENT.md#contact-form-configuration) for setup instructions.

### Update Images

1. Add images to `temp-repo/assets/images/`
2. Update HTML references
3. Deploy changes

## 📞 Contact Information

- **Email:** filmbycharansuravarapu@gmail.com
- **Phone:** +91 8464005350
- **Locations:** Vizag, Rajahmundry, Hyderabad

## 🔗 Links

- **Live Site:** https://filmbycharansuravarapu.vercel.app
- **GitHub:** https://github.com/filmbycharansuravarapu/filmbycharansuravarapu
- **Vercel Dashboard:** https://vercel.com/dashboard

## 📄 License

© 2024 Film by Charan Suravarapu. All rights reserved.

---

For detailed deployment instructions and troubleshooting, see [DEPLOYMENT.md](DEPLOYMENT.md)
