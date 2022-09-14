'use strict'

class Car { // class nomi har doim katta harif bilan yoziladi
  constructor(name, color, startSpeed, maxSpeed) {
    this.name = name;
    this.color = color;
    this.startSpeed = startSpeed;
    this.maxSpeed = maxSpeed;
  }
  globalSpeedCar() {
    return this.startSpeed + this.maxSpeed;//quwadi
  }
  slowspeet() {
   return this.maxSpeed - this.startSpeed;//ayiradi
  }
}

class truck extends Car{//truck extends Car cardagi qiymatlar bungaham utadi huddi na elementday buladi car
  constructor(name, color, startSpeed, maxSpeed, weight){
    super (name, color, startSpeed, maxSpeed);//super ona clasdagi parametirlarni olib olmoqchi bulsak superdan foydalanamiz 7 8 - qatordagi narsalarni yan qaytadan yozmaslik uchun
    this.weight = weight;
  }
  showMyProps() {
    console.log('Weight ' + this.weight);
  }
}
const man = new truck( 'man', 'black', 50, 150, 40);
man.showMyProps();
console.log(man.globalSpeedCar())
console.log(man.slowspeet());

// const bmw = new Car('bmw', 'red', 100, 300);
// const mers = new Car('mers', 'red', 80, 250);

// console.log(bmw.slowspeet());
// console.log(mers.slowspeet());




//************************************************** rest operatorlar
// function MySkills(lang, cms, ...rest){
//   console.log(lang, cms, rest);
//   rest.forEach((item, i) => {
//     console.log(`Extra skillis ${i + 1} ${item}`);
//   });
// }
// MySkills('JavaScript', 'Wordpress', 'Python, PHP, Drupal');

//************************************************** default value
//  function calcc(a,b = 2){// yangi va ommobob usul
//   //  b = b || 2; // b bulsa bini chiqaradi bulmasa autamatiske 2 ni quyadi eski usul
//    console.log(a + b)
//  };
//  calcc(1)


//******************************************************* mustahkamlash

const root = document.querySelector('.root');

function div (...classes) {
  const elem = document.querySelector('div');
  classes.forEach((classItem) => {
    elem.classList.add(classItem);
  });
  root.append(elem);
}
div('width', 'height', 'bg');