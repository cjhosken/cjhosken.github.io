import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
    site: "https://cjhosken.github.io",
    integrations: [icon(), mdx()],
});

