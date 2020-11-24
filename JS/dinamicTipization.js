"use strict";

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + '')); //string!

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// to number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('hello', '');

// To boolean

// 0, '', null, undefined, NaN;


// 1)
let switcher = null;

if (switcher) {
    console.log();
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4444'));


