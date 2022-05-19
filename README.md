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
      prefix: true,  
      // Boolean or String is acceptable (eg. 'golden-ratio-' would make it mt-golden-ratio-2);
      // true is equivilent to using string 'gr-' so you can use classes like mt-gr-2; 
      // The default is false
    },
    
    // ...
  },

  plugins: [
    require('tailwindcss-golden-ratio'), 
  ],

  // ...
}
```
