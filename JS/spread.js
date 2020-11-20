"use strict";

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылку

// copy.a = 10;

// console.log(copy);

// function copy (mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

// поверхностные копии, которые создают ссылку на объкт внутри. Работает только
// на переменных 1ого уровня

const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));
clone.d = 20;

console.log(add);
console.log(clone);