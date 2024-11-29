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
        button: '#FFA6F6',
        buttonHover: '#fa8cef',
        buttonActive: '#f774ea',

        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121",
      },
      borderRadius: {
        base: "19px",
      },
      boxShadow: {
        'boxShadow': '3px 3px 0px rgba(0, 0, 0, 1)',
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
        sans: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: "class",
};
