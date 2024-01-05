const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'index.html'),
    join(__dirname, 'header/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    spacing: {
      '0': '0',
      'px': '1px',
      '0.25': '0.125rem',
      '0.5': '0.25rem',
      '0.75': '0.375rem',
      '1': '0.5rem',
      '1.5': '0.75rem',
      '2': '0.1rem',
      '2.5': '1.25rem',
      '3': '1.5rem',
      '3.5': '1.75rem',
      '4': '2rem',
      '5': '2.5rem',
      '6': '3rem',
      '7': '3.5rem',
      '8': '4rem',
      '9': '4.5rem',
      '10': '5rem',
      '11': '5.5rem',
      '12': '6rem',
      '13': '6.5rem',
      '14': '7rem',
      '15': '7.5rem'
    },
    colors: {
      red: 'rgb(255 1 1 / <alpha-value>)',
      orange: 'rgb(255 73 1 / <alpha-value>)',
      yellow: 'rgb(255 230 1 / <alpha-value>)',
      green: 'rgb(1 255 26 / <alpha-value>)',
      light: {
        blue: 'rgb(1 255 26 / <alpha-value>)'
      },
      blue: 'rgb(1 42 255 / <alpha-value>)',
      pink: 'rgb(235 1 255 / <alpha-value>)',
      purple: 'rgb(158 1 255 / <alpha-value>)',
      white: 'rgb(251 251 251 / <alpha-value>)',
      black: 'rgb(17 15 15 / <alpha-value>)'
    }
  },
  plugins: []
};
