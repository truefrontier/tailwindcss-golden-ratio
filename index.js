const plugin = require('tailwindcss/plugin');

const gr = 1.61803398875; // The Golden Ratio

function getGolden(grPrefix, spacerBase, spacerUnit, useCssVars) {
  const base1 = spacerBase / gr / gr / gr / gr / gr;
  const base2 = spacerBase / gr / gr / gr / gr;
  const base3 = spacerBase / gr / gr / gr;
  const base4 = spacerBase / gr / gr;
  const base5 = spacerBase / gr;
  const base6 = spacerBase;
  const base7 = spacerBase * gr;
  const base8 = spacerBase * gr * gr;
  const base9 = spacerBase * gr * gr * gr;
  const base10 = spacerBase * gr * gr * gr * gr;
  const base11 = spacerBase * gr * gr * gr * gr * gr;

  const base = {
    gr1: `${base1}${spacerUnit}`, // 0.135269rem
    gr2: `${base2}${spacerUnit}`, // 0.218865rem
    gr3: `${base3}${spacerUnit}`, // 0.354124rem
    gr4: `${base4}${spacerUnit}`, // 0.572973rem
    gr5: `${base5}${spacerUnit}`, // 0.92707rem
    gr6: `${base6}${spacerUnit}`, // 1.5rem
    gr7: `${base7}${spacerUnit}`, // 2.427rem
    gr8: `${base8}${spacerUnit}`, // 3.92689rem
    gr9: `${base9}${spacerUnit}`, // 6.35371rem
    gr10: `${base10}${spacerUnit}`, // 10.2803rem
    gr11: `${base11}${spacerUnit}`, // 16.6335rem
    grHalf1: `${base1 / 2}${spacerUnit}`, // 0.0676345rem
    grHalf2: `${base2 / 2}${spacerUnit}`, // 0.1094325rem
    grHalf3: `${base3 / 2}${spacerUnit}`, // 0.177062rem
    grHalf4: `${base4 / 2}${spacerUnit}`, // 0.2864865rem
    grHalf5: `${base5 / 2}${spacerUnit}`, // 0.463535rem
    grHalf6: `${base6 / 2}${spacerUnit}`, // 0.75rem
    grHalf7: `${base7 / 2}${spacerUnit}`, // 1.2135rem
    grHalf8: `${base8 / 2}${spacerUnit}`, // 1.963445rem
    grHalf9: `${base9 / 2}${spacerUnit}`, // 3.176855rem
    grHalf10: `${base10 / 2}${spacerUnit}`, // 5.14015rem
    grHalf11: `${base11 / 2}${spacerUnit}`, // 8.31675rem
    grDouble1: `${base1 * 2}${spacerUnit}`, // 0.270538rem
    grDouble2: `${base2 * 2}${spacerUnit}`, // 0.43773rem
    grDouble3: `${base3 * 2}${spacerUnit}`, // 0.708248rem
    grDouble4: `${base4 * 2}${spacerUnit}`, // 1.145946rem
    grDouble5: `${base5 * 2}${spacerUnit}`, // 1.85414rem
    grDouble6: `${base6 * 2}${spacerUnit}`, // 3rem
    grDouble7: `${base7 * 2}${spacerUnit}`, // 4.854rem
    grDouble8: `${base8 * 2}${spacerUnit}`, // 7.85378rem
    grDouble9: `${base9 * 2}${spacerUnit}`, // 12.70742rem
    grDouble10: `${base10 * 2}${spacerUnit}`, // 20.5606rem
    grDouble11: `${base11 * 2}${spacerUnit}`, // 33.267rem
  };

  let golden = {
    ...base,
  };

  golden[`${grPrefix}1`] = useCssVars ? 'var(--golden-ratio-1)' : base.gr1;
  golden[`${grPrefix}2`] = useCssVars ? 'var(--golden-ratio-2)' : base.gr2;
  golden[`${grPrefix}3`] = useCssVars ? 'var(--golden-ratio-3)' : base.gr3;
  golden[`${grPrefix}4`] = useCssVars ? 'var(--golden-ratio-4)' : base.gr4;
  golden[`${grPrefix}5`] = useCssVars ? 'var(--golden-ratio-5)' : base.gr5;
  golden[`${grPrefix}6`] = useCssVars ? 'var(--golden-ratio-6)' : base.gr6;
  golden[`${grPrefix}7`] = useCssVars ? 'var(--golden-ratio-7)' : base.gr7;
  golden[`${grPrefix}8`] = useCssVars ? 'var(--golden-ratio-8)' : base.gr8;
  golden[`${grPrefix}9`] = useCssVars ? 'var(--golden-ratio-9)' : base.gr9;
  golden[`${grPrefix}10`] = useCssVars ? 'var(--golden-ratio-10)' : base.gr10;
  golden[`${grPrefix}11`] = useCssVars ? 'var(--golden-ratio-11)' : base.gr11;

  golden[`${grPrefix}half-1`] = useCssVars ? 'var(--golden-ratio-half-1)' : base.grHalf1;
  golden[`${grPrefix}half-2`] = useCssVars ? 'var(--golden-ratio-half-2)' : base.grHalf2;
  golden[`${grPrefix}half-3`] = useCssVars ? 'var(--golden-ratio-half-3)' : base.grHalf3;
  golden[`${grPrefix}half-4`] = useCssVars ? 'var(--golden-ratio-half-4)' : base.grHalf4;
  golden[`${grPrefix}half-5`] = useCssVars ? 'var(--golden-ratio-half-5)' : base.grHalf5;
  golden[`${grPrefix}half-6`] = useCssVars ? 'var(--golden-ratio-half-6)' : base.grHalf6;
  golden[`${grPrefix}half-7`] = useCssVars ? 'var(--golden-ratio-half-7)' : base.grHalf7;
  golden[`${grPrefix}half-8`] = useCssVars ? 'var(--golden-ratio-half-8)' : base.grHalf8;
  golden[`${grPrefix}half-9`] = useCssVars ? 'var(--golden-ratio-half-9)' : base.grHalf9;
  golden[`${grPrefix}half-10`] = useCssVars ? 'var(--golden-ratio-half-10)' : base.grHalf10;
  golden[`${grPrefix}half-11`] = useCssVars ? 'var(--golden-ratio-half-11)' : base.grHalf11;

  golden[`${grPrefix}double-1`] = useCssVars ? 'var(--golden-ratio-double-1)' : base.grDouble1;
  golden[`${grPrefix}double-2`] = useCssVars ? 'var(--golden-ratio-double-2)' : base.grDouble2;
  golden[`${grPrefix}double-3`] = useCssVars ? 'var(--golden-ratio-double-3)' : base.grDouble3;
  golden[`${grPrefix}double-4`] = useCssVars ? 'var(--golden-ratio-double-4)' : base.grDouble4;
  golden[`${grPrefix}double-5`] = useCssVars ? 'var(--golden-ratio-double-5)' : base.grDouble5;
  golden[`${grPrefix}double-6`] = useCssVars ? 'var(--golden-ratio-double-6)' : base.grDouble6;
  golden[`${grPrefix}double-7`] = useCssVars ? 'var(--golden-ratio-double-7)' : base.grDouble7;
  golden[`${grPrefix}double-8`] = useCssVars ? 'var(--golden-ratio-double-8)' : base.grDouble8;
  golden[`${grPrefix}double-9`] = useCssVars ? 'var(--golden-ratio-double-9)' : base.grDouble9;
  golden[`${grPrefix}double-10`] = useCssVars ? 'var(--golden-ratio-double-10)' : base.grDouble10;
  golden[`${grPrefix}double-11`] = useCssVars ? 'var(--golden-ratio-double-11)' : base.grDouble11;

  return golden;
}

