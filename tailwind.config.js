/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18211f",
        graphite: "#303735",
        fog: "#f6f8f5",
        paper: "#fffefb",
        moss: "#0f6d58",
        sage: "#b9cec4",
        mint: "#e8f4ee",
        steel: "#d9e0dd",
        bluegray: "#eef3f5",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 34, 29, 0.08)",
        line: "0 1px 0 rgba(24, 33, 31, 0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Fraunces",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
