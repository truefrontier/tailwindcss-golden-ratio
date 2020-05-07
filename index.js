const plugin = require('tailwindcss/plugin');

const gr = 1.61803398875; // The Golden Ratio
const spacerBase = 1.5;

const spacer1 = spacerBase / gr / gr / gr / gr / gr;
const spacer2 = spacerBase / gr / gr / gr / gr;
const spacer3 = spacerBase / gr / gr / gr;
const spacer4 = spacerBase / gr / gr;
const spacer5 = spacerBase / gr;
const spacer6 = spacerBase;
const spacer7 = spacerBase * gr;
const spacer8 = spacerBase * gr * gr;
const spacer9 = spacerBase * gr * gr * gr;
const spacer10 = spacerBase * gr * gr * gr * gr;
const spacer11 = spacerBase * gr * gr * gr * gr * gr;

module.exports = plugin(
  function({ theme }) {
    // nothing needed here...
  },
  {
    theme: {
      extend: {
        scale: {
          'gr-1': `${1 / gr / gr / gr / gr / gr}`, // 0.0901792
          'gr-2': `${1 / gr / gr / gr / gr}`, // 0.14591
          'gr-3': `${1 / gr / gr / gr}`, // 0.236083
          'gr-4': `${1 / gr / gr}`, // 0.381982
          'gr-5': `${1 / gr}`, // 0.618047
          'gr-6': `${1}`, // 1
          'gr-7': `${1 * gr}`, // 1.61803398875
          'gr-8': `${1 * gr * gr}`, // 2.61798
          'gr-9': `${1 * gr * gr * gr}`, // 4.23589
          'gr-10': `${1 * gr * gr * gr * gr}`, // 6.85367
          'gr-11': `${1 * gr * gr * gr * gr * gr}`, // 11.0892
        },

        width: (theme) => ({
          'gr-1': `${100 / gr / gr / gr / gr / gr}%`, // 9.01792%
          'gr-2': `${100 / gr / gr / gr / gr}%`, // 14.591%
          'gr-3': `${100 / gr / gr / gr}%`, // 23.6083%
          'gr-4': `${100 / gr / gr}%`, // 38.1982%
          'gr-5': `${100 / gr}%`, // 61.8047%
          'gr-6': `${100}%`, // 100%

          'gr-half-1': `${100 / gr / gr / gr / gr / gr / 2}%`, // 4.50896%
          'gr-half-2': `${100 / gr / gr / gr / gr / 2}%`, // 7.2955%
          'gr-half-3': `${100 / gr / gr / gr / 2}%`, // 11.80415%
          'gr-half-4': `${100 / gr / gr / 2}%`, // 19.0991%
          'gr-half-5': `${100 / gr / 2}%`, // 30.90235%
          'gr-half-6': `${100 / 2}%`, // 50%
          'gr-half-7': `${(100 * gr) / 2}%`, // 80.9%

          'gr-double-1': `${(100 / gr / gr / gr / gr / gr) * 2}%`, // 18.03584%
          'gr-double-2': `${(100 / gr / gr / gr / gr) * 2}%`, // 29.182%
          'gr-double-3': `${(100 / gr / gr / gr) * 2}%`, // 47.2166%
          'gr-double-4': `${(100 / gr / gr) * 2}%`, // 76.3964%
        }),

        maxWidth: (theme) => ({
          ...theme('spacing'),
        }),

        maxHeight: (theme) => ({
          ...theme('spacing'),
        }),

        minWidth: (theme) => ({
          ...theme('spacing'),
        }),

        minHeight: (theme) => ({
          ...theme('spacing'),
        }),
      },

      spacing: {
        '0': '0',
        '1': `${spacer1}rem`, // 0.135269rem
        '2': `${spacer2}rem`, // 0.218865rem
        '3': `${spacer3}rem`, // 0.354124rem
        '4': `${spacer4}rem`, // 0.572973rem
        '5': `${spacer5}rem`, // 0.92707rem
        '6': `${spacer6}rem`, // 1.5rem
        '7': `${spacer7}rem`, // 2.427rem
        '8': `${spacer8}rem`, // 3.92689rem
        '9': `${spacer9}rem`, // 6.35371rem
        '10': `${spacer10}rem`, // 10.2803rem
        '11': `${spacer11}rem`, // 16.6335rem

        'half-1': `${spacer1 / 2}rem`, // 0.0676345rem
        'half-2': `${spacer2 / 2}rem`, // 0.1094325rem
        'half-3': `${spacer3 / 2}rem`, // 0.177062rem
        'half-4': `${spacer4 / 2}rem`, // 0.2864865rem
        'half-5': `${spacer5 / 2}rem`, // 0.463535rem
        'half-6': `${spacer6 / 2}rem`, // 0.75rem
        'half-7': `${spacer7 / 2}rem`, // 1.2135rem
        'half-8': `${spacer8 / 2}rem`, // 1.963445rem
        'half-9': `${spacer9 / 2}rem`, // 3.176855rem
        'half-10': `${spacer10 / 2}rem`, // 5.14015rem
        'half-11': `${spacer11 / 2}rem`, // 8.31675rem

        'double-1': `${spacer1 * 2}rem`, // 0.270538rem
        'double-2': `${spacer2 * 2}rem`, // 0.43773rem
        'double-3': `${spacer3 * 2}rem`, // 0.708248rem
        'double-4': `${spacer4 * 2}rem`, // 1.145946rem
        'double-5': `${spacer5 * 2}rem`, // 1.85414rem
        'double-6': `${spacer6 * 2}rem`, // 3rem
        'double-7': `${spacer7 * 2}rem`, // 4.854rem
        'double-8': `${spacer8 * 2}rem`, // 7.85378rem
        'double-9': `${spacer9 * 2}rem`, // 12.70742rem
        'double-10': `${spacer10 * 2}rem`, // 20.5606rem
        'double-11': `${spacer11 * 2}rem`, // 33.267rem
      },

      borderWidth: {
        default: `${spacer1}rem`, // 0.135269rem
        '0': '0',
        '2': `${spacer2}rem`, // 0.218865rem
        '3': `${spacer3}rem`, // 0.354124rem
        '4': `${spacer4}rem`, // 0.572973rem
        '5': `${spacer5}rem`, // 0.92707rem

        half: `${spacer1 / 2}rem`, // 0.0676345rem
        'half-2': `${spacer2 / 2}rem`, // 0.1094325rem
        'half-3': `${spacer3 / 2}rem`, // 0.177062rem
        'half-4': `${spacer4 / 2}rem`, // 0.2864865rem
        'half-5': `${spacer5 / 2}rem`, // 0.463535rem
      },

      lineHeight: {
        none: '1',
        '1': `${spacer1}rem`, // 0.135269rem
        '2': `${spacer2}rem`, // 0.218865rem
        '3': `${spacer3}rem`, // 0.354124rem
        '4': `${spacer4}rem`, // 0.572973rem
        '5': `${spacer5}rem`, // 0.92707rem
        '6': `${spacer6}rem`, // 1.5rem
        '7': `${spacer7}rem`, // 2.427rem
        '8': `${spacer8}rem`, // 3.92689rem
        '9': `${spacer9}rem`, // 6.35371rem
        '10': `${spacer10}rem`, // 10.2803rem
        '11': `${spacer11}rem`, // 16.6335rem
      },
    },
  },
);
