/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
