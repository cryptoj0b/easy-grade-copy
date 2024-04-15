/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        whiter: '#f3fbfb',
        darkBlue: '#0b3050',
        lighterBlue: '#155893'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        Tajawal: ['Tajawal']
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

