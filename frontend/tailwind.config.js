/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xsm': "425px",
      // => @media (min-width: 425px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    aspectRatio: {
      "1/1": "1 / 1",
      "3/2": "3 / 2",
      "16/9": "16 / 9",
      "4/3": "4 / 3",
      "2/3": "2 / 3",
      "4/5": "4 / 5"
    },
    colors: {
      "primary": "#0c3e71",
      "secondary": "#fcd20e",
      "background": "#eeeeee",
      "black": "#0c0c0c",
      "gray": "#888888",
      "gray2": "#bbbbbb",
      "gray3": "#efefef",
      "gray4": "#92b9e8",
      "white": "#ffffff",
      "danger": "#ca2028"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
