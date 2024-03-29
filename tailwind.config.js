/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code'],
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'menu-color': '#D1D3D4',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
