# ⚡ React + TypeScript + Vite PWA Template

Welcome to the **React Vite PWA Starter**! 🎉  
This template is built for developers who want a ready-to-go **Progressive Web App (PWA)** using modern technologies like **Vite**, **Tailwind**, **React Query**, **Zustand**, **Zod**, and more — all fully **TypeScript-ready**!

> 🧠 Whether you're starting a side project, building a prototype, or just need a clean base, this template helps you skip boilerplate and focus on building.

---

## 🚀 Quick Start

Run the following commands in your terminal:

    git clone https://github.com/MikeKomari/ReactTSPWATemplate .
    npm install
    npm run dev

---

## 🛠️ Technologies Included

| Tech                         | Purpose                                 |
| ---------------------------- | --------------------------------------- |
| ⚛️ React 19                  | Modern UI library                       |
| ⚡ Vite                      | Super fast build tool                   |
| 🔧 TypeScript                | Static typing for scalable apps         |
| 🎨 TailwindCSS               | Utility-first CSS framework             |
| 🧪 Vitest                    | Unit testing engine                     |
| 🧪 @testing-library/react    | Testing React components                |
| 🧪 @testing-library/jest-dom | Custom matchers for tests               |
| 🧪 jsdom                     | Simulates the DOM in tests              |
| ☁️ Axios                     | Promise-based HTTP client               |
| 💬 React Query               | Server-state management                 |
| 🧠 Zustand                   | Lightweight state manager               |
| ✅ Zod                       | Runtime schema validation               |
| 🔥 React Hot Toast           | Toast notifications                     |
| 🧱 React Loading Skeleton    | Loading placeholder UI                  |
| 🧩 React Router v7           | Routing library                         |
| 💡 clsx                      | Conditional classNames                  |
| 📲 vite-plugin-pwa           | Full PWA support (offline, installable) |

---

## 📁 Folder Structure

    src/
    ├── assets/                 # Static images, icons, logos, etc.
    ├── components/             # Reusable UI components (organized in folders)
    │   └── ui/
    │       ├── Button.tsx
    │       └── Input.tsx
    ├── config/                 # App-wide configuration (e.g., API base URL)
    ├── css/                    # Tailwind config, global styles
    ├── hooks/                  # Custom React hooks
    ├── layout/                 # Layout components (Header, Footer, etc.)
    ├── pages/                  # Route-based page components
    |   └── main/
    │       ├── Landing.tsx
    │       └── Login.tsx
    |   └── role/               # Modify based on current needs
    │       ├── roleRouter.tsx  # All routes in the folder
    │       └── Login.tsx
    |   └── router.tsx          # All the routes
    ├── services/               # API clients (e.g., axios instances, REST calls)
    ├── store/                  # Global state using Zustand
    ├── types/                  # Global TypeScript type definitions
    ├── utils/                  # Utility/helper functions
    ├── test/                   # Test setup and utilities
    └── main.tsx                # App entry point

---

## 📲 How to Configure the PWA

This template uses vite-plugin-pwa to make your app installable, offline-capable, and cache-optimized. To modify the behavior and branding of the PWA, do the following:

### 🔧 Step 1: Update vite.config.ts

Look for the VitePWA() section and modify:

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["manifest.json"],

      manifest: {
        name: "React-vite-app-pwa",           // ✅ App name
        short_name: "ReactPWA",               // ✅ Short name for the home screen
        description: "I am a simple vite app", // ✅ App description
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        orientation: "portrait-primary",

        icons: [
          {
            src: "/PWA/icons-1.png",          // ✅ Add your 192x192 icon
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/PWA/icons-2.png",          // ✅ Add your 512x512 icon
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
        ],

        screenshots: [
          {
            src: "/PWA/bg-2.png",             // ✅ Optional screenshots for install banner
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/PWA/bg-1.png",
            sizes: "375x667",
            type: "image/png",
          },
        ],

        lang: "en",
      },
    })

### 📁 Step 2: Update Icons & Screenshots

Place your images inside the public/PWA/ directory. You can generate icons using the links below:

- https://realfavicongenerator.net/
- https://github.com/onderceylan/pwa-asset-generator

---

## 🧪 Testing

Run unit tests with:

    npm run test

✅ Already Setup:

- JSDOM test environment

- Custom matchers via @testing-library/jest-dom

- Example test/ folder for utilities and setup

Example test:

    // tests/Hello/__tests__/Hello.test.tsx
    import { render, screen } from "@testing-library/react";
    import Hello from "../Hello";

    test("renders hello component", () => {
      render(<Hello />);
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

---

## 📦 Build & Deploy

To build:

    npm run build

To preview:

    npm run preview

Deploy the `dist/` folder to Vercel, Netlify, Firebase Hosting, GitHub Pages, etc. The app is PWA-ready.

💡 Tips & Notes

- ✅ Use @/ to alias your src/ directory

- ✅ You can customize Tailwind by editing tailwind.config.js

- ✅ Global config (e.g., API URLs) can go into config/

- ✅ For offline caching customization, update the workbox.runtimeCaching array

- ✅ To persist Zustand store, combine with zustand/middleware if needed

---

## 🧰 Available Scripts

| Script          | Description                |
| --------------- | -------------------------- |
| npm run dev     | Run development server     |
| npm run build   | Build production-ready app |
| npm run preview | Preview built app          |
| npm run test    | Run unit tests             |

---

## 🙌 Contributing

Feel free to fork, contribute, and submit issues/PRs. Everyone’s welcome!

---

## 📄 License

This project is licensed under the MIT License.

---

## 👋 Made with ❤️ by Mike

Let me know if you would like to collaborate! Happy Coding!⚡
