/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['"Lexend"', 'sans-serif'],
        'noto': ['"Noto Sans KR"', 'sans-serif'],
        'samatic': ['"Samatic"', 'sans-serif']
      },
    },
  },
  plugins: [],
}