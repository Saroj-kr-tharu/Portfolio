import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';



export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      Components: "/src/Components",
      Pages: "/src/Pages",
      Assets: "/src/Assets",
      Layout: "/src/Layout",
      Redux: "/src/Redux",
      UserData: "/src/UserData",
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
