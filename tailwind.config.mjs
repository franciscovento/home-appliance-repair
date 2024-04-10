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
        'hr-text': '#7A7A7A',
        'hr-background': '#F8F8F8',
      },
    },
  },
  plugins: [],
};
