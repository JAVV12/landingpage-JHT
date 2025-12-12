/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8faf9',
          100: '#f1f3f2',
          200: '#e3e7e5',
          300: '#d5dbd8',
          400: '#c9d1cd',
          500: '#bdc7c2',
          600: '#b1bdb7',
          700: '#a5b3ac',
          800: '#99a9a1',
          900: '#8d9f96',
        },
        dark: {
          50: '#f7f8f7',
          100: '#eff0ef',
          200: '#dfe1df',
          300: '#cfcfcf',
          400: '#bfbfbf',
          500: '#0d1b1e',
          600: '#0b171a',
          700: '#091316',
          800: '#071012',
          900: '#050c0e',
        },
        accent: {
          50: '#e6fff7',
          100: '#ccffef',
          200: '#99ffdf',
          300: '#66ffcf',
          400: '#33ffbf',
          500: '#00ffb9',
          600: '#00cc94',
          700: '#00996f',
          800: '#00664a',
          900: '#003325',
        },
        neutral: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#262626',
        }
      }
    },
  },
  plugins: [],
}

