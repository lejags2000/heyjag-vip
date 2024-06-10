/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        neutral: "#353535",
        gray: {
          "100": "rgba(255, 255, 255, 0.16)",
          "200": "rgba(0, 0, 0, 0.24)",
        },
        primary: "#07aa9d",
        lightseagreen: "#21c4b8",
        "neutral-light": "#585757",
        black: "#000",
        grey: "#f0f0f0",
        honeydew: "#cfebdd",
        gainsboro: "#e6e6e6",
        darkslategray: "rgba(51, 51, 51, 0.24)",
        secondary: "#7fc1a1",
        seagreen: {
          "100": "#4d8f6e",
          "200": "rgba(77, 143, 110, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        body: "Avenir",
      },
      borderRadius: {
        "12xs": "1px",
      },
    },
    fontSize: {
      mini: "15px",
      xs: "12px",
      "3xs": "10px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
