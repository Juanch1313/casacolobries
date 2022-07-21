/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors:{
        letters: '#000000',
        bluesky: '#5ecccc',
        bluestrong: '#538cdc',
        gold: '#ffcb5b'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
