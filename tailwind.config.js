/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'crewBackgroundDesktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crewBackgroundTab':"url('/src/assets/crew/background-crew-tablet.jpg')",
        'crewBackgroundMobile':"url('/src/assets/crew/background-crew-mobile.jpg')",

        'destBackgroundDesktop':"url('/src/assets/destination/background-destination-desktop.jpg')",
        'destBackgroundTab':"url('/src/assets/destination/background-destination-tablet.jpg')",
        'destBackgroundMobile':"url('/src/assets/destination/background-destination-mobile.jpg')",

        'homeBackgroundDesktop':"url('/src/assets/home/background-home-desktop.jpg')",
        'homeBackgroundTab':"url('/src/assets/home/background-home-tablet.jpg')",
        'homeBackgroundMobile':"url('/src/assets/home/background-home-mobile.jpg')",

        'techBackgroundDesktop':"url('/src/assets/technology/background-technology-desktop.jpg')",
        'techBackgroundTab':"url('/src/assets/technology/background-technology-tablet.jpg')",
        'techBackgroundMobile':"url('/src/assets/technology/background-technology-mobile.jpg')",
      },
      fontSize: {
        'h1' : "150px",
        'h2' : "100px",
        'h3' : "54px",
        'h4' : "32px",
        'h5' : "28px",

        'sh1' : "28px",
       'sh2' : "14px",
       
       'nav' : "16px",
      },
      fontFamily: {
        'bellefair' : ["Bellefair","serif"],
      },
      letterSpacing: {
        'navSpace' : ".25rem",
        'h5Space' : ".425rem",
        'sh2Space' : ".22rem",
      },
      colors : {
        'shCol' : "#D0D6F9",
        'drkCol' : "#0B0D17"
      }
    },
  },
  plugins: [],
}

