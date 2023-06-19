/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        mb: "url('./src/assets/images/bg-sidebar-mobile.svg')",
        dt: "url('./src/assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        blue: "#022959",
        grey: "#9699AA",
        "light-grey": "#D6D9E6",
        sky: "#EFF5FF",
        red: "#EE374A",
        "sky-blue": "#483EFF",
      },
    },
  },
  plugins: [],
};
