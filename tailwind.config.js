module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,html,liquid, md}"],
  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
