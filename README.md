# Portfolio (Astro)

This is a modern, high-performance portfolio website built with [Astro](https://astro.build/) and Sass.

## Project Structure

Inside the Astro project, we can see the following folders and files:

- `public/`: Static assets that don't need processing (favicons, report files, etc.).
- `src/`: The project source code.
  - `components/`: Reusable Astro components (Home, About, Skills, Contact).
  - `layouts/`: Shared page layouts.
  - `pages/`: The site's routes (e.g., `index.astro`).
  - `styles/`: Global SCSS stylesheets.
- `astro.config.mjs`: Astro configuration file.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Deployment

This project is configured for automatic deployment to **GitHub Pages** via GitHub Actions.

- **Base Path:** `/portfolio/`
- **Workflow:** `.github/workflows/deploy.yml`

Whenever we push to the `main` branch, the site is automatically built and deployed. Ensure that **GitHub Actions** is selected as the deployment source in the repository's GitHub Pages settings.

---
Developed with ❤️ by Vigneshwaran Sooriyamoorthy
