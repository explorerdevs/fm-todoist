const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      default: "0.8rem",
      pill: "100vmax",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      inherit: "inherit",
      neutral: {
        100: "#ffffff",
        900: "#000000",
      },
      primary: {
        100: "#fafafa",
        200: "#e4e5f1",
        300: "#e3e4f1",
        400: "#d2d3db",
        500: "#d1d2da",
        600: "#c8cbe7",
        700: "#9394a5",
        800: "#9495a5",
      },
      secondary: {
        100: "#767992",
        200: "#5b5e7e",
        300: "#4d5067",
        400: "#494c6b",
        500: "#484b6a",
        600: "#393a4b",
        700: "#25273d",
        800: "#171823",
      },
      accent: {
        100: "#55ddff",
        200: "#3a7cfd",
        300: "#c058f3",
      },
    },

    screens: {
      s: "20em", // => @media (min-width: 320px) { ... }
      xs: "30em", // => @media (min-width: 480px) { ... }
      sm: "36em", // => @media (min-width: 576px) { ... }
      sx: "40em", // => @media (min-width: 640px) { ... }
      md: "45em", // => @media (min-width: 720px) { ... }
      lg: "64em", // => @media (min-width: 1024px) { ... }
      xl: "80em", // => @media (min-width: 1280px) { ... }
      xxl: "96em", // => @media (min-width: 1280px) { ... }
      xxxl: "112.5em", // => @media (min-width: 1800px) { ... }
    },
    extend: {},
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".svg-icon": {
          fill: "currentColor",
        },
        ".w-full-shadow": {
          boxShadow: "0 0 0 100vmax currentColor, 0 0 2rem currentColor",
          clipPath: "inset(0 -100vmax)",
        },
        ".h-container": {
          "--max-width": "64rem",
          "--container-padding": "2rem",

          width: "min(var(--max-width), 100% - (var(--container-padding) * 2))",
          marginInline: "auto",
        },
      });
    }),
  ],
};
