export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#225808',      // Dark green
          base: '#518123',      // Medium green
          light: '#99BD49',     // Light green
          lighter: '#B6D455',   // Lighter green
          lightest: '#EBF7A9',  // Very light green
        },
        secondary: '#FF9800',   // Orange
        accent: {
          green: '#8ABB63',     // Accent green
          light: '#C4CC82',     // Light accent
          pale: '#BBD394',      // Pale accent
        },
        dark: '#0C1805',        // Very dark green/black
      },
    },
  },
  plugins: [],
}
