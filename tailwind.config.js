const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
		safelist: [
			'ml-auto',
			'md:hidden',
		],
	},
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			coolgray: colors.coolGray,
			gray: colors.warmGray,
			blue: colors.blue,
			green: colors.green,
			yellow: colors.yellow,
			red: colors.red,
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			light: 'var(--color-light)',
			dark: 'var(--color-dark)',
			'eaglestack-black': '#151A1E',
		},
		fontFamily: {
			body: ['Mulish', 'Arial', 'sans-serif'],
			header: ['Poppins', 'Arial', 'sans-serif'],
			'header-regular': ['Poppins Regular', 'Arial', 'sans-serif'],
		},
		extend: {
			spacing: {
				88: '22rem',
				128: '32rem',
				144: '36rem',
				'40-em': '10em',
				'60-em': '15em',
				'80-em': '20em',
			},
			boxShadow: {
				'button': '10px 7px 26px -5px rgba(0,0,0,0.76)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
