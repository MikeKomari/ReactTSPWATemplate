import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
const manifestForPlugIn = {
  registerType: 'prompt' as 'prompt',
  includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    name:"React-vite-app-pwa",
    short_name:"react-vite-app-pwa",
    description:"I am a simple vite app",
    icons:[{
      src: '/PWA/newjeans1.png',
      sizes:'300x300',
      type:'image/jpg',
      purpose:'logo1'
    },
    {
      src:'/PWA/newjeans2.png',
      sizes:'500x500',
      type:'image/png',
      purpose:'logo2'
    },
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
  theme_color: '#171717',
  background_color: '#f0e7db',
  display: "standalone",
  scope: '/',
  start_url: "/",
  orientation: 'portrait'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
