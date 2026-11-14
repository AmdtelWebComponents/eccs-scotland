# Cleaning business template

Static-first Astro template for a cleaning business, ready to deploy on Netlify. The pages do not require client-side JavaScript; the home-page slideshow uses CSS.

## Customization

- Edit `src/site.config.ts` to set the business name, tagline, service area, phone, email, page titles, hero images and services. Empty phone and email values show placeholders without creating links.
- Replace the appropriately named photos in `public/images/`, or change their paths in the configuration. The About page also uses `about-hero.jpg` in its content.
- Edit the page content in `src/pages/`, including the placeholder testimonial, before publishing. The displayed content is sample copy, not a claim about a real business.
- The contact form uses Netlify Forms. Enable form detection for the Netlify site and verify submissions and notifications after deployment.

The sample images are sourced from Unsplash: [home](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0), [home alternate](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c), [about](https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea), [services](https://images.unsplash.com/photo-1497366811353-6870744d04b2), [testimonials](https://images.unsplash.com/photo-1600210491892-03d54c0aaf87), and [contact](https://images.unsplash.com/photo-1497366754035-f200968a6e72). Confirm image rights and suitability for each deployment, or replace them with your own.

## Commands

| Command           | Action                      |
| ----------------- | --------------------------- |
| `npm install`     | Install dependencies        |
| `npm run dev`     | Dev server (localhost:4321) |
| `npm run build`   | Build to `./dist`           |
| `npm run preview` | Preview the build           |
| `npm run check`   | Check Astro and TypeScript  |

## Structure

- `src/pages` - routes and editable page copy
- `src/layouts` - shared page layout
- `src/components` - shared Astro components and optional Lit elements
- `src/styles` - global CSS
