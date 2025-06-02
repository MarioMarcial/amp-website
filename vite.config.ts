import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* server: {
    host: true, // ¡Este es el setting clave!
    port: 5173, // Confirma el puerto que usas
  }, */
  base: '/amp-website/',
});
