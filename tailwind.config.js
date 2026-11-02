/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        ink: '#171717',
        muted: '#858585',
        paper: '#f5f5f3',
      },
      boxShadow: {
        button: '0 4px 0 #171717, 0 9px 18px rgba(0,0,0,.09)',
      },
    },
  },
  plugins: [],
}
