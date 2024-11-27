/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./src/**/*.{html,ts}",
   
  ],
  daisyui: {
    themes: [], // No theme will be applied by default
  },
  theme: {
    extend: {
      colors: {
        primebg: '#1C2745',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
}