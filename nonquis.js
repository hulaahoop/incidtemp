// Assuming 'element' is the HTML element you want to measure
const style = window.getComputedStyle(element);
const paddingTop = parseFloat(style.paddingTop); // get padding-top in pixels
const paddingRight = parseFloat(style.paddingRight); // get padding-right in pixels
const paddingBottom = parseFloat(style.paddingBottom); // get padding-bottom in pixels
const paddingLeft = parseFloat(style.paddingLeft); // get padding-left in pixels

// Calculate total padding size
const totalPaddingWidth = paddingLeft + paddingRight;
const totalPaddingHeight = paddingTop + paddingBottom;

console.log(`Total padding width: ${totalPaddingWidth}px`);
console.log(`Total padding height: ${totalPaddingHeight}px`);
