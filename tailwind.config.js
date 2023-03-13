/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  //remove if any issues
  darkMode: false,


  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
