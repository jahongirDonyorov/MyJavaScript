 'use strict'
 /********&&&&&&&&&&&££££££££££££############## document eski usul  (jsdan htmlni uzgartirish) ##################£££££££££££££&&&&&&&&&&********/


//  let greeting = document.getElementById('greeting'),//document html fayl getElementById idni chaqirish
//      paragraph = document.getElementsByTagName('p'),//agarta kuplikda tursa massiv qaytaradi getElements s kuplikda quwiladi tepadagi misolda s yuq u birlik
//     wrapper = document.getElementsByClassName('wrapper');

//  greeting.style.color = 'red';//styledagi hamma narsa ishlaydi
//  greeting.style.background = 'black'//html faylni jsda uzgartirish style berish

//  greeting.style.cssText = 'color: red; background: blue;'//textga birdan kuproq buyruq berish 


// greeting.classList.add('cssH1');//htmlga js dan class quwiw add - quwiw
// greeting.classList.remove('cssH1');//htmlga js dan class olish remove - olib tashlaydi

// console.log(greeting);

//  paragraph.style.color = 'red' //bunday qilib style berib bulmaydi bunga chunke bu arry da joylashgan 5 qatorga qaytaradi

//  console.log(paragraph);

//  console.log(wrapper);

 /********&&&&&&&&&&&££££££££££££############## document yangi usul (jsdan htmlni uzgartirish) ##################£££££££££££££&&&&&&&&&&********/


 let wrapper = document.querySelector('.wrapper'),//querySelector bunda tag class id hammasini chaqirsa buladi  bu faqat bitta narsa qaytaradi
     btns = document.querySelectorAll('button');//querySelectorAll bu esa kuproq narsani arry holatta qaytaradi htmlda birdan  kup birhil narsani uzgartirish uchun
     
    //  btns[0].style.background = 'crimson';//bu holattaham style bersa buladi kam ishlatiladi
  // wrapper.classList.add('class_quwildi')

    //           btn birinchi berilgani elent bulardi 2 key 3 arry ning uzi
    btns.forEach(btn => {
      btn.style.background = 'red'
      btn.style.outline = 'none'
    })
 
    //for yordamida
    for(let i = 0; i < btns.length; i++){
      btns[i].style.padding = '10px'
    }



    
 
console.log(wrapper);
console.log(btns);

 /********&&&&&&&&&&&££££££££££££############## element quwiw ##################£££££££££££££&&&&&&&&&&********/

 const peront = document.querySelector('.parent'),
 circle = document.querySelectorAll('.circle');

 const div = document.createElement('div');// createElement yangi elemint yaratadi
 div.classList.add('box');//box degan yangi elemintga class quwdik
//  div.classList.add('circle');//circle degan yangi elemintga class 

 div.style.background = 'blue'//rangini uzgartirish
 circle[0].after(div);//after kiyin chiqsin degani  0 - ilemintdan kiyin chiqsin
 circle[0].before(div);//before oodin chiqsin degani 1 - ilimintdan oldin chiqsin

//  peront.append(div);//appen perontni oxiriga kontentni quwadi

//  peront.prepend(div);//prepend perontni boshiga kontentni eezez


//=============== elemint uchirib tashash

circle[1].remove();//remove uchirish

 console.log(div)
// =======================rezultatni uzgartirish
let news =  document.querySelector('.uzgartir');
//news.innerHTML = 'salom dunyo <p>salom</p>';//html rezultatda turgan narsani uzgartirish 1 - usul taglaram bersa buladi

//news.textContent = 'UzNews'//textContent bunda faqat textni uzgartish mumkun

news.insertAdjacentHTML('afterbegin', '<b>salom</b> ');//1-si qayarda joylashishi 2-si kontent




