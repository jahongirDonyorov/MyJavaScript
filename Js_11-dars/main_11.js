 'use strict'
 /********&&&&&&&&&&&££££££££££££############## har hil hodisalarni yaratish  ##################£££££££££££££&&&&&&&&&&********/

 let wrapper = document.querySelector('.wrapper');
 let btn = wrapper.querySelector("[data-currentBtn='1']");//data atrebutni ulash wrapperni ichidagi
 let a = document.querySelector(".a");

//  btn.addEventListener( 'click', () => {
//   console.log('hi nice too mit you');
//  },
//  {once:true}//uchinchi opsiya once true bulganliki sababli bir marta bosiladi faqat bu uncha kup ishlatilmaydi
//  )

// console.log(document.body);//bunda body
// console.log(document.head);//bunda head
// console.log(document.documentElement);//bunda btun html chiqadi

// chileNods  html struktura  arry dan iborat
// console.log(document.childNodes);
// //                        bodyning ichidagi childNodesni znacheniyasi  1 chisini chiqar
// console.log(document.body.firstChild);

// console.log(document.body.firstElementChild);//bunda elemintni chiqaradi

// console.log(document.body.lastElementChild);//bunda ohirgi element

// console.log(a.parentNode);//ona elemintni olvolish uchun kerak buladi
// console.log(a.parentElement);//ona faqat elemintni olvolish uchun kerak buladi bag bulib qolsa wu holat yaxwi
// console.log(btn.nextSibling);//kiyingi node
// console.log(btn.nextElementSibling);//kiyingi elemnt

// for(let i of document.body.childNodes){
//   if(i.nodeName == '#text'){
//     continue;
//   }
//   console.log(i)
// };

//har bir kinopkaga nomer borderRightStyle: 

let btns = document.querySelectorAll('button');

btns.forEach((btn,index) => {
  btn.addEventListener('click', () => {
    console.log('hii' + index);
  })
})