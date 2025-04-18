/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'ks-gold': '#d4ac36',
        'ks-blue': '#0c338c',
        'ks-green': '#008000',
        'ks-red': '#ff0000',
        'ks-yellow': '#ffd700'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
