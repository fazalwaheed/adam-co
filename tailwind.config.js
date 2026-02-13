// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber-500': '#f59e0b',
        'amber-600': '#d97706',
        'gray-950': '#0c0a09',
      },
    },
  },
  plugins: [],
}