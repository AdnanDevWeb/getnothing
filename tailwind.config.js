/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'main': "#edfa60",
      },
      fontSize: {
        'desc-size': '22px',
        'desc-size-md': '2rem'
      },
      width: {
        'container': '1150px'
      },
      maxWidth: {
        'container': '1150px'
      }
    },
  },
  plugins: [],
}