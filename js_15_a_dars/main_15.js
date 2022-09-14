'use strict'

 document.addEventListener("DOMContentLoaded", () => {// html zagruska bub bulgandan kiyin kalbik funksiya ishledi ( () => {})
   const loader = document.querySelector('.loader');
     setTimeout(function () {
       loader.style.opacity = '0';
       setTimeout(function () {
         loader.style.opacity = 'none'
       },1000)
     },1500);
 });