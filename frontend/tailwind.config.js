/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gaming-dark': '#0f172a',       // Dark blue/black
        'gaming-darker': '#020617',     // Even darker
        'gaming-accent': '#3b82f6',     // Blue accent
        'gaming-secondary': '#1e293b',  // Lighter dark
        'gaming-text': '#e2e8f0',       // Light text
        'gaming-highlight': '#f59e0b',  // Yellow/orange for highlights
      },
      fontFamily: {
        'gaming': ['"Press Start 2P"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}