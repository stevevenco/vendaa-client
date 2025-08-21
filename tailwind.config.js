// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1D4ED8',
        'secondary-gray': '#F3F4F6',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
        'border-color': '#D1D5DB',
        danger: '#DC2626',
      },
    },
  },
  plugins: [],
}
