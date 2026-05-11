# ncridlig.github.io

Personal portfolio and blog for Nicolas Ivan Cridlig — AI Engineer specializing in Computer Vision, LLMs, and Industry 4.0.

**[ncridlig.github.io](https://ncridlig.github.io)**

## Stack

React 18 | Bootstrap 5 | react-i18next (EN/FR) | GitHub Pages

## Features

- Multi-language support (English / French) with auto-detection and manual toggle
- Blog with responsive media (images, YouTube embeds) and sequential prev/next navigation
- LaTeX CV pipeline (English + French), compiled and served as static PDFs
- GitHub API integration for live project cards
- CI/CD via GitHub Actions (deploy + CV compilation)

## Getting started

```bash
npm install
npm start
```

## Build & deploy

```bash
npm run build
npm run deploy
```

The `main` branch is the deployed site. Development happens on feature branches merged to `main`.

## CV compilation

English and French CVs live in `cv/` as LaTeX files sharing `cv-style.sty`.

```bash
cd cv
pdflatex nicolascridligcv.tex && pdflatex nicolascridligcv-fr.tex
```

Output PDFs are copied to `public/` for serving.

## License

Project code is open source. Feel free to fork and make your own version.
