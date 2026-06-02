/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1fbf6',
          100: '#dff5ea',
          200: '#bfead3',
          300: '#8edbb1',
          400: '#48c17f',
          500: '#04a45e',
          600: '#078947',
          700: '#08703c',
          800: '#08442d',
          900: '#063b28',
          950: '#032417'
        }
      },
      boxShadow: {
        soft: '0 22px 60px rgba(8, 68, 45, 0.12)',
        green: '0 22px 50px rgba(4, 164, 94, 0.22)'
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
};
