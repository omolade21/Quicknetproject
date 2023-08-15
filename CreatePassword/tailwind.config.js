/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        Red: "#ED1C24",
        inputColor: "#E6E6E6",
        Black: "#1A1A1A",
        buttonColor: "#180203",
      },
      borderRadius: {
        buttonRadius: "40px",
      },
      colors: {
        textColour: "#4D4D4D",
        Black: "#1A1A1A",
       
     
      },

      height: {
        height1: "450px",
        height2: "55px",
        mobileButtonheight: "48px",
      
      },

      width: {
        width1: "505px",
        width2: "126px",
        width3: "283px",
        mobileWidth: "310px",
        mobileButtonWidth:"115px",
        mobileButtonWidth2:"150px"
       
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
