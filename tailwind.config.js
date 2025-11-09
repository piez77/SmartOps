/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-purple': {
          DEFAULT: '#5B21B6',
          light: '#9B72FF',
          accent: '#6A4CFF',
        },
        'brand-charcoal': '#0F1724',
        'brand-gray': '#F5F7FB',
        'brand-success': '#10B981',
      },
      fontFamily: {
        'serif-display': ['Playfair Display', 'serif'],
        'sans-modern': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-md': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
