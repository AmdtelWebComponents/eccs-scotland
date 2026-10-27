# eccs-scotland

Re-implementation of eccs-scotland.co.uk using Astro (static-first, minimal JS), Lit for the few interactive components, deployed on Netlify.

## Commands

| Command           | Action                      |
| ----------------- | --------------------------- |
| `npm install`     | Install dependencies        |
| `npm run dev`     | Dev server (localhost:4321) |
| `npm run build`   | Build to `./dist`           |
| `npm run preview` | Preview the build           |

## Structure

- `src/pages` – routes
- `src/layouts` – page layouts
- `src/components` – `.astro` components (no JS) and Lit elements (`.ts`)
- `src/styles` – global CSS
