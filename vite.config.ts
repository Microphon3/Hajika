import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
	server: {
		allowedHosts: [
			'2e161d6e06a2.ngrok-free.app',
			'.ngrok-free.app',
			'.ngrok.io',
			'localhost',
			'127.0.0.1'
		],
		host: '0.0.0.0'
	}
});
