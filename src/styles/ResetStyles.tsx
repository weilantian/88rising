// Remove and normalize all the default margins and paddings of all the elements.
// Define the style of the texture showing in the website background.
// Added Cardo abd Poppins font to the site

import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,500;0,600;1,500&display=swap');

a, button {
  cursor: none;
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  cursor: none;
  height: 100%;
  background-color: black ;
  color: white ;
  font-family: 'Cardo', serif;
}

.texture-1 {
    width: 100% ;
    height: 100% ;
    opacity: 50% ;
    z-index: -10 ;
    position: fixed ;
    top:0;
    right:0;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
 
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}


`;

export default ResetStyles;
