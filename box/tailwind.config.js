/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
   theme: {
    extend: {
      listStyleType: {
        'circle': 'circle',
        'square': 'square',
        'disc': 'disc',
      },
    },
  },
  plugins: [],
}

