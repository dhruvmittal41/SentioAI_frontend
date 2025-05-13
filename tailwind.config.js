/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#04094f',
        'night2': '#4d096b',
        'night3': '#8b0567',
        'offwhite': '#F5F5F4',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'sans-serif'],
        curvy: ['Single Day', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
