import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'
// const manifestForPlugIn = {
//   registerType: 'prompt' as const,
//   includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
//   name: "React-vite-app-pwa",
//   short_name: "react-vite-app-pwa",
//   description: "I am a simple vite app",
//   icons: [{
//     src: '/newjeans1.png',
//     sizes: '300x300',
//     type: 'image/jpg',
//     purpose: 'logo1'
//   },
//   {
//     src: '/newjeans2.png',
//     sizes: '500x500',
//     type: 'image/png',
//     purpose: 'logo2'
//   },
//   ],
//   screenshots: [
//     {
//       "src": "/PWA/bg-2.png",
//       "sizes": "1280x720",
//       "type": "image/png",
//       "form_factor": "wide"
//     },
//     {
//       "src": "/PWA/bg-1.png",
//       "sizes": "375x667",
//       "type": "image/png"
//     }
//   ],
//   theme_color: '#171717',
//   background_color: '#f0e7db',
//   display: "standalone",
//   scope: '/',
//   start_url: "/",
//   orientation: 'portrait'
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["manifest.json"],
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,

            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 10,
                // 30 days in seconds
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
      manifest: {
          name: "React-vite-app-pwa",
          short_name: "ReactPWA",
          description: "I am a simple vite app",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#000000",
          orientation: "portrait-primary",
          icons: [
            {
              "src": "/PWA/icons-1.png",
              "type": "image/png",
              "sizes": "192x192",
              "purpose": "any"
            },
            {
              "src": "/PWA/icons-2.png",
              "type": "image/png",
              "sizes": "512x512",
              "purpose": "any"
            }
          ],
          screenshots: [
            {
              "src": "/PWA/bg-2.png",
              "sizes": "1280x720",
              "type": "image/png",
              "form_factor": "wide"
            },
            {
              "src": "/PWA/bg-1.png",
              "sizes": "375x667",
              "type": "image/png"
            }
          ],
          lang: "en"
        }
    })],
})
