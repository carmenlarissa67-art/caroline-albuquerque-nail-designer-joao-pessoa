/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf6f1',
          100: '#f3ebe2',
          200: '#e6d7c8',
          300: '#cfb7a2',
          400: '#ae907a',
          500: '#8d6f5c',
          600: '#725746',
          700: '#5a4337',
          800: '#433129',
          900: '#2d201b',
          950: '#1a1210',
        },
        ink: { DEFAULT: '#1a1210', soft: '#2d201b', mute: '#8c7b72' },
        blush: { light: '#f7efe8', DEFAULT: '#ecdcd0', dark: '#b98a80' },
        cereja: { DEFAULT: '#b3242c', dark: '#861a20' },
        champagne: { DEFAULT: '#c79a8c', light: '#f2e2dc', dark: '#9a6a5e' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
      },
    },
  },
  plugins: [],
}
