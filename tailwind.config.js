/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        accent: "#d4a24c",
        accentDark: "#8b5e19"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(212, 162, 76, 0.18), transparent 30%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.12), transparent 25%), linear-gradient(135deg, rgba(5, 8, 22, 1), rgba(15, 23, 42, 0.95))"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 23, 42, 0.45)"
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"]
      }
    }
  },
  plugins: []
};
