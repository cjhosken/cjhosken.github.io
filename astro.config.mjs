import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx"
import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
    site: "https://cjhosken.github.io",
    integrations: [icon(), mdx(), sitemap()],
});