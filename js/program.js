"use strict"; // перевод на новый формат 

let numberOFilms;

function start(){
    numberOFilms = +prompt('Сколько фильмов вы уже посмотрели', ''); 

    while (numberOFilms == '' || numberOFilms == null || isNaN(numberOFilms)) {
        numberOFilms = +prompt('Сколько фильмов вы уже посмотрели', '');  
    }
}
start();

const personalMovied = {
    count: numberOFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = (prompt('Один из последних просмторенных фильмов', '')),
              b = (prompt('На сколько вы его оцените?', ''));
        if ( a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovied.movies[a]=b;
        } else {
            i--;
        }  
    }
}

rememberMyFilms();

function detectPersonalLvl(){
    if (personalMovied.count < 10){
        console.log ('Просмотренно давольно мало фильмов');
    }else if (personalMovied.count >= 10 && personalMovied.count < 30){
        console.log ('Вы классный зритель');
    }else if (personalMovied.count >= 30) {
        console.log ('Вы киноман');
    }else{
        console.log ('Ошибка');
    }
}

detectPersonalLvl();
 
function showMyDB() {
    if (personalMovied.private === false){
        console.log(personalMovied);
    }
}    

showMyDB();

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovied.genres[i - 1] = (prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}
writeYourGenres();


