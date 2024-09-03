/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#28292f",
          "200": "#171717",
          "300": "rgba(255, 255, 255, 0.03)",
          
        },
        "gray-40": "#a3adb2",
        darkgray: "#969696",
        'custom-gray': '#A3ADB2',
            'hello':'#FFFFFF',
            'kon':' #00000033',

            
        darkslategray: {
          "100": "#4a4f54",
          "200": "#363c43",
        },
        dimgray: "rgba(97, 97, 97, 0.82)",
        lightskyblue: "#96bee7",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        xl: "20px",
        "4xl": "23px",
        "10xs-5": "2.5px",
        "10xs-3": "2.3px",
        "11xs-2": "1.2px",
        "lg-9": "18.9px",
      },
      keyframes: {
        'curve-up': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-50%) scale(1.2)' },
          '100%': { transform: 'translateY(-100%) scale(0)' },
        },
      },
      animation: {
        'curve-up': 'curve-up 0.7s ease-in-out forwards',
      },
    
    },
    fontSize: {
      xl: "1.25rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
