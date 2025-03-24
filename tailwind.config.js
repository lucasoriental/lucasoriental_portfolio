export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-attention": "text-animation 1.5s ease infinite",
      },
      keyframes: {
        "text-animation": {
          "0%": { color: "#dc2626" },
          "50%": { color: "#fff" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
