/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nightBlue: "#20414B",
        lightGreen: "#5A7C73",
        nightGreen: "#365153",
        bluryYellow: "#DBB66D",
        pomodoroBg: "rgba(219, 182, 109, 0.07)",
        hrBg: "rgba(244, 241, 241, 0.58)",
        todoContainer: "rgba(218, 148, 99, 0.22)",
      },
      borderRadius: {
        todoContainer: "37px",
      },
      backdropBlur: {
        pomodoroBlur: "57px",
      },
      backgroundImage: {
        "hero-background": "url('/imgs/bg-todo.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
