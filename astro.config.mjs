import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// Static output by default; pages opt in to SSR with `export const prerender = false`.
export default defineConfig({
  adapter: netlify(),
});
