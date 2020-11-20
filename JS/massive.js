"use strict";

const arr = [1, 20, 13, 3, 6, 8];
console.log(arr.sort(compareNum));

function compareNum(a, b) {
    return a - b
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let z; z < arr.length; z++) {
//     console.log(arr[z]);
// }

// for (let i of arr) {
//     console.log(i);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));



