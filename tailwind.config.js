module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-bg": "#F7FFF7",
        content: "#1A535C",
        heading: "#FF6B6B",
        aux: "#4ECDC4",
        "aux-1": "#FFE66D",
      },
      fontFamily: {
        "main-font": ["Sora"],
        "logo-font": ["Yeseva One"],
      },
      backgroundImage: {
        "hero-img": "url('/images/IMG_0075.JPG')",
      },
    },
  },
  plugins: [],
};
