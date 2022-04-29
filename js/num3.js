// первый символ не модет быть цифрой /
// название переменных не может быть зарезвированной 
// Константу перезаписать нельзя
// can I use проверка поддержки браузеров 

// CamelCase - первоеСловоМаленькое
// PascalCase
// snake_case
// UPPER_SNAKE_CASE пример COLOR_RED не изменять _apiBase
// Kebab-case

// const bool = true,false;
// null - чего-то не существует 
// andefinde - существует но там ничего нет
// object, array

//+ перед значением делает его числовым КОМПЕТИЛЯЦИЯ
// инкримент дикремент

// отличие прифекснй формы от постфиксной. При прямом
// испульзовании в постфиксной форме выдается настоящее значение 
// а в префисной все работает как нужно

"use strict"; // перевод на новый формат 

// alert ('hello');
// const result = confirm("are you here?");
// console.log(result);
// все информация от пользователя прихзодит в виде строки 

// const answer = prompt("Vam est 18?", "");
// console.log(typeof(answer));\

// const answers = [];

// answers[0]= prompt('kak vashe name', '');
// answers[1]= prompt('kak vasha firstname', '');
// answers[2]= prompt('Skolka vam age', '');

// document.write(answers);
// const category = 'toys';

// console.log(`https://someurl.com/${categiry}`);
// const user = 'ivan';
// alert(`Привет, ${user}`);

 let incr = 10,
     decr = 10;

    //  Постфиксная форма записи
incr++;
decr--;

// Префиксная форма записи
++incr;
--decr;

console.log(incr);
console.log(decr);

console.log(5%2); // остаток от деления 
console.log(2*4 == 8); // Сравннивание ==, === Строгое сравнение, && и, || или
console.log(2*4 !== 8); // не равно 

const isChecled = true;
      isClose = false;

console.log(isChecled && isClose); // и
console.log(isChecled || isClose); // или
console.log(isChecled || !isClose); // отрицание 

