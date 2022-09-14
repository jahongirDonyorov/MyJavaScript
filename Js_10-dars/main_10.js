 'use strict'
 /********&&&&&&&&&&&££££££££££££############## har hil hodisalarni yaratish  ##################£££££££££££££&&&&&&&&&&********/
//==========================kam ishlatiladigan onclick usli

 function hi (){
   let uzgar = document.querySelector('.bt');
   uzgar.innerHTML = 'salom dunyo ' ;
   uzgar.style.color = 'red';

   let uzga = document.querySelector('body');
    uzga.style.background = 'blue';
     
  };

//=========================== 2 - usul
let btns = document.querySelector('#btn1');//id bn ulash yuli bu ham uncha kup ishlatilmaydi 2 urinda

btns.onclick = function(){

let uzga = document.querySelector('body');
    uzga.style.background = 'black';
     
}

//=========================== 3 - usul ommobob usul
let btn2 = document.querySelector('#btn2'),
btn3 = document.querySelector('#btn3'),
a = document.querySelector('#a'),
link = document.querySelector('a'),
submit = document.querySelector('#submit'),
div = document.querySelector('.div');


let calbekFunc = (event) => {
  console.log(event.currentTarget);
};

submit.addEventListener('click', calbekFunc);//ichki elemint submitga bossak tawqi elemygayam tasir qilyapdi
   div.addEventListener('click', calbekFunc);



// btn2.addEventListener('click', () =>{//calbek f... ( () => ) bulishi shart 
//   console.log('09')
// });
let index = 0;


 const callFunc = function (){//bu addelni funcsiyaga caqirilyapdi bu holatta htmldagi kuproq narsaga ulash imkoniyati yugiladi
   console.log('hello word');
   index++;
   console.log(index);
   if(index == 2){//bu holatta 2 martadan kiyin ishlamaydi
     btn2.removeEventListener('click', callFunc);//endi bu ishlab pasdagi uchib ketadi
   }
 }
btn2.addEventListener('click', callFunc );
btn3.addEventListener('mouseover', callFunc );

//bitta kinopkaga 2ta hodisa quysakham ishlaydi qoganlarida ishlamaydi



a.addEventListener('click' , (event) => {//event hodisani osonro uzgartirishda ishladilati eventni chaqirganda .narsa yoziladi.
  console.log(event.target);//elemintniconsole da ciqaradi target
});

link.addEventListener('click', (e) => {
  e.preventDefault();//bossa linkkka kirmedigan buldi
  alert('hi')//bossa alert chiqadi 
  console.log(e.target);
})










//=============== inputtan malumot olish
let inpuut = document.querySelector('form input');

inpuut.addEventListener('input', (event) => {
  console.log(event.target.value);
});