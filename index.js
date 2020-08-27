const plugin = require('tailwindcss/plugin');

const gr = 1.61803398875; // The Golden Ratio

module.exports = plugin(
  function ({ addComponents, theme }) {
    const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
    const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));

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

    addComponents({
      ':root': {
        // '--gr-base': `${spacerBase}`,
        // '--gr-unit': `1${spacerUnit}`,
        '--gr': `${gr}`,

        '--golden-ratio-1': `${spacer1}${spacerUnit}`, // 0.135269rem
        '--golden-ratio-2': `${spacer2}${spacerUnit}`, // 0.218865rem
        '--golden-ratio-3': `${spacer3}${spacerUnit}`, // 0.354124rem
        '--golden-ratio-4': `${spacer4}${spacerUnit}`, // 0.572973rem
        '--golden-ratio-5': `${spacer5}${spacerUnit}`, // 0.92707rem
        '--golden-ratio-6': `${spacer6}${spacerUnit}`, // 1.5rem
        '--golden-ratio-7': `${spacer7}${spacerUnit}`, // 2.427rem
        '--golden-ratio-8': `${spacer8}${spacerUnit}`, // 3.92689rem
        '--golden-ratio-9': `${spacer9}${spacerUnit}`, // 6.35371rem
        '--golden-ratio-10': `${spacer10}${spacerUnit}`, // 10.2803rem
        '--golden-ratio-11': `${spacer11}${spacerUnit}`, // 16.6335rem

        '--golden-ratio-half-1': `${spacer1 / 2}${spacerUnit}`, // 0.0676345rem
        '--golden-ratio-half-2': `${spacer2 / 2}${spacerUnit}`, // 0.1094325rem
        '--golden-ratio-half-3': `${spacer3 / 2}${spacerUnit}`, // 0.177062rem
        '--golden-ratio-half-4': `${spacer4 / 2}${spacerUnit}`, // 0.2864865rem
        '--golden-ratio-half-5': `${spacer5 / 2}${spacerUnit}`, // 0.463535rem
        '--golden-ratio-half-6': `${spacer6 / 2}${spacerUnit}`, // 0.75rem
        '--golden-ratio-half-7': `${spacer7 / 2}${spacerUnit}`, // 1.2135rem
        '--golden-ratio-half-8': `${spacer8 / 2}${spacerUnit}`, // 1.963445rem
        '--golden-ratio-half-9': `${spacer9 / 2}${spacerUnit}`, // 3.176855rem
        '--golden-ratio-half-10': `${spacer10 / 2}${spacerUnit}`, // 5.14015rem
        '--golden-ratio-half-11': `${spacer11 / 2}${spacerUnit}`, // 8.31675rem

        '--golden-ratio-double-1': `${spacer1 * 2}${spacerUnit}`, // 0.270538rem
        '--golden-ratio-double-2': `${spacer2 * 2}${spacerUnit}`, // 0.43773rem
        '--golden-ratio-double-3': `${spacer3 * 2}${spacerUnit}`, // 0.708248rem
        '--golden-ratio-double-4': `${spacer4 * 2}${spacerUnit}`, // 1.145946rem
        '--golden-ratio-double-5': `${spacer5 * 2}${spacerUnit}`, // 1.85414rem
        '--golden-ratio-double-6': `${spacer6 * 2}${spacerUnit}`, // 3rem
        '--golden-ratio-double-7': `${spacer7 * 2}${spacerUnit}`, // 4.854rem
        '--golden-ratio-double-8': `${spacer8 * 2}${spacerUnit}`, // 7.85378rem
        '--golden-ratio-double-9': `${spacer9 * 2}${spacerUnit}`, // 12.70742rem
        '--golden-ratio-double-10': `${spacer10 * 2}${spacerUnit}`, // 20.5606rem
        '--golden-ratio-double-11': `${spacer11 * 2}${spacerUnit}`, // 33.267rem
      },
    });
  },
  {
    theme: {
      extend: {
        scale: {
          'grp-1': `${1 / gr / gr / gr / gr / gr}`, // 0.0901792
          'grp-2': `${1 / gr / gr / gr / gr}`, // 0.14591
          'grp-3': `${1 / gr / gr / gr}`, // 0.236083
          'grp-4': `${1 / gr / gr}`, // 0.381982
          'grp-5': `${1 / gr}`, // 0.618047
          'grp-6': `${1}`, // 1
          'grp-7': `${1 * gr}`, // 1.61803398875
          'grp-8': `${1 * gr * gr}`, // 2.61798
          'grp-9': `${1 * gr * gr * gr}`, // 4.23589
          'grp-10': `${1 * gr * gr * gr * gr}`, // 6.85367
          'grp-11': `${1 * gr * gr * gr * gr * gr}`, // 11.0892
        },

        width: (theme) => ({
          'grp-1': `${100 / gr / gr / gr / gr / gr}%`, // 9.01792%
          'grp-2': `${100 / gr / gr / gr / gr}%`, // 14.591%
          'grp-3': `${100 / gr / gr / gr}%`, // 23.6083%
          'grp-4': `${100 / gr / gr}%`, // 38.1982%
          'grp-5': `${100 / gr}%`, // 61.8047%
          'grp-6': `${100}%`, // 100%

          'grp-half-1': `${100 / gr / gr / gr / gr / gr / 2}%`, // 4.50896%
          'grp-half-2': `${100 / gr / gr / gr / gr / 2}%`, // 7.2955%
          'grp-half-3': `${100 / gr / gr / gr / 2}%`, // 11.80415%
          'grp-half-4': `${100 / gr / gr / 2}%`, // 19.0991%
          'grp-half-5': `${100 / gr / 2}%`, // 30.90235%
          'grp-half-6': `${100 / 2}%`, // 50%
          'grp-half-7': `${(100 * gr) / 2}%`, // 80.9%

          'grp-double-1': `${(100 / gr / gr / gr / gr / gr) * 2}%`, // 18.03584%
          'grp-double-2': `${(100 / gr / gr / gr / gr) * 2}%`, // 29.182%
          'grp-double-3': `${(100 / gr / gr / gr) * 2}%`, // 47.2166%
          'grp-double-4': `${(100 / gr / gr) * 2}%`, // 76.3964%
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

        spacing: {
          'gr-1': 'var(--golden-ratio-1)',
          'gr-2': 'var(--golden-ratio-2)',
          'gr-3': 'var(--golden-ratio-3)',
          'gr-4': 'var(--golden-ratio-4)',
          'gr-5': 'var(--golden-ratio-5)',
          'gr-6': 'var(--golden-ratio-6)',
          'gr-7': 'var(--golden-ratio-7)',
          'gr-8': 'var(--golden-ratio-8)',
          'gr-9': 'var(--golden-ratio-9)',
          'gr-10': 'var(--golden-ratio-10)',
          'gr-11': 'var(--golden-ratio-11)',

          'gr-half-1': 'var(--golden-ratio-half-1)',
          'gr-half-2': 'var(--golden-ratio-half-2)',
          'gr-half-3': 'var(--golden-ratio-half-3)',
          'gr-half-4': 'var(--golden-ratio-half-4)',
          'gr-half-5': 'var(--golden-ratio-half-5)',
          'gr-half-6': 'var(--golden-ratio-half-6)',
          'gr-half-7': 'var(--golden-ratio-half-7)',
          'gr-half-8': 'var(--golden-ratio-half-8)',
          'gr-half-9': 'var(--golden-ratio-half-9)',
          'gr-half-10': 'var(--golden-ratio-half-10)',
          'gr-half-11': 'var(--golden-ratio-half-11)',

          'gr-double-1': 'var(--golden-ratio-double-1)',
          'gr-double-2': 'var(--golden-ratio-double-2)',
          'gr-double-3': 'var(--golden-ratio-double-3)',
          'gr-double-4': 'var(--golden-ratio-double-4)',
          'gr-double-5': 'var(--golden-ratio-double-5)',
          'gr-double-6': 'var(--golden-ratio-double-6)',
          'gr-double-7': 'var(--golden-ratio-double-7)',
          'gr-double-8': 'var(--golden-ratio-double-8)',
          'gr-double-9': 'var(--golden-ratio-double-9)',
          'gr-double-10': 'var(--golden-ratio-double-10)',
          'gr-double-11': 'var(--golden-ratio-double-11)',

          'grp-1': `${100 / gr / gr / gr / gr / gr}%`, // 0.0901792
          'grp-2': `${100 / gr / gr / gr / gr}%`, // 0.14591
          'grp-3': `${100 / gr / gr / gr}%`, // 0.236083
          'grp-4': `${100 / gr / gr}%`, // 0.381982
          'grp-5': `${100 / gr}%`, // 0.618047
          'grp-6': `${100}%`, // 1
          'grp-7': `${100 * gr}%`, // 1.61803398875
          'grp-8': `${100 * gr * gr}%`, // 2.61798
          'grp-9': `${100 * gr * gr * gr}%`, // 4.23589
          'grp-10': `${100 * gr * gr * gr * gr}%`, // 6.85367
          'grp-11': `${100 * gr * gr * gr * gr * gr}%`, // 11.0892

          'grp-half-1': `${50 / gr / gr / gr / gr / gr}%`,
          'grp-half-2': `${50 / gr / gr / gr / gr}%`,
          'grp-half-3': `${50 / gr / gr / gr}%`,
          'grp-half-4': `${50 / gr / gr}%`,
          'grp-half-5': `${50 / gr}%`,
          'grp-half-6': `${50}%`,
          'grp-half-7': `${50 * gr}%`,
          'grp-half-8': `${50 * gr * gr}%`,
          'grp-half-9': `${50 * gr * gr * gr}%`,
          'grp-half-10': `${50 * gr * gr * gr * gr}%`,
          'grp-half-11': `${50 * gr * gr * gr * gr * gr}%`,

          'grp-double-1': `${200 / gr / gr / gr / gr / gr}%`,
          'grp-double-2': `${200 / gr / gr / gr / gr}%`,
          'grp-double-3': `${200 / gr / gr / gr}%`,
          'grp-double-4': `${200 / gr / gr}%`,
          'grp-double-5': `${200 / gr}%`,
          'grp-double-6': `${200}%`,
          'grp-double-7': `${200 * gr}%`,
          'grp-double-8': `${200 * gr * gr}%`,
          'grp-double-9': `${200 * gr * gr * gr}%`,
          'grp-double-10': `${200 * gr * gr * gr * gr}%`,
          'grp-double-11': `${200 * gr * gr * gr * gr * gr}%`,
        },

        borderWidth: {
          default: 'var(--golden-ratio-1)',
          'gr-2': 'var(--golden-ratio-2)',
          'gr-3': 'var(--golden-ratio-3)',
          'gr-4': 'var(--golden-ratio-4)',
          'gr-5': 'var(--golden-ratio-5)',
          'gr-6': 'var(--golden-ratio-6)',
          'gr-7': 'var(--golden-ratio-7)',
          'gr-8': 'var(--golden-ratio-8)',
          'gr-9': 'var(--golden-ratio-9)',
          'gr-10': 'var(--golden-ratio-10)',
          'gr-11': 'var(--golden-ratio-11)',

          'gr-half-1': 'var(--golden-ratio-half-1)',
          'gr-half-2': 'var(--golden-ratio-half-2)',
          'gr-half-3': 'var(--golden-ratio-half-3)',
          'gr-half-4': 'var(--golden-ratio-half-4)',
          'gr-half-5': 'var(--golden-ratio-half-5)',
          'gr-half-6': 'var(--golden-ratio-half-6)',
          'gr-half-7': 'var(--golden-ratio-half-7)',
          'gr-half-8': 'var(--golden-ratio-half-8)',
          'gr-half-9': 'var(--golden-ratio-half-9)',
          'gr-half-10': 'var(--golden-ratio-half-10)',
          'gr-half-11': 'var(--golden-ratio-half-11)',

          'gr-double-1': 'var(--golden-ratio-double-1)',
          'gr-double-2': 'var(--golden-ratio-double-2)',
          'gr-double-3': 'var(--golden-ratio-double-3)',
          'gr-double-4': 'var(--golden-ratio-double-4)',
          'gr-double-5': 'var(--golden-ratio-double-5)',
          'gr-double-6': 'var(--golden-ratio-double-6)',
          'gr-double-7': 'var(--golden-ratio-double-7)',
          'gr-double-8': 'var(--golden-ratio-double-8)',
          'gr-double-9': 'var(--golden-ratio-double-9)',
          'gr-double-10': 'var(--golden-ratio-double-10)',
          'gr-double-11': 'var(--golden-ratio-double-11)',
        },

        lineHeight: {
          'gr-1': 'var(--golden-ratio-1)',
          'gr-2': 'var(--golden-ratio-2)',
          'gr-3': 'var(--golden-ratio-3)',
          'gr-4': 'var(--golden-ratio-4)',
          'gr-5': 'var(--golden-ratio-5)',
          'gr-6': 'var(--golden-ratio-6)',
          'gr-7': 'var(--golden-ratio-7)',
          'gr-8': 'var(--golden-ratio-8)',
          'gr-9': 'var(--golden-ratio-9)',
          'gr-10': 'var(--golden-ratio-10)',
          'gr-11': 'var(--golden-ratio-11)',
        },
      },
    },
  },
);
