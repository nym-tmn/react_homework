import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve('src'),
			'@assets': path.resolve('src/assets'),
			'@components': path.resolve('src/components'),
		}
	}
})
