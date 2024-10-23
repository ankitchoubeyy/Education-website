/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Make sure these paths are correct for your project
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // Add this line to include shadcn UI components
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Outfit', 'sans-serif'], // Adding Outfit font
      },
      backgroundImage: {
        'hero': "url('./src/assets/hero.png')",
      },
    },
  },
  plugins: [],
}