/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#7ed6df',
          DEFAULT: '#22a6b3',
          dark: '#1e3799',
        },
      },
    },
  },
  plugins: [require('daisyui'),],
}

