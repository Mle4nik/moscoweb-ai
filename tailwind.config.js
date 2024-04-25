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
			'desktop-lg': '1920px',
			'desktop': '1440px',
			'tablet-lg': '1024px',
			'tablet': '768px',
			'mobile': '320px'
		},
		extend: {
			backgroundImage: {
				'headerBackBg': 'url("src/assets/header/back.svg")',
				'burgerBack': 'url("src/assets/header/burger_back.svg")'
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
				'11.5': '45px',
				'12.5': '50px',
				'14.5': '60px',
				'18': '72px',
				'21': '84px',
			},
			padding: {
				'4.5': '18px',
				'7.5': '30px',
				'11.5': '45px',
				'12.5': '50px',
				'14.5': '60px',
				'18': '72px',
                '21': '84px',
			},
			spacing: {
				'4.5': '18px',
				'7.5': '30px',
				'11.5': '45px',
				'12.5': '50px',
				'15': '60px',
				'18': '72px',
				'21': '84px',
			}
		},
		plugins: [],
	}
}