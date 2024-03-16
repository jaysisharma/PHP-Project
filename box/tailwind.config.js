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
      colors: {
        'custom-dark': '#111827',        
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

