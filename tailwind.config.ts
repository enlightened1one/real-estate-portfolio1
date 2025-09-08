import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // Custom primary color
                secondary: "#FBBF24", // Custom secondary color
                accent: "#10B981", // Custom accent color
                indigo_dye: {
          DEFAULT: '#00497a',
          100: '#000f18',
          200: '#001d31',
          300: '#002c49',
          400: '#003b62',
          500: '#00497a',
          600: '#0078c8',
          700: '#16a2ff',
          800: '#64c1ff',
          900: '#b1e0ff'
        },
        indigo_dye_alt: { // renamed to avoid overwrite
          DEFAULT: '#003d66',
          100: '#000c14',
          200: '#001829',
          300: '#00253d',
          400: '#003152',
          500: '#003d66',
          600: '#006eb8',
          700: '#0a9dff',
          800: '#5cbeff',
          900: '#addeff'
        },
        prussian_blue: {
          DEFAULT: '#00253d',
          100: '#00070c',
          200: '#000f18',
          300: '#001625',
          400: '#001d31',
          500: '#00253d',
          600: '#005b97',
          700: '#0090f1',
          800: '#4bb7ff',
          900: '#a5dbff'
        },
        rich_black: {
          DEFAULT: '#001829',
          100: '#000508',
          200: '#000a10',
          300: '#000e18',
          400: '#001321',
          500: '#001829',
          600: '#004f87',
          700: '#0085e4',
          800: '#43b1ff',
          900: '#a1d8ff'
        },
        rich_black_alt: { // renamed to avoid overwrite
          DEFAULT: '#000c14',
          100: '#000204',
          200: '#000508',
          300: '#00070c',
          400: '#000a10',
          500: '#000c14',
          600: '#004776',
          700: '#0082d8',
          800: '#3bb1ff',
          900: '#9dd8ff'
        }
      }
    },
  },
  plugins: [],
};

export default config;