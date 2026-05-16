import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file
// https://vite.dev/config/
export default defineConfig({
  // Use React plugin for JSX and Fast Refresh support
  plugins: [react()],
  // You can add more configurations here (e.g. server, build, resolve)
})
