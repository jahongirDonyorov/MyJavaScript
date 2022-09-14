// 'use strict'
// /********&&&&&&&&&&&££££££££££££############## Massiv ##################£££££££££££££&&&&&&&&&&********/
// //massiv 1yul

// // const arr = newArry('1,2,3')//massivning eng kam ishatiladigan usuli

// //massiv 2 yul

// // const arr = [1,2,3]; //ommobob usuli

// // arr.unshift(0);//boshiga quwadi
// // arr.shift();//boshidan ob tashlaydi
// // console.log(arr);

// //mithod 1 massivga quwiw va olib tashlash

// // arr.pop();//pop methoddi massivni ohiridan olib tashlaydi
// // arr.push(5);//push methoddi massivga quwib beradi
// // console.log(arr);

// //---------------------------------
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// //   // console.log('jahon' + arr[i]);
// // }//urtacha ishlatiladi


// // for (let val of arr){
// //   console.log(arr); //masivni uzini qaytarib beradi
// // }

// // for (let key of arr){
// //   console.log(key);//ichidagilarni qaytaradi
// // }//for of kam ishlatiladi

// //---------------- forEach functionni 
// // let colors = ['red', 'black', 'crimson'];


// // colors.forEach(function (item, index, arr){//forEach functionnining 1-argumenti ichidagilar 2-indexsi 3-massifning uzi     
// //   console.log(item ,index,arr);
// // });//bu kupishlatiladi


// //===========================

// // const questions = prompt('', '');//'' mavzu 2-''ichi

// // const answers = questions.split(',');//split promtga yozilgan narsani massiv holatiga ugirib beradi

// // console.log(answers.join('; '));// JOIN MASSIVNI STRING QILADI

// // console.log(answers );


// //============================

// // let number = [2, 10, 17, 24, 8];

// // number.sort();// massivni sartirofka qilib beradi 1 lik sonlar birinchi 110 bulsaham ohirida
// // console.log(number);


// // function sortArr(a, b){
// //   return a - b;
// // }





// /********&&&&&&&&&&&££££££££££££############## obyekt 21-dars ##################£££££££££££££&&&&&&&&&&********/
// //==================obyektlarni kaperofka qilish


// let a = 8,
// b = a;

// console.log(b + 5);
// console.log(a);



// const bwm = {
//   color:'black',
//   isBuy:false,
// };

// const mers = bwm;
// mers.color = 'white';//obyekt kaperofka bulmadi ikkalasiham white buldi

// console.log(mers);
// console.log(bwm);


// function copyObj(obj){
//   let objCopy = {};
//   for (let key in obj){
//     objCopy[key] = obj[key];
//   }
//   return objCopy;
// };

// const nexiaR3 = {
//   color: 'black',
//   isBuy:false,
//   shum:{
//     a:100,
//     b:200,
//   }
// };

// const spark = copyObj(nexiaR3);
// spark.color = 'white'//uzgarish bulyapd objek coperofka buldi vaqat spark uzgardi
// spark.shum.a = 300;//qilsak bu uzgarmayapdi chunki shum ichgi bukyapdi
// console.log(spark);
// console.log(nexiaR3);



// //caperocka 2- usul Obj assign

// const nexia2 = {
//   color: 'red',
//   isBuy: true,
// };

// // obj quwiw
// const extra = {
//   shum:100,
// };
// console.log(Object.assign(nexia2,extra));//quwiw uchun

// const newCar = Object.assign({}, nexia2);
// newCar.isBuy = false;
// console.log(newCar);
// console.log(nexia2);

// //================= Arry caperofka

// const arr = [1, 2, 3, 4];
// const newArr = arr.slice();

// newArr[1] = 22;//2 keyni 22ga uzgartirdik

// console.log(arr);
// console.log(newArr);


//=================sprit operatorlar ...t


const cars = ['bmw', 'mers', 'wolksvagen'],
plane = ['German', 'UzbAirways','Turkish'],
technology = [...cars, ...plane, 'matiz'];//ikkita massivni quwiw ... nuqta massiv nomi

console.log(technology);

function number(a, b, ...c ){ // ...c sprit operator
console.log(a, b, c);
};
//      a  b  3 dan bowlab ohirigacha c sprit operator oladi  M: 1 2 [3, 4, 5, 6, 7, 8]
number (1, 2, 3, 4, 5, 6, 7, 8);

function func(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
};
const number = [1,2,3,4];//4 ciqmedi nmaga deganda funcda 4 ta harf yuq 3 gacha chiqadi
func(...number);//number bilan funcni uzoro birlashtirdi 1 = a ga 2 = b va 3 = c ga



 /********&&&&&&&&&&&££££££££££££############## ORP (obektga yunaltirilgan dasturlash) ##################£££££££££££££&&&&&&&&&&********/
// orp dasturlashni obektlar yordamida tashkil qilish usuli

let cars = {
  color:'white',
  isBuy:false,
  isArmor:function (){
    console.log('Armor does not have');
  },
};

let nexia = Object.create(cars);//nexiani carsga tenglash
// console.log()//bush obyekt yarattik
console.log(nexia.isBuy)//carsni cluchi bungaham utti 

let bmw = {
  color:'red',
};

bmw.__proto__ = cars; //ulas tenglash
bmw.isArmor();//carsda yozilgan bulsaham bmw da ishlatilayapdi 
console.log(bmw.isBuy);


