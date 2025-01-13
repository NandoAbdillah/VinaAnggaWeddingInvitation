//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        sacramento: ['Sacramento', 'serif'],
        grandhotel : ["Grand Hotel", 'serif'],
        lobstertwo : ["Lobster Two", 'serif'],
      },
      screens: { 
        'mobile' : '320px',
        'tablet': '481px', 
        'laptop' : '769px',
        'dekstop': '1025px', 
        'tv': '1201px',
      } ,
    },
  },
  plugins: [],
}

