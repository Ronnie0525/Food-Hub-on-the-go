/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep, cinematic backgrounds
        ink: '#0a0908',
        coal: '#100e0c',
        charcoal: '#16130f',
        // Warm raised surfaces (cards / panels)
        surface: {
          DEFAULT: '#1b1712',
          light: '#241f18',
          border: '#332b21',
        },
        // Warm white text
        cream: {
          DEFAULT: '#f3ece1',
          soft: '#d8cfc1',
          muted: '#a89c89',
          dim: '#7d7363',
        },
        // Gold / copper accent
        gold: {
          50: '#fbf6ea',
          100: '#f5e9cc',
          200: '#ecd6a3',
          300: '#e2c079',
          400: '#d8ab57',
          500: '#c8954a', // primary accent
          600: '#a9783b',
          700: '#835a2e',
        },
        copper: '#b87333',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        wide2: '0.18em',
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        card: '0 18px 50px -20px rgba(0,0,0,0.75)',
        glow: '0 0 60px -12px rgba(200,149,74,0.35)',
        'gold-sm': '0 8px 24px -10px rgba(200,149,74,0.45)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #c8954a, transparent)',
        'fade-bottom': 'linear-gradient(180deg, rgba(10,9,8,0) 0%, rgba(10,9,8,0.6) 60%, rgba(10,9,8,1) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 14s ease-out forwards',
        shimmer: 'shimmer 2.2s linear infinite',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
