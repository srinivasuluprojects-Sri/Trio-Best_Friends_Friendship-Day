/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070A12',
          900: '#0B132B',
          850: '#151E3D',
          800: '#1C2541',
          700: '#273459',
          600: '#3A506B',
          500: '#48CAE4',
        },
        primary: {
          500: '#48CAE4',
          600: '#00B4D8',
          700: '#0077B6',
        },
        accent: {
          pink: '#EC4899',
          cyan: '#38BDF8',
          gold: '#FFD700',
          purple: '#7209B7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        handwriting: ['Dancing Script', 'cursive'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(72, 202, 228, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.7))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFF5C0 0%, #FFD700 50%, #B8860B 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0B132B 0%, #1C2541 50%, #3A506B 100%)',
        'purple-gradient': 'linear-gradient(135deg, #EC4899 0%, #7209B7 50%, #48CAE4 100%)',
      }
    },
  },
  plugins: [],
}
