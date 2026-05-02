/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0d9488", // Teal
          secondary: "#f97316", // Coral
          accent: "#1e293b", // Navy Blue
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#0d9488", // Teal
          secondary: "#f97316", // Coral
          accent: "#cbd5e1", // Light Slate for dark mode accent contrast
          neutral: "#1f2937",
          "base-100": "#111827",
        },
      },
    ],
  },
}

