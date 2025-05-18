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
			'@layouts': path.resolve('src/layouts'),
			'@pages': path.resolve('src/pages'),
			'@api': path.resolve('src/api'),
			'@types': path.resolve('src/types'),
			'@hooks': path.resolve('src/hooks'),
			'@providers': path.resolve('src/providers'),
			'@context': path.resolve('src/context'),
		}
	}
})
