 'use strict'
//  Date

// const data = new Date();
// console.log(data.getHours())//getHours() buni harhilcha turlari mavjud sana yil oy kun va hokozo 
// console.log(data.getMilliseconds())// javaScript hamma narsani miillisecunt bilan ulchaydi 


//qancha ishlaganinin kursadadigan kod

// const data = new Date();
// console.log(startDate.getTime());

// for (let i = 0; i <  100000; i++){
//   let a = i ** 3;
// }

// const endDate = new Date();
// console.log(endDate.getTime());

// alert(`tsikl $ {endDate - startDate} millisekunt ishladi`)





// ================================================= 2 - mavzu window
const box = document.querySelector('.box'),
btn = document.querySelector('button')

//=============== client elementni polni olyapdi bu uchidan bu uchigacha ulchayapdi  

// const width = box.clientWidth;
// const height = box.clientHeight;

// offset bu elementni faqat ichgi qismini olyapdi

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// scroll contentni buyiga kurinmay turgan scroll holatta kurinadigan elementlariinah ulchaydi

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height)

// btn.addEventListener('click', () => {
//   // box.style.height = box.scrollHeight + 'px';
//   console.log(box.scrollTop);

//   if (box.scrollTop > 20){
//     console.log('Hi')
//   }
// })
//scrollTop tepadan qancha pasga tushganini aniqlab beradi






//================================================== 3 - mavzu Function construktorlar har doim bosh harfi katta buladi

// const func = new Function(2);
// console.log(func)

function Car(name, color, airBag) {
  this.name = name;
  this.color = color;
  this.airBag = airBag;
  this.isBuy = false;
  this.speed = function (){
    console.log(`${this.name} hos 100km/n`)
  }
}

Car.prototype.town = function () {
  console.log('NEw York')
}

const merc = new Car('Merc','black', true);
const bmw = new Car('BMW','red', false);

merc.speed();
bmw.speed();
merc.town();

console.log(mers);
console.log(bmw);