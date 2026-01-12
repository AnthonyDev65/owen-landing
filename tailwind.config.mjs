/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'auriol': ['F1906 Fantasio Auriol W00 Normal', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'owen-dark': '#111111',
        'owen-card': '#1a1a1a',
      },
      backgroundImage: {
        'linear-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/4': '1 / 1',
      },
      maxWidth: {
        '112.5': '28.125rem', // 450px
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
      backdropBlur: {
        '3xl': '64px',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }
      }
    },
  },
  plugins: [],
}