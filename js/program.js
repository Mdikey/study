"use strict"; // перевод на новый формат 

const numberOFilms = (prompt('Сколько фильмов вы уже посмотрели', ''));


const personalMovied = {
    count: numberOFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = (prompt('Один из последниз просмторенных фильмов', '')),
      b = (prompt('На сколько вы его оцените?', '')),
      c = (prompt('Один из последниз просмторенных фильмов', '')),
      d = (prompt('На сколько вы его оцените?', ''));

personalMovied.movies[a]=b;
personalMovied.movies[c]=d;


console.log(personalMovied);