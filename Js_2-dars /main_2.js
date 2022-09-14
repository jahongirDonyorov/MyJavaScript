'use strict';

// console.log('Hello word');

//alert('hello word');//bildirish noma tepadan chiqadigan

// confirm('siz 18 yoshdamisiz');//ha yoki yoq kinopkali bildirish noma

// const userAge = confirm('siz 18 yoshdamisiz');
//console.log(userAge);//true folse malumot kiritilsa true kiritilmasa folse

// let forstName = prompt('ismongiz nima' ,'');
// console.log(forstName)

// const answers = [];
// answers[0] = prompt('ismingizni kiriting');
// answers[1] = prompt('Familangizni kiriting');
// answers[2] = prompt('Yoshiz nechi');

// console.log(answers)
// document.write(answers)//promtga yozilgan narsalarni web sahifaga ciqaradi web sahifadagi hamma narsa uchib ketadi bu juda kam ishlatiladi...

//const firstName = +prompt('Yoshingiz', '');//plus quysak type number buladi 
// console.log(firstName + 20);



/********&&&&&&&&&&&££££££££££££############## interpalatsiya  ##################£££££££££££££&&&&&&&&&&********/

// const firstName = 'Jahon'
// const age = '17'

//console.log('Mani ismim ' + firstName + ' yoshim ' + age); //birinchi usul bunda cod chuzilib ketishi mumkun#
//console.log(`Mani ismim  ${firstName} va yoshim ${age}`); //bektik (``) blan yoziladigan usul bu unga qaraganda qulayroq

// const xName = prompt("enter you name" , '');
// console.log(`uer's name ${xName}`);

/********&&&&&&&&&&&££££££££££££############## APERATORLAR ##################£££££££££££££&&&&&&&&&&********/

console.log(10 + 2)
console.log(10 - 2)
console.log(10 / 2)
console.log(10 * 2)

//yoki

const x = 50,
      ye = 9,
      ze = 16;

console.log(x + ye - ze)

const num = 4 + "radio";
console.log(typeof num); // numberga srtingni quwsa string

console.log(4 + 'num'); // bir biriga yopishtirib beradi     4radio

//+ kurinishi incremint
let z = 10;
console.log(z++)
console.log(z) // ikkinchi martta chaqirganimizda 1 quwib beryapdi

let y = 10;
console.log(++y); // ikkinchi martta caqirmasakham 1 quwib javobni 11 qilib bermoqda

//- kurinishi decrimint

let z = 10;
console.log(z--)
console.log(z) // ikkinchi martta chaqirganimizda 1 ayirib beryapdi

let y = 10;
console.log(--y); // ikkinchi martta caqirmasakham 1 ayirib javobni 9 qilib bermoqda


// % foiz qoldiqni chiqarib beradi

console.log(5 % 2);

let  q = 20;
let b = 3;
console.log(q % b);

console.log(2 * 3 == 6); // true chiqadi 
console.log(2 * 3 == '6'); // true chiqadi nimaga deganda == bu faqat javob ni kuradi 

console.log(2 * 3 === 6); // true chiqadi 
console.log(2 * 3 ==='6'); // folse chiqadi nimaga deganda === bu hamma narsani tekshiradi 100% ga 100% tug'ri kelish kerak


//&& hamma javob true bulsa true chiqaradi
// 2ta tikka chiziq  bittasi true bulsaham true chiqaradi
//! not folse folse bulsa truega uzgartiradi

let isChecked = true,
isColse =false;

console.log(isChecked && (isColse ))

// 1- promt Hello My Name's Jahongir 
// 2- promt I'm 18 yer's old