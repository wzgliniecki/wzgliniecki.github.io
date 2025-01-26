/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#88aaee",
        mainAccent: "#4d80e6",
        overlay: "rgba(0,0,0,0.8)",

        // buttons
        button: "#DC2626",
        buttonHover: "#fa8cef",
        buttonActive: "#f774ea",

        // light mode
        bg: "#020617",
        text: "#DCFCE7",
        border: "#22D3EE",

        // dark mode
        darkBg: "#020617",
        darkText: "#DCFCE7",
        darkBorder: "#0369A1",
        secondaryBlack: "#212121",
      },
      borderRadius: {
        base: "19px",
      },
      boxShadow: {
        boxShadow: "3px 3px 0px rgba(0, 0, 0, 1)",
      },
      translate: {
        boxShadowX: "6px",
        boxShadowY: "6px",
        reverseBoxShadowX: "-6px",
        reverseBoxShadowY: "-6px",
      },
      fontWeight: {
        base: "700",
        heading: "900",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  // plugins: [require('daisyui')], // Add DaisyUI plugin here
  darkMode: "class",
};
