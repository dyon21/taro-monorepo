/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../tailwind.config.js")],
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@project/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "blue",
      },
    },
  },
};
