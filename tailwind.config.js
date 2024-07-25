/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      heading: ['"Fira Code"'],
    },
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#a6a6a6",
        dark: "#3d3d3d",
        body: "#121212",
      },
    },
  },
  plugins: [],
};
