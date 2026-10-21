# Portfolio — Muhammad Naufal Hadianto

Static portfolio site, ready to deploy on Vercel. No build step.

```
index.html        portfolio home
assets/images/    screenshots and certificates
quizbyte/         QuizByte (tech quiz)
dataglance/       DataGlance (CSV profiler)
gamestob/         gameStoB (game store website)
vercel.json       Vercel settings (clean URLs, caching)
```

## Before deploying

Open `index.html`, search for `const CONTACT`, and fill in email, GitHub, LinkedIn, and CV.
Empty fields are hidden automatically. To host your CV here, save it as `cv.pdf` in this folder and set `cv: "cv.pdf"`.

## Deploy with the Vercel CLI (from the VS Code terminal)

```
npx vercel          # first time: log in, accept the defaults → preview link
npx vercel --prod   # publish to the production link
```

## Deploy with GitHub

1. Push this folder to a new GitHub repository.
2. On vercel.com: Add New → Project → import the repository → Deploy.
   Leave Framework Preset as "Other" and the build settings empty.

Every push to `main` redeploys automatically.

## Custom domain

Vercel project → Settings → Domains → add your domain (e.g. `yourname.my.id`),
then copy the DNS records Vercel shows into your domain registrar's DNS panel.
