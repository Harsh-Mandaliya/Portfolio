/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f5257',
        'accent': '#D4A259',
        'neutral-dark': '#0b0f12',
        'background': '#F7F8FB',
      },
      fontFamily: {
        // Set Merriweather as the serif font
        'serif': ['Merriweather', 'serif'],
        // Optional: fallback sans if needed
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'primary-glow': '0 0 20px 5px rgba(15, 82, 87, 0.4)',
      },
    },
  },
  plugins: [],
}
