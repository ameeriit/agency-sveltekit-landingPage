/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: '20px'
		},
		screens: {
			mob: '540px',
			sm: '720px',
			md: '960px',
			lg: '1140px',
			xl: '1300px'
		},
		extend: {
			colors: {
				iris: '#5529D3',
				raisinBlack: '#222222',
				apricot: '#FED0AB',
				lavenderBlue: '#C8BEFF',
				platinum: '#E1E8EA',
				lightSilver: '#D9D9D9',
				charlestonGreen: '#262E33',
				teaGreen: '#DEF8CB',
				lightRed: '#F8CBD6',
				brightGray: '#EAEAE1'
			},
			keyframes: {
				scrollInfiniteX: {
					'0%': {
						transform: 'translateY(0)'
					},

					'100%': {
						transform: 'translateX(-100%)'
					}
				}
			},
			animation: {
				scrollInfiniteX: 'scrollInfiniteX 500s linear infinite'
			}
		}
	},
	plugins: []
};
