import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Must match the GitHub repo name for project Pages:
// https://uweck.github.io/PortpolioSite/
export default defineConfig({
	base: '/PortpolioSite/',
	plugins: [vue()],
})
