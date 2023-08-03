/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    aspectRatio: {
      "3/2": "3 / 2",
      "16/9": "16 / 9",
      "4/3": "4 / 3",
      "2/3": "2 / 3",
      "4/5": "4 / 5"
    },
    colors: {
      "primary": "#0c3e71",
      "secondary": "#de1c02",
      "tertiary": "#fcd20e",
      "background": "#eeeeee",
      "black": "#0c0c0c",
      "gray": "#888888",
      "gray2": "#bbbbbb",
      "white": "#ffffff"
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
