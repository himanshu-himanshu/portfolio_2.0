/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Fascinate: ["'Fascinate', 'system-ui'"],
        Oxygen: ["Oxygen Mono", "monospace"],
      },
      colors: {
        primary: "#2c3439",
        secondary: "#dbd6cb",
        tertiary: "#614f89",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
