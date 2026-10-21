# Portfolio — Muhammad Naufal Hadianto

Static portfolio site, ready to deploy on Vercel. No build step.

```
index.html        portfolio home
projects/         one page per project
assets/images/    screenshots and certificates
quizbyte/         QuizByte (tech quiz)
dataglance/       DataGlance (CSV profiler)
gamestob/         gameStoB (game store website)
vercel.json       Vercel settings (clean URLs, caching)
```

## Edit your details

Open `assets/js/config.js` and fill in email, LinkedIn, Instagram, CV, photo, and GPA.
Empty fields are hidden automatically. Put files like `cv.pdf` in the repo root and a photo in `assets/images/`.

Project pages live in `projects/`. Shared styles are in `assets/css/site.css` and scripts in `assets/js/site.js`.

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
