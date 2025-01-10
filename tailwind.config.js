/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
        colors:{
            'customBlue' : 'rgba(2, 7, 62, 1)',
            'customOrange' : 'rgba(255, 240, 215, 1)',
            'customTextOrange' : 'rgba(229, 167, 64, 1)',
            'customBTNorange' : 'rgba(255, 192, 89, 1)',
             'customHeroBg' : 'rgba(255, 252, 247, 1)',
             'bg-purple' : 'rgba(53, 52, 72, 1)',
             'text-oragne1' : 'rgba(255, 192, 89, 1)',
             "footerColor" :  "rgba(53, 52, 72, 1)",
             "DarkPurple" : "rgba(43, 41, 62, 1)"
            }
    },
  },
  plugins: [],
}

