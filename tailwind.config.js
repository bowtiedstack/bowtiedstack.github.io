// follow this for using tailwind -> https://tailwindcss.com/docs/installation
// Command is below to watch for changes:
//  npx tailwindcss -i ./public/css/styles.css -o ./public/css/output.css --watch
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        primary: "#003399",
        background: "#0074d9",
        lightGray: "#d1d1d1",
      },
    },
  },
  plugins: [],
};
