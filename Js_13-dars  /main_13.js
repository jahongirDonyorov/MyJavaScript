 'use strict'
 /********&&&&&&&&&&&££££££££££££##############  ##################£££££££££££££&&&&&&&&&&********/

// const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);//btns[0] shu elementning nechta classi borligini aniqlaydi (length bulishi shart bunda)

// console.log(btns[0].classList.item(0))//item(0) bu usha elementdagi classni nomini chiqarb beradi
// console.log(btns[0].classList.add('blue'))//add('blue) class quwib beradi
// console.log(btns[0].classList.remove('a'))//remove('a') classni olib  tashlaydi
// console.log(btns[0].classList.toggle('a'));//toggle('a') agarda elementda shu class bulsa yuq qiladi yuq bulsa bor qiladi (quwadi)

//========== toggle ga misol
// btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('blue')){//contains('blue) agarda 2 elementda blue bulmasa if ishga tushadi bulmasa yoq (contains true folse)
  //   btns[1].classList.add('blue');
  // }else{
  //   btns[1].classList.remove('blue')
  // }

  //toggle da qilingan osonroq yuli

//   btns[1].classList.toggle('blue');
// })





//sinov uchun uzim

// btns[0].addEventListener('click', () => {
  // if (!btns[4].classList.contains("toggle")){
  //   btns[4].classList.add('toggle')
  // }else{
  //   btns[4].classList.remove('toggle')
  // }


  //toggle
  // btns[4].classList.toggle('toggle')
// })

//==================================== dikloratsiya 33 vedio dars


const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper');

  wrapper.addEventListener('click', (event) => {
    //birinchi usul

    // if(event.target && event.target.tagName == 'BUTTON'){
    //   console.log('Click')
    // }

    //ikkinchi usul
    //                                       button.crimson bulsa faqat crimson taglilarga ishlidi
    if(event.target && event.target.matches('button')){
      console.log('Click')
    }
;
  });

  const btn = document.createElement('button');
  btn.classList.add('crimson');
  wrapper.append(btn)//yangi devni wrapperga quwib olish

  //forEach da qilinsaberilgan buyruq denametiske quwilgannelementga nisbatan ishlamaydi