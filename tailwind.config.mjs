/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        mainAccent: "var(--mainAccent)",
        overlay: "var(--overlay)",

        // buttons
        button: "var(--button)",
        buttonHover: "var(--buttonHover)",
        buttonActive: "var(--buttonActive)",

        // light mode
        bg: "var(--bg)",
        text: "var(--text)",
        border: "var(--border)",

        // dark mode
        darkBg: "var(--darkBg)",
        darkText: "var(--darkText)",
        darkBorder: "var(--darkBorder)",
        secondaryBlack: "var(--secondaryBlack)",
      },
      borderRadius: {
        base: "var(--base-radius)",
      },
      boxShadow: {
        boxShadow: "var(--boxShadow)",
      },
      translate: {
        boxShadowX: "var(--boxShadowX)",
        boxShadowY: "var(--boxShadowY)",
        reverseBoxShadowX: "var(--reverseBoxShadowX)",
        reverseBoxShadowY: "var(--reverseBoxShadowY)",
      },
      fontWeight: {
        base: "var(--base-font-weight)",
        heading: "var(--heading-font-weight)",
      },
      fontFamily: {
        sans: "var(--sans-font)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  darkMode: "class",
};
