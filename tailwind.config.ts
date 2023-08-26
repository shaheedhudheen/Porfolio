import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Graphik", "sans-serif"],
    },
    textColor: {
      primary: "#2D2E32",
      secondary: "#555555",
      tertiary: "##767676",
      background: "#F9F9F9",
      
    },
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
