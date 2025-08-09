/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#29f0c1',
        accent2: '#5ad1ff',
        bgdark: '#081018',
        panel: '#0d1115',
        muted: '#9aa6b2',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
