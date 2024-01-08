/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#243c5a',
        // Add other custom colors or extend the theme here
      },
      // Other theme customizations can be done here
    },
  },
  variants: {
    extend: {
      // Add custom variants or extend existing ones here
    },
  },
  plugins: [
    // Add TailwindCSS plugins here if needed
  ],
};