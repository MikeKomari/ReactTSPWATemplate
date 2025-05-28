const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"React-vite-app-pwa",
    short_name:"react-vite-app-pwa",
    description:"I am a simple vite app",
    icons:[{
      src: '/newjeans1.png',
      sizes:'300x300',
      type:'image/jpg',
      purpose:'logo1'
    },
    {
      src:'/newjeans2.png',
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
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

export default manifestForPlugIn;