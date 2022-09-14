"use strict";
// loadder
window.addEventListener("DOMContentLoaded", () => {//click qilsak qillik bulgan holatta loader tuxtaydi
const loader = document.querySelector('.loader');
setTimeout(function () {
  loader.style.opacity = '0';
  setInterval(function () {
    loader.style.display = 'none'
  },1000)
}, 1500)
})



document.addEventListener('DOMContentLoaded' ,() => {

  const daleBTN = document.querySelector('.col_btn_left'),
  UzNews = document.querySelector('.col_text_h4'),
  imgNews = document.querySelector('.col_row_right'),
  listNews = document.querySelector('.col_botton_ul'),
  addForm = document.querySelector('.col_form'),
  addInput = document.querySelector('.col_botton_input'),
  checkbox = addForm.querySelector('.checkbox');// clas bulmagan holda olish uchun

  
  
  
  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = (arr) => {
    arr.sort();
  };

  addForm.addEventListener('submit' , (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = checkbox.checked;//bu bizaga bolenivey znacenya qaytaradi true bulsa folse folde bulsa true
 
    if (newFilm){
      if(newFilm.length > 21){
        newFilm = `${newFilm.substring(0, 21)}...`;
      }
      if(favourite){
        console.log('sevimli yangiligingiz qo\'shilmoqda')
      }
      news.push(newFilm);
      sortArr(news);
      createNewsList(news, listNews);
    }
    addInput.value = '';
   
  
  })
  
  daleBTN.remove();
  
  UzNews.innerHTML = 'UzNews'
  UzNews.style.color = 'red'
  
  imgNews.style.cssText = ' background:url(../img/photo-1652178193931-8527179f2948.jpeg) no-repeat;  background-size: cover; ';
  

  function createNewsList(newstList, parent) {
    parent.innerHTML = '';
    sortArr(news);

    newstList.forEach((itemNews, index) => {
    parent.innerHTML += 
       `<li class="col_botton_li">
          ${index + 1} ${itemNews}
          <div class="font_icon"><i class="fa-solid fa-trash-can"></i></div>
          <div class="delete"></div>
         </li>`
     });

     document.querySelectorAll('.font_icon').forEach( (btn, i) => {
       btn.addEventListener('click', () => {
         btn.parentElement.remove();
         news.splice(i, 1);
         createNewsList(newstList, parent);

       });
     })
  }
 createNewsList(news, listNews);

})

