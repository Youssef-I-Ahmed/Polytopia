# Polytopia React Landing Page

A responsive multi-page landing / portfolio website for Polytopia Plastic Industries Company.

## Stack

- React + Vite
- Tailwind CSS
- CSS Modules for page-specific effects
- React Router
- React Icons
- EN / AR / TR translation file
- RTL support for Arabic

## Run locally

```bash
npm install
npm run dev
```

If npm shows `Exit handler never called`, update npm or use a clean cache:

```bash
npm cache clean --force
npm install
```

Then open the local Vite URL shown in the terminal.

## Main folders

```txt
src
├── assets
│   ├── docs
│   ├── images
│   └── video
├── components
├── context
├── data
├── pages
└── utils
```

## Content notes

- Temporary datasheet file: `src/assets/docs/Polytopia Product Datasheet.pdf`
- Product data: `src/data/products.js`
- Website contact information: `src/data/siteData.js`
- Translations: `src/data/translations.js`
