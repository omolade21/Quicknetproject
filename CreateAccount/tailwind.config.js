/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        Red: "#ED1C24",
        inputColor: "#E6E6E6",
        buttonColor: "#180203",
      },
      borderRadius: {
        buttonRadius: "40px",
      },
      colors: {
        textColour: "#4D4D4D",
        Black: "#1A1A1A",
        red:"#ED1C23",
        selectColor:"#999999"
      },

      height: {
        height1: "900px",
      },

      width: {
        width1: "505px",
        mobileWidth: "310px",

      },
      fontSize: {
        28: "28px",
      },
      lineHeight: {
        "35": "35px",
        "17.5": "17.5px",
        "22.5":"22.5px"
      },
    },
  },
  plugins: [],
};
