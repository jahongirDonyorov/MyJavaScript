"use strict"
// context this - bu har doim nimagadur e'rgashadi yani yopishib oladi
//context this ni 4 xil usulda functionlarga bog'lash mumkun

//== 1 - usul: Oddiy functionlarda this = window ga , 'use strict' = undefinet

// function showThis(a, b) {
//   console.log(this);//undefinet
//   function calc() {
//     console.log(this);//undefinet
//     return a + b;
//   }
//   console.log(calc());
// }
// showThis()

//------------------------------------------------------------------------------------------------------------------
// 2-usul Context this objectlarda = object  
// const obj = {
//   a:8,
//   b:10,
//   calc: function (){
//     console.log(this.a + this.b);// bu holatda this object bulyapdi
//   },
// }
// obj.calc();

//-------------------------------------------------------------------------------------------------------------------
// 3-usul: Context this Construktorlarda va Classlarda = yangi object copy
// function Car(name, color){
//   this.name = name;
//   this.color = color;
//   this.hi = function () {
//     console.log('hi');
//   }
// }
// const mers = new Car( 'Mers', 'black');
// console.log(mers);
// mers.hi();
//--------------------------------------------------------------------------------------------------------------------
// 4-usul: Context this qo'l yordamida ergashtisrish
// function hello (surname) {
//   console.log(this);
//   console.log(this.name + "" + surname);
// };
// hello.call(persone, "badriddinov");//1-usul
// hello.apply(persone, ["badriddinov"]);//2-usul 
// //this ga qulbola qiymat berish
// function call(num) {
//   return this * num;
// }
// const double = calc.bind(2);//this ga quwib beradi 
// console.log(double (40))

//--------------------------------------------------------------------------------------------------------------------
//------------------------------------------------ vedio dars 40 this ------------------------------------------------

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   this.style.background = 'red'  //tis == event.targetga   
// });

// const obj = {
//   num:8,
//   satNUmber: function () {
//     const say = () => {
//       console.log(this.num);
//     };
//     say();
//   },
// };
// obj.satNUmber();

















//1-usul: qattiy rejim 'use strict' qullamasak oddiy usulda this windowga teng buladi qullasak undefined ga teng


"use strict"//bulsa undefined beradi bu qattiq rejim

// function show(a, b){
//   console.log(this); // undefined
//   function calc(){
//     console.log(this);//undefined function ichidan function caqirsakham undefined buladi
//     return a + b;
//   }
//   console.log(calc());
// }
// show(4, 4)
//-------------------------------------------------------------------------------
//2-usul: Context this objectlarda = object gateng
// const obj = {
//   a:8,
//   b: 9,
//   calc: function (){
//     console.log(this.a + this.b)// bu (obj.a + obj.b) ga teng ikkalasidaham bitta narsa chiqadi
//   },
// };
// obj.calc();

//-------------------------------------------------------------------------------

// function Car (name , color) {
//   this.name = name,
//   this.color = color;
//   this.hi = function(){
//      console.log('hi');
//   };
// }
// const mers = new Car ('Mers', 'black');
// console.log(mers);
// mers.hi()

//-------------------------------------------------------------------------------
//4-usul this ni qulbola ulash
// function hello (surname) {
//   console.log(this);
//   console.log(this.name + ' ' + surname)
// }
// const persone = {
//   name : 'Jahongir',
// };
// hello.call(persone, 'Donyorov');//persone obj ni qulbola usulda thisga bog'ladik
// hello.apply(persone, ['Donyorov']);// nu ham wu ishni bajaradi

//call da argument chaqiryorganimizda "" ni ichiga yozamiz  apply da esa [''] bunga yozamiz
// function calc(num) {
//   return this * num;
// }
// const double = calc.bind(2);//bind 2 ga kupaytrib beradi

// console.log(double(3));
// console.log(double(30));

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  this.style.background = 'crimson'// this  e.targetga teng bu holatta
});


btn.addEventListener('click', (e) => {
 e.target.style.background = 'crimson';
})


// const obj = {
//   num: 8,
//   sayNumber: function () {
//     const say = () => {//caalbek functionda this undan oldingi elementga yopiwib oladi qolgan function da chaqirilsa undefined chiqadi
//       console.log(this);
//     };
//     say();   
//   },
// };
// obj.sayNumber();