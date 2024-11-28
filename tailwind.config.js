/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Correct recursive path
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}