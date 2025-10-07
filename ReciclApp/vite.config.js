import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@public': path.resolve(__dirname, 'public'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@home': path.resolve(__dirname, 'src/app/home'),
      '@user': path.resolve(__dirname, 'src/app/user')
    }
  }
})
