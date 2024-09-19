module.exports = {
  content: [
    './public/**/*.html',   // This will scan all HTML files in the public directory
    './src/**/*.js',        // This will scan all JavaScript files in the src directory
    // Add any other paths where you use Tailwind CSS classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
