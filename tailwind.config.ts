import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: "#868383",
        "light-grey": "#F6F3F4",
        "denim-blue": "#E9EEF6",
        "skin-light": "#e9c8b3",
        "soft-orange": "#e9c8b3",
        "gulf-blue": "#062152",
        "elegant-navy": "#4a536b",
        "banner-red": "#f15a59",
        "testimonial-bg": "#eef1f6",
        "dark-main": "#282c38",
      },
      boxShadow: {
        "custom-shadow": "0 0 30px rgba(78, 85, 255, .1)",
        "faq-shadow": "0 0 20px rgba(78, 85, 255, .1)",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease forwards",
        slideUp: "slideUp 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
