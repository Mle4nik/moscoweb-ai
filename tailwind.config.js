/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'montserrat': 'Montserrat, sans-serif',

		},
		screens: {
			'xl': '1440px',
			'md': '1024px',
			'sm': '744px',
		},
		extend: {
			backgroundImage: {
				'headerBackBg': 'url("src/assets/header/back.svg")'
			},
			colors: {
				'dark-purple': '#1D0072',
				'light-blue': '#4457FF',
				'light-purple': '#643CDA',
				'light-pink': '#F3EFFF',
			},
			margin: {
				'4.5': '18px',
				'7.5': '30px',
				'12.5': '50px',
				'18': '72px',
				'21': '84px',
			},
			padding: {
				'4.5': '18px',
				'7.5': '30px',
				'12.5': '50px',
				'18': '72px',
                '21': '84px',
			},
			spacing: {
				'4.5': '18px',
				'7.5': '30px',
				'12.5': '50px',
				'18': '72px',
				'21': '84px',
			}
		},
		plugins: [],
	}
}