module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryGreen: '#06F8B1',
        primaryRed: '#b90000',
        secondaryRed: '#ff1b1b',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
