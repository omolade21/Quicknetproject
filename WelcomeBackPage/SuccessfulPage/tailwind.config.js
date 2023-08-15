/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        Red: "#ED1C24",
        
      },
      borderRadius: {
        buttonRadius: "40px",
      },
      colors: {
       textColor:"#ED1C23",
        Black2:"#333333"
      },

      height: {
        height1: "270px",
      
      },

      width: {
        width1: "346px",
        mobileWidth: "310px",
      
      },
     
      lineHeight: {
      
        "20": "20px",
        
      },
    },
  },
  plugins: [],
};
