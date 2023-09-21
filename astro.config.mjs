import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://pilaton.com',
  integrations: [tailwind()],
  image: {
    service: squooshImageService(),
  },
});
