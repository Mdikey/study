// первый символ не модет быть цифрой /
// название переменных не может быть зарезвированной 
// Константу перезаписать нельзя
// can I use проверка поддержки браузеров 

// CamelCase - первоеСловоМаленькое
// PascalCase
// snake_case
// UPPER_SNAKE_CASE пример COLOR_RED не изменять _apiBase
// Kebab-case

"use strict"; // перевод на новый формат 

let number = 4.6;
console.log('string'*9);

const person = "Jeny";

// const bool = true,false;

// null - чего-то не существует 
// andefinde - существует но там ничего нет
// object 
const obj = {
  name: "Jeny",
  age: 24,
  isMarried: false
};
// console.log(obj.name);
console.log(obj["name"]);

let arr = ["plum.png", "orenge.png", 6, {}];
console.log(arr[2]);

// разница между обхектами и массивами 
const array = [1, 2, 3];
const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  abc: {
    mass: [{}, {}],
    def: {

    }
  }
}
const b = 'b';

arrObj.b = '123';
arrObj['b'] = '123';

console.log(arrObj['b']); 
console.log(arrObj.b); 
// свойства массива 
 

const objek = {
  'Anna': 500,
  'Vany': 800
};
// свойства объекта

