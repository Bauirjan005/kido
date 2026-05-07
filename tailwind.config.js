/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float':       'float 3s ease-in-out infinite',
        'float-slow':  'float 4.5s ease-in-out infinite',
        'float-fast':  'float 2.2s ease-in-out infinite',
        'wiggle':      'wiggle 1.2s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.5s ease-out both',
        'fade-in':     'fadeIn 0.4s ease-out both',
        'scale-in':    'scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both',
        'pop-in':      'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        'shimmer':     'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-12px) rotate(3deg)' },
          '66%':      { transform: 'translateY(-6px) rotate(-2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%':      { transform: 'rotate(6deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.85)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        popIn: {
          '0%':   { transform: 'scale(0) rotate(-10deg)', opacity: '0' },
          '60%':  { transform: 'scale(1.15) rotate(3deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
}
