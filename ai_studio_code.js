// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#2563EB",
        accent: "#10B981",
        background: "#FFFFFF",
        surface: "#F8FAFC",
        border: "#E2E8F0"
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui'],
      },
      boxShadow: {
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.03)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
}