const config = {
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

  spacing: (theme) => {
    const prefix = theme('goldenRatio.prefix', false);
    const grPrefix = prefix ? (prefix === true ? 'gr-' : prefix) : '';
    const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
    const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));
    const useCssVars = theme('goldenRatio.useCssVars', true);
    const golden = getGolden(grPrefix, spacerBase, spacerUnit, useCssVars);

    return {
      ...golden,
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
    };
  },

  borderWidth: (theme) => {
    const prefix = theme('goldenRatio.prefix', false);
    const grPrefix = prefix ? (prefix === true ? 'gr-' : prefix) : '';
    const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
    const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));
    const useCssVars = theme('goldenRatio.useCssVars', true);
    const golden = getGolden(grPrefix, spacerBase, spacerUnit, useCssVars);

    return {
      ...golden,
    };
  },

  lineHeight: (theme) => {
    const prefix = theme('goldenRatio.prefix', false);
    const grPrefix = prefix ? (prefix === true ? 'gr-' : prefix) : '';
    const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
    const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));
    const useCssVars = theme('goldenRatio.useCssVars', true);
    const golden = getGolden(grPrefix, spacerBase, spacerUnit, useCssVars);

    return {
      ...golden,
    };
  },
};

module.exports = plugin(
  function ({ addComponents, theme }) {
    const prefix = theme('goldenRatio.prefix', false);
    const grPrefix = prefix ? (prefix === true ? 'gr-' : prefix) : '';
    const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
    const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));
    const useCssVars = theme('goldenRatio.useCssVars', true);
    const golden = getGolden(grPrefix, spacerBase, spacerUnit, useCssVars);

    addComponents({
      ':root': {
        '--gr': `${gr}`,
        '--golden-ratio': gr,
        '--golden-ratio-base': `${spacerBase}`,
        '--golden-ratio-unit': `1${spacerUnit}`,
        '--golden-ratio-1': golden.gr1,
        '--golden-ratio-2': golden.gr2,
        '--golden-ratio-3': golden.gr3,
        '--golden-ratio-4': golden.gr4,
        '--golden-ratio-5': golden.gr5,
        '--golden-ratio-6': golden.gr6,
        '--golden-ratio-7': golden.gr7,
        '--golden-ratio-8': golden.gr8,
        '--golden-ratio-9': golden.gr9,
        '--golden-ratio-10': golden.gr10,
        '--golden-ratio-11': golden.gr11,
        '--golden-ratio-half-1': golden.grHalf1,
        '--golden-ratio-half-2': golden.grHalf2,
        '--golden-ratio-half-3': golden.grHalf3,
        '--golden-ratio-half-4': golden.grHalf4,
        '--golden-ratio-half-5': golden.grHalf5,
        '--golden-ratio-half-6': golden.grHalf6,
        '--golden-ratio-half-7': golden.grHalf7,
        '--golden-ratio-half-8': golden.grHalf8,
        '--golden-ratio-half-9': golden.grHalf9,
        '--golden-ratio-half-10': golden.grHalf10,
        '--golden-ratio-half-11': golden.grHalf11,
        '--golden-ratio-double-1': golden.grDouble1,
        '--golden-ratio-double-2': golden.grDouble2,
        '--golden-ratio-double-3': golden.grDouble3,
        '--golden-ratio-double-4': golden.grDouble4,
        '--golden-ratio-double-5': golden.grDouble5,
        '--golden-ratio-double-6': golden.grDouble6,
        '--golden-ratio-double-7': golden.grDouble7,
        '--golden-ratio-double-8': golden.grDouble8,
        '--golden-ratio-double-9': golden.grDouble9,
        '--golden-ratio-double-10': golden.grDouble10,
        '--golden-ratio-double-11': golden.grDouble11,
      },
    });
  },
  {
    theme: {
      extend: {
        ...config,
      },
    },
  },
);
