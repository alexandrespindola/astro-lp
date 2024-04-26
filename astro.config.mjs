import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import tailwind from "@astrojs/tailwind";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // site: 'https://alexandrespindola.github.io',
  // base: 'astro-lp',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: 
          // @import "@/styles/scss/base/global.scss";
          // @import "@/styles/scss/utils/_variables.scss";
          `
          @import "@/styles/styles.scss";
          `
        }
      }
    }
  }
});
