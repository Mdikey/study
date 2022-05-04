"use strict"; // перевод на новый формат 

const arr = [3, 5, 8, 16, 20, 23, 50];
const result2 = [];

for (let i = 0; i < arr.length; i++) {
   result[i] = arr[i];
 }  
 console.log(result);

//  Номер два

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number'){
        data[i]=data[i]*2;
    }else {
        data[i]=data[i] + ' - done';
    }
   
  }  
  console.log(data);

//   Номер 3

const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];
let num = data1.length -1;

for (let i = 0; i < data1.length; i++) {
    result1[num]=data1[i];
    num -= 1;
  }  
  console.log(result1);

//   Номер 4


let res = '';
const length = 5;
const star ="*";

for (let i = 0; i <= length; i++) {
     for (let j = 0; j <= i; j++) {
        res += star.repeat(2);
     }
     res += '\n';
}
console.log (res);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log (result);

// Номер 5
function sayHello(firstname){
    console.log("Привет," + ' ' + firstname + '!');
}

sayHello('Антон');

// Номер 6
function returnNeighboringNumbers(num) {
    let arr=[];
    arr[0] = num - 1;
    arr[1] = num;
    arr[2] = num + 1;
    console.log(arr);
}
re
returnNeighboringNumbers(5);

// Номер 7

function getMathResult(a, b) {
    if(typeof(a) === 'number' && typeof(b) === 'number')
    {
        let res = a;
        for (let i = 1; i < b; i++) {
            res += '---' + a * (i + 1);
        }
        console.log(res);
    }else {
        console.log (a);
    }
}

getMathResult(20, -5);