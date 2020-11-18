"use strict";

// alert('hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(typeof(answer));

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамиля?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);