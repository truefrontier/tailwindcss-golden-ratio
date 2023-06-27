# tailwindcss-golden-ratio

### Install

```
npm i -D tailwindcss-golden-ratio
```


### Configure

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
       * example: `m-gr-6` will be `1.5rem`. You have 1-5 for smaller values and 7-11 for larger values
       */
      spacerBase: 1.5,

      /**
       * Use css variables for generated values
       * @type {Boolean}
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
