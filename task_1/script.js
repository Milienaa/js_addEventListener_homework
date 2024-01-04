'use strict'

let minus = document.querySelector('.counter__minus');
let plus = document.querySelector('.counter__plus');
let value = document.querySelector('.counter__value');

minus.addEventListener('click', function(){
    let c = +value.textContent;
    value.textContent=--c;
})

plus.addEventListener('click', function(){
    let c = +value.textContent;
    value.textContent=++c;
})