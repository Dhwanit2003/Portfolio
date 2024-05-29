/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '700': '700ms', // Adding custom duration of 2 seconds
      },
    },
  },
  plugins: [],
}