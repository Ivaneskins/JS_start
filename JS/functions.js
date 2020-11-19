"use strict";

// function showFirstMessage(text) {
//     console.log('text');
// }
// showFirstMessage('Hello World');

const logg = "Hello World!";

// console.log(logg.slice(6, 11));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11)); // as same as 
console.log(logg.substr(6, 5)); // с какой начать и сколько отрезать

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));