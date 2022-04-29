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

// git clone сделать копию
// git add -a *html добавить 
// git status 
// git commin -a -m"сообщение" отправить в гит
// git pull обновление 
// git push 
// :qw! слияние??
// git ignor
// git kraken - програ для удобног опросмотра гитов 

// ssh сетефой проторок для удоленного управления операционными системами
// и передачей файлов по ключам 
// + удобсвтво в использовании, безопасность сильнее, простота подключения 
// после первой настройки, при потере секретного ключа доступ на аккаунт 
// не будет у воришек
// - настройка, блокировка брундмауером


//  let incr = 10,
//      decr = 10;

//     //  Постфиксная форма записи
// incr++;
// decr--;

// // Префиксная форма записи
// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// // console.log(5%2); // остаток от деления 
// // console.log(2*4 == 8); // Сравннивание ==, === Строгое сравнение, && и, || или
// // console.log(2*4 !== 8); // не равно 

// // const isChecled = true;
// //       isClose = false;

// // console.log(isChecled && isClose); // и
// // console.log(isChecled || isClose); // или
// // console.log(isChecled || !isClose); // отрицание 

// // if (4 == 9){
// //     console.log ('ok!');
// // }
// // else{
// // console.log ('error!');
// // }

// // const num = 50;
// //  if (num <49){
// //      console.log('error');
// //  }else if (num > 100){
// //     console.log('Много');
// //  }else {
// //     console.log('ok!');
// //  }

// // //  тернарный оператор так называется потому что присутствуют 3 эл
// //  (num === 50) ? console.log ('ok!') : console.log ('error');

// //  switch
// // const num = 51;
// // switch (num){
// //     case 49:
// //         console.log ('неверно');
// //         break;
// //     case 100:
// //         console.log ('неверно');
// //         break;
// //     case 100:
// //         console.log ('неверно');
// //         break;
// //     case 50:
// //         console.log ('В точку!');
// //         break;
// //     default:
// //         console.log('Не в этот раз');
// //         break;
// // }

// const burger = 2;
// const fries = 1;
// const cola = 0;

// if (burger === 3 && fries){
//     console.log('Мы сыты');
// }else {
//     console.log('Мы уходим');
// }

// if (burger === 3 || fries || cola){
//     console.log('Мы сыты');
// }else {
//     console.log('Мы уходим');
// }

//breake, continue прекращение 
// console.log(!1);

// // false = 0, '', null, undefinde, not a number сущности
// // && возвращает первое ложное значение, последнее правдивое
// // || возвращает первое правдивое значение,последнее ложное

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

// let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num < 55);

// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// }

//мой кастлявый метод 
// let arr = [];

// for (let i = 0; i < 6; i++){
//         arr[i]= '*';
//         document.write(arr);
// }

// метод с урока 
// let res = '';
// const length = 7;

// for (let i = 0; i < length; i++) {
//      for (let j = 0; j < i; j++) {
//         res += "*";
//      }
//      res += '\n';
// }
// console.log (res);

// // метка
//  first: for (let i = 0; i < 3; i++) {
//     console.log(`Первый уровень: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Второй уровень:${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Третий уровень:${k}`);
//         }
//     }
// }

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// let a = 21;
// for (let i = 0; i < 10; i++ ) {
//     if (a === 13){
//         break;
//     }else {
//         a -=1;
//         console.log(a);  
//     }
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let num = 2;
// while (num < 16){
//     if (num % 2 != 0) {
//         console.log(num);
//     } 
//     num ++;
// }


// for (let i = 2; i <= 11; i++) {
//     if (i % 2 != 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }  

let array = [];
for (let i = 5; i <= 10; i++) {
    array[i]=i;
}
console.log(array)