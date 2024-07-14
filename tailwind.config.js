// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-lg': '0 10px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
