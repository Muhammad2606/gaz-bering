'use strict';
window.addEventListener('DOMContentLoaded', () =>{

    const navigation = document.querySelector('.navigation'),
    arrowUp = document.querySelector('.fa-arrow-up'),
    arrowDown  = document.querySelector('.fa-arrow-down'),
    fixedHeader = document.querySelector('.fixed__header'),
    fixedClose = fixedHeader.querySelector('.fixed__close'),
    bars  = document.querySelector('.fa-bars');

     // navigation panel 
   arrowUp.addEventListener('click', () => {
        navigation.classList.add('slide-out-blurred-top');
        navigation.classList.remove('bounce-in-top');
        arrowUp.classList.add('slide-out-bck-center');
        arrowUp.classList.remove('bounce-in-top');
        
   });
   arrowDown.addEventListener('click', () =>{
        navigation.classList.remove('slide-out-blurred-top');
        navigation.classList.add('bounce-in-top');
        arrowUp.classList.remove('slide-out-bck-center');
        arrowUp.classList.add('bounce-in-top');
   });

   bars.addEventListener('click', () =>{
        fixedHeader.classList.add('block', 'tilt-in-fwd-tl');
        fixedHeader.classList.remove('none', 'swing-out-right-bck');
        document.body.style.overflow = "hidden";

   });
   fixedClose.addEventListener('click', () =>{
        fixedHeader.classList.add('swing-out-right-bck');
        fixedHeader.classList.remove('block', 'tilt-in-fwd-tl');
        document.body.style.overflow = "";
        
   });
});



