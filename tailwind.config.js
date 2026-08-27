/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screen: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        success: 'var(--success-color)',
        warning: 'var(--warning-color)',
        danger: 'var(--danger-color)',
      },
    },
  },
  plugins: [],
}
