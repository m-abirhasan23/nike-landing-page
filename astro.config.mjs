import image from '@astrojs/image';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ...
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
})