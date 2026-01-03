/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'garage-blue': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36a9f7',
          500: '#0c8de6',
          600: '#006fb9',
          700: '#005896',
          800: '#004b7d',
          900: '#063f68',
          950: '#042845',
        },
        'garage-accent': '#f97316', // Orange automotive accent
      },
    },
  },
  plugins: [],
}
