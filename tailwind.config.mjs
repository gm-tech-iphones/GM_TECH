/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gm-yellow': '#F2C94C',
        'gm-black': '#0D0D0D',
        'gm-gray': '#1A1A1A',
      },
    },
  },
  plugins: [],
};