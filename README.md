# FNS Application Design V16.1 — React deployment project

This is a **separate deployment**. It does not overwrite V16 or V17.

## Important architecture note

This is a working **React + Vite deployment shell** that embeds the complete V16.1 standalone interactive application (`public/application.html`) in an iframe. **The form screens and business logic inside that HTML are not yet converted into native React components.** This approach preserves the same UI and behaviors reviewed in the V16.1 HTML prototype. Do not treat it as production-ready API-integrated React code.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Upload the **dist/** folder to a static hosting provider or connect this project to GitHub and use the build command above.

## Free deployment choices

1. **Netlify**: create a **new** site, upload the built `dist/` directory (manual deployment), or connect a separate GitHub repo. Build `npm run build`, publish `dist`.
2. **Cloudflare Pages**: connect GitHub; build `npm run build`, output `dist`. Use a separate project for V16.1.
3. **GitHub Pages**: use a GitHub Actions workflow to build and deploy `dist`, or configure the repo base path. The included Vite `base: './'` is suitable for relative assets.
4. **Vercel**: import the GitHub repo; framework Vite, build `npm run build`, output `dist`.

Free-tier eligibility and limits can change. Check the provider's current pricing before deployment. Do not deploy this project to the existing V16 Netlify site.

## Data and safety

Fictional demo data only. Browser localStorage is used. No NC DHHS backend connection. Do not enter actual names, SSNs, addresses, or case details. No official application is submitted.

## Scope

The current V16.1 preview includes enhanced sections based on the supplied 52-page Word document covering Steps 1–5. It is **not a verified field-for-field implementation of all 52 pages**; some long option lists and detailed rules remain to be reconciled.
