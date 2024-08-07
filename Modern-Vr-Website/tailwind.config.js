/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientBtn': 'linear-gradient(90deg, #897fb7, #b7ade0)',
      },
      textColor: {
        'gradientTextDark': '#343045',
      }
    },
  },
  plugins: [],
}