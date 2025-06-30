import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: './',
    plugins: [tailwindcss()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                form: 'form.html',
                resources: 'resources.html'
            }
        }
    }
})

