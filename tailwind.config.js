/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./*.{html,js}",
		"./node_modules/flowbite/**/*.js",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				linux: ["Linux", "ui-serif"],
				fashion: ["Fashion", "monospace"],
				sans: ["Inter", "sans-serif"],
				montserrtA: ["Montserrat Alternates", "sans-serif"],
			},
			colors: {
				letters: "#000000",
				bluesky: "#5ecccc",
				blueskyLight: "#93ffff",
				bluestrong: "#538cdc",
				gold: "#ffcb5b",
				whiteGray: "#F2F2F2",
				primary: {
					400: "#538CDC",
					420: "#026ABF",
					450: "#025FAA",
					500: " #4E82CC",
					600: " #4472B3",
					700: " #3A6299",
					800: " #305180",
					900: "#212B4F",
				},
				nav: "#4b7fc9",
				pruebas: "#86CE86",
				pruebasTexto: "#025faa",
				navegacion: "#F2F2F2",
				btnNavegacion: "#3070CE",
				btnNavegacionHover: "#008b8b",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
