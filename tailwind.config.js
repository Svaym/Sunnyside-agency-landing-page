/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lp': '900px',
      'lg': '1024px',
      't': '1160px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif'],
      },
      backgroundImage: {
        'header-mobile': "url('../images/mobile/image-header.jpg')",
        'header-desktop': "url('../images/desktop/image-header.jpg')",
        'graphic-mobile': "url('../images/mobile/image-graphic-design.jpg')",
        'graphic-desktop': "url('../images/desktop/image-graphic-design.jpg')",
        'photography-mobile': "url('../images/mobile/image-photography.jpg')",
        'photography-desktop': "url('../images/desktop/image-photography.jpg')",
      }
    },
  },
  plugins: [],
}

