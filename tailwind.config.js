module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{svelte,ts,js,tsx,jsx}', './src/node_modules/@sveltejs/kit/ssr'],
	darkMode: false,
	content: ['./node_modules/flowbite/**/*.js'],
	daisyui: {
		themes: ['light']
	},
	variants: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
