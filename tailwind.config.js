/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/background.jfif')",
      },
    },
  },
  plugins: [],
};

