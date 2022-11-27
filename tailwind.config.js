module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      colors: {
        "bgc":'#F8F8F8',
        "evergreenie": '#A5C926',
        "reddie": '#FB416B'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
 

