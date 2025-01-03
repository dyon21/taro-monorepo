/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../tailwind.config.js")],
  theme: {
    extend: {
      colors: {
        primary: "blue",
      },
    },
  },
};
