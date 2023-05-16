/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF336E",
          base: "#F50047",
          dark: "#B20034",
          darkest: "#66001D",
        },
        accent: {
          light: "#FF8A33",
          base: "#F56800",
          dark: "#B24C00",
          darkest: "#662B00",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
