/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // Add your custom colors here
        textInDark: '#F4F4F4', // Text-in-dark
        textInLight: '#022100', // Text color on light bg
        buttonLight: '#D4FBCD', // Button (light)
        footer: '#010F00', // Dark (footer)
        bgDark: '#caf0c4', // Background dark
        bgMid: '#dcf6d8', // Background mid
        bgLight: '#eefaec', // Background light
      },
    },
  },
  plugins: [animate],
}