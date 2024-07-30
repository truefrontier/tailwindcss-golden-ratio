const plugin = require('tailwindcss/plugin');

const gr = 1.61803398875; // The Golden Ratio

function getGolden(theme) {
  const prefix = theme('goldenRatio.prefix', true);
  const grPrefix = prefix ? (prefix === true ? 'gr-' : prefix) : '';
  const grPercentPrefix = grPrefix ? grPrefix.replace(/-$/, 'p-') : '';
  const grFixedPrefix = grPrefix ? grPrefix.replace(/-$/, 'f-') : '';
  const spacerUnit = theme('goldenRatio.spacerUnit', 'rem');
  const spacerBase = parseFloat(theme('goldenRatio.spacerBase', 1.5));
  const fixedSpacerUnit = theme('goldenRatio.fixedSpacerUnit', 'px');
  const fixedUnitsPerSpacerUnit = theme('goldenRatio.fixedUnitsPerSpacerUnit', 16);
  const roundFixedValues = theme('goldenRatio.roundFixedValues', true);
  const useCssVars = theme('goldenRatio.useCssVars', true);

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
  };

  // Generate half and double values
  for (let i = 1; i <= 11; i++) {
    const val = parseFloat(base[`gr${i}`]);
    base[`grHalf${i}`] = `${val / 2}${spacerUnit}`;
    base[`grDouble${i}`] = `${val * 2}${spacerUnit}`;
  }

  // Create fixed values
  const fixedBase = Object.keys(base).reduce((acc, key) => {
    let val = parseFloat(base[key]) * fixedUnitsPerSpacerUnit;
    if (roundFixedValues) val = Math.round(val);
    acc[key] = `${val}${fixedSpacerUnit}`;
    return acc;
  }, {});

  // Create percent values
  const percentBase = {
    gr1: `${100 / gr / gr / gr / gr / gr}%`, // 0.0901792
    gr2: `${100 / gr / gr / gr / gr}%`, // 0.14591
    gr3: `${100 / gr / gr / gr}%`, // 0.236083
    gr4: `${100 / gr / gr}%`, // 0.381982
    gr5: `${100 / gr}%`, // 0.618047
    gr6: `${100}%`, // 1
    gr7: `${100 * gr}%`, // 1.61803398875
    gr8: `${100 * gr * gr}%`, // 2.61798
    gr9: `${100 * gr * gr * gr}%`, // 4.23589
    gr10: `${100 * gr * gr * gr * gr}%`, // 6.85367
    gr11: `${100 * gr * gr * gr * gr * gr}%`, // 11.0892
  };

  // Generate half and double values
  for (let i = 1; i <= 11; i++) {
    const val = parseFloat(percentBase[`gr${i}`]);
    percentBase[`grHalf${i}`] = `${val / 2}%`;
    percentBase[`grDouble${i}`] = `${val * 2}%`;
  }

  let golden = {
    config: {
      prefix: grPrefix,
      spacerUnit,
      fixedSpacerUnit,
      fixedUnitsPerSpacerUnit,
      roundFixedValues,
      spacerBase,
      useCssVars,
    },
    base,
    fixedBase,
    percentBase,
    spacing: {},
    scale: {},
  };

  // Generate classes
  for (let i = 1; i <= 11; i++) {
    // Dynamic spacing
    golden.spacing[`${grPrefix}${i}`] = useCssVars ? `var(--golden-ratio-${i})` : base[`gr${i}`];
    golden.spacing[`${grPrefix}half-${i}`] = useCssVars ? `var(--golden-ratio-half-${i})` : base[`grHalf${i}`];
    golden.spacing[`${grPrefix}double-${i}`] = useCssVars ? `var(--golden-ratio-double-${i})` : base[`grDouble${i}`];
    // Fixed spacing
    golden.spacing[`${grFixedPrefix}${i}`] = useCssVars ? `var(--golden-ratio-fixed-${i})` : fixedBase[`gr${i}`];
    golden.spacing[`${grFixedPrefix}half-${i}`] = useCssVars ? `var(--golden-ratio-fixed-half-${i})` : fixedBase[`grHalf${i}`];
    golden.spacing[`${grFixedPrefix}double-${i}`] = useCssVars ? `var(--golden-ratio-fixed-double-${i})` : fixedBase[`grDouble${i}`];
    // Percent scale
    golden.scale[`${grPercentPrefix}${i}`] = percentBase[`gr${i}`];
    golden.scale[`${grPercentPrefix}half-${i}`] = percentBase[`grHalf${i}`];
    golden.scale[`${grPercentPrefix}double-${i}`] = percentBase[`grDouble${i}`];
  }

  return golden;
}

