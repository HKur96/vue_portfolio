export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
   "compilerOptions": {
   "paths": {
     "@/*": [
      "./*"
     ]
    }
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#3b82f6',
        accent: '#a855f7',
      },
      boxShadow: {
        glow: '0 0 20px rgba(168, 85, 247, 0.6)',
        'glow-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
