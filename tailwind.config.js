module.exports = {
  darkMode: "media", // or 'media' or 'class'
  content: ["./src/**/*.{js,html,liquid, md}"],
  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