module.exports = plugin(
  function ({ addComponents, theme }) {
    const golden = getGolden(theme);

    if (golden.config.useCssVars) {
      let rootVars = {
        '--gr': `${gr}`,
        '--golden-ratio': gr,
        '--golden-ratio-base': `${golden.config.spacerBase}`,
        '--golden-ratio-unit': `1${golden.config.spacerUnit}`,
        '--golden-ratio-fixed-unit': `1${golden.config.fixedSpacerUnit}`,
        '--golden-ratio-fixed-units-per-unit': `${golden.config.fixedUnitsPerSpacerUnit}`,
      };

      for (let i = 1; i <= 11; i++) {
        // Dynamic spacing
        rootVars[`--golden-ratio-${i}`] = golden.base[`gr${i}`];
        rootVars[`--golden-ratio-half-${i}`] = golden.base[`grHalf${i}`];
        rootVars[`--golden-ratio-double-${i}`] = golden.base[`grDouble${i}`];
        // Fixed spacing
        rootVars[`--golden-ratio-fixed-${i}`] = golden.fixedBase[`gr${i}`];
        rootVars[`--golden-ratio-fixed-half-${i}`] = golden.fixedBase[`grHalf${i}`];
        rootVars[`--golden-ratio-fixed-double-${i}`] = golden.fixedBase[`grDouble${i}`];
      }

      addComponents({
        ':root': rootVars,
      });
    }
  },
  {
    theme: {
      extend: {
        spacing: (theme) => {
          const golden = getGolden(theme);
          return {
            ...golden.spacing,
            ...golden.scale,
          };
        },

        aspectRatio: (theme) => {
          const golden = getGolden(theme);
          const aspectBase = {
            gr1: `${1 / gr / gr / gr / gr / gr} / 1`,
            gr2: `${1 / gr / gr / gr / gr} / 1`,
            gr3: `${1 / gr / gr / gr} / 1`,
            gr4: `${1 / gr / gr} / 1`,
            gr5: `${1 / gr} / 1`,
            gr6: '1 / 1',
            gr7: `${1 * gr} / 1`,
            gr8: `${1 * gr * gr} / 1`,
            gr9: `${1 * gr * gr * gr} / 1`,
            gr10: `${1 * gr * gr * gr * gr} / 1`,
            gr11: `${1 * gr * gr * gr * gr * gr} / 1`,
            grHalf1: `${0.5 / gr / gr / gr / gr / gr} / 1`,
            grHalf2: `${0.5 / gr / gr / gr / gr} / 1`,
            grHalf3: `${0.5 / gr / gr / gr} / 1`,
            grHalf4: `${0.5 / gr / gr} / 1`,
            grHalf5: `${0.5 / gr} / 1`,
            grHalf6: '0.5 / 1',
            grHalf7: `${0.5 * gr} / 1`,
            grHalf8: `${0.5 * gr * gr} / 1`,
            grHalf9: `${0.5 * gr * gr * gr} / 1`,
            grHalf10: `${0.5 * gr * gr * gr * gr} / 1`,
            grHalf11: `${0.5 * gr * gr * gr * gr * gr} / 1`,
            grDouble1: `${2 / gr / gr / gr / gr / gr} / 1`,
            grDouble2: `${2 / gr / gr / gr / gr} / 1`,
            grDouble3: `${2 / gr / gr / gr} / 1`,
            grDouble4: `${2 / gr / gr} / 1`,
            grDouble5: `${2 / gr} / 1`,
            grDouble6: '2 / 1',
            grDouble7: `${2 * gr} / 1`,
            grDouble8: `${2 * gr * gr} / 1`,
            grDouble9: `${2 * gr * gr * gr} / 1`,
            grDouble10: `${2 * gr * gr * gr * gr} / 1`,
            grDouble11: `${2 * gr * gr * gr * gr * gr} / 1`,
          };

          let aspectRatio = {};
          for (let i = 1; i <= 11; i++) {
            aspectRatio[`${golden.config.prefix}${i}`] = aspectBase[`gr${i}`];
            aspectRatio[`${golden.config.prefix}half-${i}`] = aspectBase[`grHalf${i}`];
            aspectRatio[`${golden.config.prefix}double-${i}`] = aspectBase[`grDouble${i}`];
          }
          return aspectRatio;
        },

        // backgroundSize: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // borderSpacing: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // borderRadius: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // borderWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // divideWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // fontSize: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // gap: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // height: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // inset: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // lineHeight: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // margin: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // maxHeight: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // maxWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // minHeight: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // minWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // outlineOffset: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // outlineWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // padding: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // ringOffsetWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // ringWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        scale: (theme) => {
          const golden = getGolden(theme);
          return golden.scale;
        },

        // scrollMargin: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // scrollPadding: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // space: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // strokeWidth: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // translate: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // textIndent: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // textUnderlineOffset: (theme) => ({
        //   ...theme('spacing'),
        // }),

        // width: (theme) => ({
        //   ...theme('spacing'),
        // }),
      },
    },
  },
);
