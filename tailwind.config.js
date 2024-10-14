/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'lsm': '320px',
      'xsm': '370px',
      'ssm': '420px',
    },
    colors: {

    },
    fontFamily: {
      aeonik: ['Aeonik', 'sans-serif'],
      maiandra: ['Maiandra', 'sans-serif'],
    },
    boxShadow: {
      'shawdowBooking': '0px 8px 8px 0px #00000033'
    }
  },
};
export const plugins = []; 