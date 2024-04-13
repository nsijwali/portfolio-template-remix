import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['monospace', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},

	plugins: [],
} satisfies Config;
