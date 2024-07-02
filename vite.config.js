import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { IconsManifest } from "react-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "VEL",
        short_name: "VEL",
        description: "VEL MOBILE PLATAFORM",
        icons: [
          { src: "pwa-192-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "pwa-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
