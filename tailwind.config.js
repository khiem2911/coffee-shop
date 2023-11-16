/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'title':'#a27b5c',
        'hover-bg':'rgb(141, 106, 79)',
        'date':'#b79880',
        'border':'#6d6d6d',
        'bg_footer':'#121212',
        'footer_text':'#a07a5b',
        'bg-suggest':'#fcf7ef',
        'border-auth':'#c9c9c9',
        'text-auth':'#a2a2a2',
        'border-checkout':'#22d7a6',
        'border-gray':'#e7e7e7',
        'backDrop' : 'black'
      }
    },
  },
  plugins: [],
}