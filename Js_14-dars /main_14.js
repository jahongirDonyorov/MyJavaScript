 'use strict'
 /********&&&&&&&&&&&££££££££££££############## conlarni malum bir vahdan kiyin ishga tushurish ##################£££££££££££££&&&&&&&&&&********/
 //setTimeout qndaydir codni qanchadir vahdan kiyin chiqarib  beradi
//  const timer = setTimeout(function(){
//    console.log('Hello word')
//  },2000);// 2 - qiymat nechi sekuntda chiqishi yozoladi

 //argument bilan ishlash
 //bu kam ishlatiladigan holat
//  const timer = setTimeout(function(text){
//   console.log(text)
// },2000,
// 'hello word'//argumrnt qiymati
// );

//addelne functionni quwiw

// function logger(){
//   console.log('Hello word')
// }
// const timer = setTimeout( logger, 2000);//function nomini yozib quwib quyishimiz mumkun

// clearInterval(timer)// olib  tashlaydi

// const btn = document.querySelector('button');
// let timerId,
// i = 0;

// btn.addEventListener('click', () => {
  //setTimeout bir marttalik chiqadi

  // const timer = setTimeout(function () {
  //   console.log('hello word')
  // },2000);

  // setInterval davomiy chiqib  boradi

  // timerId = setInterval(function () {
  //   if(i === 3){//clearInterval i 3 ga teng bulganda ishga tushadi 
  //     clearInterval(timerId)//3 dan kiyin ishlaydi
  //   }

  //   console.log('hello word')
  //   i++;
  //   console.log(i)
  //   }, 1000);
 
// });

// setTimeout========

// let id = setTimeout(function log () {
//   console.log('hello word');
//   id =setTimeout(log, 1000);
// },1000);


//uzim amaliyot box quwiw 

// const  wrapper = document.querySelector('.wrapper');


// btn.addEventListener('click', () =>{
// setInterval(function(){
//   const box = document.createElement('div');
//   box.classList.add('box');
//   wrapper.append(box);
  
// }, 2000)
// })



// const btn = document.querySelector('.crimson');

// function btnAnimation(){
//   const box = document.querySelector('.boxes');
//   let pos = 0;
//   const id = setInterval(animationframe, 100);
//   function animationframe(){
//     if(pos === 300){
//       clearInterval(id);
//     }else{
//       pos++;
//       box.style.left = pos + 'px';
//     }
//     // console.log(`hi ${pos}`);
//   }
// }
// btn.addEventListener('click',btnAnimation)


const btn = document.querySelector('.crimson');

function btnAnimation() {
  const boxes = document.querySelector('.boxes');
  let pos = 0;
  const id = setInterval(animationframe, 10);
  function animationframe(){
    if(pos === 300){
      clearInterval(id);
    }else{
      pos++;
      boxes.style.left = pos + 'px';
      boxes.style.top = pos + 'px';
    }
  }
}

btn.addEventListener('click', btnAnimation);