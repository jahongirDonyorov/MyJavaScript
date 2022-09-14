'use strict'
/********&&&&&&&&&&&££££££££££££############## function ##################£££££££££££££&&&&&&&&&&********/

  function getText(){
    console.log('Hello world');
  }
  getText();//functionni chaqirisht


  //calc function
  //function  decloration birinchi function kiyin nom bunda functionni uzidan tepada chaqirib buladi

  console.log(calc(33 , 55));
  console.log(calc(3 , 55));

  function calc (a , b){
    return a + b;
  }

  console.log(calc(4 , 555));
  console.log(calc(93 , 90));

  //return bilan ishlash
   function returnNumber(){
     let number = 8;
     return number;
   }
   const num  = returnNumber();
   console.log(num);
   

   //function expression birinchi nomi  kiyin function bunda functionni uzidan tepada chaqirib bulmaydi
   let funcExpr = function () {
     console.log(90);
   };
   funcExpr();

   //array function () =>

   const arrayFunction = (a, d) => a + d;
  // const arrayFunction = (a, d) => {
  //   return a + b
  // }; // kuproq narsa bu shu holatta yoziladi


   const plus = arrayFunction(10, 19);
   console.log(plus)


/********&&&&&&&&&&&££££££££££££############## callback function ##################£££££££££££££&&&&&&&&&&********/
//function dan kiyin ishlaydigan function

function playFoodball(Jonh, callback){
  console.log(`name of player ${Jonh}`);
  callback();
};
playFoodball('Mosaloh', function(){
  console.log('His shot 100 goals');
})

//bunday qilsakham wu narsa chiqadi

function playFoodball(Jonh, callback){
  console.log(`name of player ${Jonh}`);
  callback();
};
function google(){
console.log('His shot 100 goals')
}
playFoodball('Mosaloh', google );

/********&&&&&&&&&&&££££££££££££############## harhircha hsusiyatlar ##################£££££££££££££&&&&&&&&&&********/
//suzda nechta harf borligini aniqlatdigan formula

let text = 'hello WORLD';

// console.log(text.length);//uzunlikni kursatadi
// console.log(text[3])//3 harfni chiqaradi 0 1 2 3
// console.log(text[0] = 'm');
// console.log(text.toLocaleLowerCase());//kichik harflar
// console.log(text.toUpperCase());//katta harflar
// console.log(text.indexOf('W'));//qayardan boshlangani  w 6dan boshlangan
// console.log(text.slice(6, 11));//kesib beradi -holatiyam bor  teskari sanaydi uu
// console.log(text.substring(4));//buham kesadi bunda menus utmaydi 


const number = 8.8;
console.log(Math.round(number));//butun son qilib beradi  2.2 = 2 ga 2.6 = 3 ga

const border = '12px';
console.log(parseInt(border));//stringni number qilib beradi