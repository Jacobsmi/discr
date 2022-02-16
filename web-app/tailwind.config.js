module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-img': "url('./imgs/field.jpg')",
      },
      colors: {
        'dark-green': '#2C3F2D',
        'off-white': '#F4F5F0',
        'orangish': '#EFAD81'
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
