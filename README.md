# Abhishek — Minimal Developer Portfolio

A responsive, single-page React + TypeScript + Tailwind portfolio inspired by the uploaded minimal editorial reference.

## Requirements
- Node.js 18+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalize before publishing

Search and replace these placeholders in `src/App.tsx`:
- `hello@example.com` → your public email address
- `https://github.com/your-username` → your GitHub profile
- `https://www.linkedin.com/in/your-profile` → your LinkedIn profile
- Project links currently point to the GitHub homepage; replace each with the relevant public repository or case-study URL.

Review the project descriptions and skill list carefully. Remove anything you have not personally worked with or cannot confidently discuss. Add your actual employer names, dates and role details only if you want them public. Do not publish confidential client/company information.

## Resume
Add your PDF as `public/Abhishek-P-Resume.pdf`, then add a download link in the hero or contact section using `/Abhishek-P-Resume.pdf`.

## Avatar
`src/components/Avatar.tsx` contains an original inline SVG line-art avatar. It does not depend on an external image service and can be edited directly.
