/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html', // for CRA
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        primaryDark: '#1e40af',
      },
      screens: {
        900: '900px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // keep if installed
  ],
};
