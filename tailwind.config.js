/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Poppins", "sans - serif"],
      },
      colors: {
        "custom-brown": "#774B34",
        "custom-white": "#FAFAFA",
        "custom-wheat": "#FBF9F3",
        "custom-deep-browm": "#4B3515",
        brown: "#452500",
        orange: "#FF8A00",
      },
    },
  },
  plugins: [],
};
