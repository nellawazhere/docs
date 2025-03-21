/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./docs/**/*.mdx",
    "./blog/**/*.mdx",
    "./docusaurus.config.js",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with Infima
  },
  darkMode: ['class', '[data-theme="dark"]'],
}
