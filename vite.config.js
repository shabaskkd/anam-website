import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Gzip — served by most hosting providers
    compression({
      algorithm: 'gzip',
      exclude: [/\.(png|jpg|jpeg|webp|avif|gif|ico|woff2?)$/i],
      threshold: 1024,
    }),
    // Brotli — 20-30% smaller than gzip, Chrome/Edge/Firefox all support it
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(png|jpg|jpeg|webp|avif|gif|ico|woff2?)$/i],
      threshold: 1024,
    }),
  ],
  server: {
    allowedHosts: [
      'tawnya-unsucculent-unforensically.ngrok-free.dev'
    ]
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    // Minify with esbuild (default) — fast and effective
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Fine-grained manual chunking for best cache efficiency
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react-router-dom')) return 'vendor-router';
            if (id.includes('react-helmet-async') || id.includes('react')) return 'vendor-react';
            if (id.includes('swiper')) return 'vendor-swiper';
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'vendor-icons';
            if (id.includes('framer-motion') || id.includes('motion')) return 'vendor-framer';
            if (id.includes('@react-three') || id.includes('three')) return 'vendor-three';
            return 'vendor-misc';
          }
        }
      }
    }
  }
})
