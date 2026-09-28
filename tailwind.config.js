/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#00d4ff',
        'brand-blue': '#7ec8ff',
      },
      fontFamily: {
        'michroma': ['Michroma', 'sans-serif'],
        'bruno': ['"Bruno Ace SC"', 'sans-serif'],
        'jura': ['Jura', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
