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

// Функции
// виды функий function declaration, expression, стрелочная 
// function declaration существует до запуска кода 
function show (){
    console.log ("Hello");
}
show();
// expression создается тогда когда до нее доходит код
const per = function(){
    console.log("hello");
};
per();
// стрелочная 
const calc = (a, b) => {return a + b};

// Конвертер тип 
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr){
   return curr * amount;
}

function promoshion(result) {
    console.log(result * discount);
}

promoshion(convert(500, usdCurr));

// Методы и свойства 
const test = "12px";
console.log(parseInt(test));
console.log(parseFloat(test));
