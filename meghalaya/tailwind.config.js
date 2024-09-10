module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#004d00',  // Dark green for primary color
        secondary: '#00b300', // Bright green for highlights
        accent: '#007a33',    // Lighter green for accents
        dark: '#002600',      // Darkest green for background or deeper contrast
        light: '#e6ffe6',     // Light green for background or text highlights
        textPrimary: '#ffffff', // White for primary text color on dark backgrounds
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      fontSize: {
        base: '16px',
        lg: '20px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}
