/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/front-bg.jpg')",
      },
      colors: {
        'custom-yellow': '#F5E7B2',
      },
      lineHeight: {
        'extra-tight': '1.1',
        '12': '3rem',
      },
    },
  },
  plugins: [],
}