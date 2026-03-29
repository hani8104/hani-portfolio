/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
          card: 'rgba(30, 41, 59, 0.7)'
        },
        primary: {
          DEFAULT: '#4F46E5', // Indigo
          cyan: '#06B6D4' // Cyan map
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
