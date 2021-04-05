module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryGreen: '#06F8B1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
