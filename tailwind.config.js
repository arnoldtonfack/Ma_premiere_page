/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ffc045',
        'primary-hover': '#f5b029',
        'secondary': '#3d2514',
        'secondary-hover': '#231105',
        'red-primary': '#bf2222',
        'red-primary-hover': '#990e0e'
      },
      fontFamily: {
        'secondary': ["Alfa Slab One", "serif"]
      }
    },
  },
  plugins: [],
};
