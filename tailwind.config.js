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
	},
	plugins: [],
}
}