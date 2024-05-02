# tailwindcss-golden-ratio

[https://goldenratio.app](https://goldenratio.app) — built to help devs create better designs by _*[TRUE FRONTIER](https://truefrontierapps.com)*_

This Tailwind plugin introduces a set of utilities based on the Golden Ratio, a mathematical constant that occurs frequently in nature and is believed to be aesthetically pleasing. The plugin aims to simplify and beautify spacing conventions in Tailwind CSS by providing a consistent and visually appealing set of spacing values.

The plugin uses the Golden Ratio to generate a set of Golden Ratio-based spacing values, ranging from tiny to large sizes. These values are then used to create utility classes for various Tailwind properties, such as margin, padding, font-size, and more.

### Resources

- [Spacing Cheatsheet](https://goldenratio.app/#/spacing) 
- [The Golden Grid](https://goldenratio.app/#/grid) for creating grid layouts with the Golden Ratio
- [The Gold Calculator](https://goldenratio.app/#/calculator) for finding what combination of values will be equivalent to another set of values

### How to Install

```
npm i -D tailwindcss-golden-ratio
```

### How to Use

The plugin generates utility classes for the following Tailwind properties:

- spacing (includes margin, padding, and various other spacing-related properties)
- aspectRatio
- backgroundSize
- borderRadius
- borderWidth
- divideWidth
- fontSize
- gap
- height
- inset
- lineHeight
- maxHeight
- maxWidth
- minHeight
- minWidth
- outlineOffset
- outlineWidth
- ringOffsetWidth
- ringWidth
- scale
- scrollMargin
- scrollPadding
- space
- strokeWidth
- translate
- textIndent
- textUnderlineOffset
- width

Each property has utility classes for the 11 main Golden Ratio values, as well as their halves and doubles. Because there are 11 values, this puts 6 in the middle, so 6 is the base unit. By default this base unit is `1.5rem`;


`mt-gr-6` => `margin-top: var(--golden-ratio-6)` => `margin-top: 1.5rem`


Any number lower will lessen this base unit by a factor of 1.61803398875 (the Golden Ratio). Numbers 7-11 increase this base unit by a factor of 1.618...

`mt-gr-5` => `margin-top: var(--golden-ratio-5)` => `margin-top: 0.927051rem` (1.5 / 1.61803)
`mt-gr-4` => `margin-top: var(--golden-ratio-4)` => `margin-top: 0.572949rem` (1.5 / 1.61803 / 1.61803)
...

`mt-gr-7` => `margin-top: var(--golden-ratio-7)` => `margin-top: 2.42705rem` (1.5 * 1.61803)
`mt-gr-8` => `margin-top: var(--golden-ratio-8)` => `margin-top: 3.92705rem` (1.5 * 1.61803 * 1.61803)
...


#### Fixed Units
Sometimes you may need the fixed equivalents for the golden ratios. It comes in handy when making sure resized SVGs don't get cut off and font-sizes don't change if the system accessibility settings try to adjust it.

You can use fixed units when you use the `grf` prefix. By default there are 16px for each spacer unit. 

`mt-grf-6` => `margin-top: var(--golden-ratio-fixed-6)` => `margin-top: 24px` (1.5 * 16)

By default the px value will be rounded, but you can change that under [customization](#how-to-customize)


#### Aspect Ratio
For aspect ratio we set `aspect-gr-6` as the base. So it has `1 / 1` (or a square) `aspect-ratio` value. 

Anything under 6 will become portrait (smaller width):
`aspect-gr-5` => `aspect-ratio: 0.618034 / 1` 

Anything over 6 will become landscape (larger width):
`aspect-gr-7` => `aspect-ratio: 1.618034 / 1` 


### How to Customize

This plugin is highly configurable, allowing you to customize the prefix, unit, rounding behavior, and more.

*tailwind.config.js*
```js
module.exports = {
  // ...

  theme: {
    // ...
    
    goldenRatio: {
      /**
       * Use a prefix instead of overwriting existing spacing utilities
       * @type {Boolean|String}
       * default: true|'gr-'
       * example: 'golden-ratio-' would generate classes like mt-golden-ratio-2);
       */
      prefix: true,

      /**
       * The spacing unit
       * @type {String}
       * default: 'rem'
       */
      spacerUnit: 'rem',

      /**
       * The starting point for spacing
       * @type {Number}
       * default: 1.5
       * 
       * There are 11 spacing values in this system.
       * That puts the 6 value in the middle, so it is the base.
       * Setting the spacerBase to `1.5` will make `m-gr-6` => `margin: 1.5rem`
       * 
       * Values 5-1 get exponentially smaller by the golden-ratio factor. 
       * eg. `m-gr-5` => `margin: 0.927051rem` // value comes from (1.5 / 1.61803)
       * eg. `m-gr-4` => `margin: 0.572949rem` // value comes from (1.5 / 1.61803 / 1.61803)
       * 
       * Values 7-11 get expontially larger by the golden-ratio factor. 
       * eg. `m-gr-7` => `margin: 2.42705rem` // value comes from (1.5 * 1.61803)
       * eg. `m-gr-8` => `margin: 3.92705rem` // value comes from (1.5 * 1.61803 * 1.61803)
       * 
       */
      spacerBase: 1.5,

      /**
       * The unit for fixed spacing
       * @type {String}
       * default: 'px'
       * 
       * This duplicates the golden ratio spacing but fixed.
       * This gives you more control when working with things like:
       *  - system font-size settings for accessiblility
       */
      fixedSpacerUnit: 'px',

      /**
       * How many fixed units are in 1 spacer base unit
       * @type {Number}
       * default: 16
       * 
       * example: `m-grf-6` => `24px` // value comes from (16 * 1.5) where 1.5 is the spacer unit
       */
      fixedUnitsPerSpacerUnit: 16,

      /**
       * Round to the nearest pixel
       * @type {Boolean}
       * default: true
       * 
       * If you want to use the fixed values, you probably don't want partial pixels. 
       * This gives you more control when working with things like:
       *  - not cutting off svgs on certain devices
       */
      roundFixedValues: true,

      /**
       * Use css variables for generated values
       * @type {Boolean}
       * 
       * This is useful if you ever want to use custom calc()
       * eg. -translate-y-[calc(100%+var(--golden-ratio-6))]
       */
      useCssVars: true
    },
    
    // ...
  },

  plugins: [
    require('tailwindcss-golden-ratio'), 
  ],

  // ...
}
```
