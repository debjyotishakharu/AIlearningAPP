/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#1a0700",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e0e0",
        },
        gray: "#828282",
        lightcyan: "#ceeef9",
        "gray-1": "#333",
        whitesmoke: "#eee",
        aliceblue: "#d9f0fe",
      },
      spacing: {
        "spacing-xs": "8px",
        "spacing-s": "24px",
        "spacing-m": "48px",
      },
      fontFamily: {
        heading: "Inter",
        righteous: "Righteous",
        "red-hat-display": "'Red Hat Display'",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
        "31xl": "50px",
      },
    },
    fontSize: {
      mini: "15px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
