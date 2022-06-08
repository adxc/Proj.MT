import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3001,
	},
	build: {
		outDir: 'build',
	},
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces'),
		},
	},
})
