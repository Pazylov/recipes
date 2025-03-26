import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/app/styles/variables" as *; @use "@/app/styles/mixins" as *;`,
			},
		},
	},
})
