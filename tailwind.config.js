/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'history-bg': "url('assets/historybg.png')",
        'carousel-bg': "url('assets/carouselBg.png')",
        'teams-bg': "url('assets/teamsBg.png')",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      screens: {
        // => @media (min-width: 1025px) { ... }
        desktop: '1025px',
      },
    },
  },
  plugins: [],
};
