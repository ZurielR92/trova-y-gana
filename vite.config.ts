import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Trove y Gane', // Nombre de tu PWA
        short_name: 'Trove y Gane', // Nombre corto (máximo 12 caracteres)
        theme_color: '#FFEC00', // Color principal de la PWA
        background_color: '#FFEC00', // Color de fondo
        display: 'standalone', // Estilo de visualización: standalone, fullscreen, minimal-ui, browser
        start_url: '/',
        icons: [
          {
            src: '/icon-192x192.png', // Ruta del icono (debes tener los iconos en la carpeta public)
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
