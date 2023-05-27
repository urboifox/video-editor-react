/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffd754",
        secondary: "#191917",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        luluCleanBold: ["LuluCleanBold", "sans-serif"],
        luluClean: ["LuluClean", "sans-serif"],
        latoLight: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
