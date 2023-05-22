/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/**/*.{js,jsx,ts,tsx}',
    './features/**/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    '../features/**/*.{js,ts,jsx,tsx,mdx}',
    '../src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
