'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModle = document.querySelector('.close-modal');

let btnOpenModle = document.querySelectorAll('.show-modal');

for(let i=0;i<btnOpenModle.length;i++){
    btnOpenModle[i].addEventListener('click',function
    (){
        console.log('button click');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};


const coseModes = function(){
    console.log('button click');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModle.addEventListener('click',coseModes);
overlay.addEventListener('click',coseModes);


// using escap key working..

document.addEventListener('keydown',function
(e){
    if(e.key == "Escape" && !modal.classList.contains('hidden')){
        coseModes()
    }
})


// btnCloseModle.addEventListener('click',function
// (){
//     console.log('button click');
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


// overlay.addEventListener('click',function
// (){
//     console.log('button click');
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
