module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
			},
			colors: {
				primary: {
					100: "#cceafd",
					200: "#99d5fb",
					300: "#66bffa",
					400: "#33aaf8",
					500: "#0095f6",
					600: "#0077c5",
					700: "#005994",
					800: "#003c62",
					900: "#001e31",
				},
				danger: {
					100: "#fbdbdd",
					200: "#f8b6bb",
					300: "#f4929a",
					400: "#f16d78",
					500: "#ed4956",
					600: "#be3a45",
					700: "#8e2c34",
					800: "#5f1d22",
					900: "#2f0f11",
				},
			},
			fontFamily: {
				logo: ['"Kaushan Script"', "cursive"],
				primary: ['"Plus Jakarta Sans"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
