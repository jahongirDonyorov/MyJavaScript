'use strict';

const number = 8; //data-type = number
const firstName = "9,salom"; //data-type = string
const bool = false; //dat-type = boolean  false,true

//console.log(a); //data-type = null 

let lestName;
console.log(lestName) //undefined

//numbirga qaytamiz
console.log(4 / 0); //infinityu
console.log(-4 / 0); //-infinityu
console.log("jahon" * 10) // Not a number = Son emas

// Bitta uvgaruvchiga kup malumot kirgizish
const person = {
  firstName: 'Jahon',
  lestName: 'Donyorov',
  age: 17,
  job:'front-end junior developer',
  isMared: false,
};
console.log(person.age.lestName)
//console.log(person.age.lestName) // bu holatta undefined#

//Arry (Massiv)
//              1        2      3       4
const arry = ['salom', 'red' , 99 , ['arry 2'] ];
console.log(arry[1 ]);