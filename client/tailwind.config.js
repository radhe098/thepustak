/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateY(0)' }, // Change from translateX 
      to: { transform: 'translateY(-100%)' },
  
        }
      }                
    },
  },
  plugins: [],
}

