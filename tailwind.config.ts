import type { Config } from 'tailwindcss';

const config: Config = {
  // safelist: [
  //   'greyPrimary',
  //   'dropdownBg',
  //   // Add more classes as needed
  // ],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5924ed',
        primaryLight: '#855afa',
        secondary: '#a170e6',
        secondaryLight: '#c4a2f5',
        bluePrimary: '#687efd',
        greyPrimary: '#D1D3D4',
        danger: '#E76F51',
        dropdownBg: '#0dff3d',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
};

export default config;
