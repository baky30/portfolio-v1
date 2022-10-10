/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "neon-purple": '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #A230ED, 0 0 0.8rem #A230ED, 0 0 2.8rem #A230ED, inset 0 0 1.3rem #A230ED',
        "neon-blue": '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #3E00B3, 0 0 0.8rem #3E00B3, 0 0 2.8rem #3E00B3, inset 0 0 1.3rem #3E00B3',
        "neon-yellow": '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #FFE135, 0 0 0.8rem #FFE135, 0 0 2.8rem #FFE135, inset 0 0 1.3rem #FFE135',
        "neon-cream": '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #FFE5B4, 0 0 0.8rem #FFE5B4, 0 0 2.8rem #FFE5B4, inset 0 0 1.3rem #FFE5B4',
      }
    },
    colors: {
      navy: '#231955',
      blue: '#1F4690',
      orange: '#E8AA42',
      cream: '#FFE5B4',
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
