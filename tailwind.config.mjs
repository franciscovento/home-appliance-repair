/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      fontFamily: {
        title: ['Raleway', 'sans-serif'],
        text: ['DM Sans', 'sans-serif'],
      },
      colors: {
        'hr-primary': '#1F519A',
        'hr-primary-light': '#0073B0',
        'hr-secondary': '#F3743A',
        'hr-secondary-light': '#F8CEA5',
        'hr-text': '#212121',
        'hr-background': '#F8F8F8',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeUp: 'fadeUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
