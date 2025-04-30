/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.mdx",
    "./docusaurus.config.js",
    "./src/pages/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with Infima
    container: false, // Disable the container utility to avoid conflict with Infima framework
  },
  darkMode: ['class', '[data-theme="dark"]'],
}
