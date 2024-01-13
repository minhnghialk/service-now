import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  /* Config Global Scss Variable */
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/styles/scss/index.scss";` },
    }
  }
})


