"use strict";



// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
// }

// start();



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    start: function() {        
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }    
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (30 > personalMovieDB.count > 10) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    // showMyDB: function(hidden) {
    //     if (!hidden) {
    //         console.log(personalMovieDB);
    //     }
    // },
    showMyDB: function() {
        if (personalMovieDB.privat != true) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        let num = 0;
        while (num < 3) {
            let a = prompt(`Ваш любимый жанр под номером ${num + 1}`);
            if (a != null && a != '') {
                personalMovieDB.genres[num] = a;
                num++;
            } else {
                console.log('Вы ввели некорректные данные');
                continue;
            }
        }
        personalMovieDB.genres.forEach((item, i,) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);            
        });           
    }    
};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB();




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
//         if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }    
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10){
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (30 > personalMovieDB.count > 10) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     let num = 0;
//     while (num < 3) {
//         let a = prompt(`Ваш любимый жанр под номером ${num + 1}`);
//         personalMovieDB.genres[num] = a;
//         num++;
//     }
// }

// writeYourGenres();