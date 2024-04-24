// import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()]
// });

import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import tailwind from "@astrojs/tailwind";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
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
          additionalData: `
          @import "@/styles/global.scss";
          @import "@/styles/vars.scss";
          `
        }
      }
    }
  }
});
