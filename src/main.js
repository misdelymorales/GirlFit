// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//import {hidden} from './sessions.js'

const btnlogin = document.getElementById('btn-login');
const btnSingUp = document.getElementById('btn-sing-up');
const singIn = document.querySelector(".container-form-sign-in"); 
const singUp = document.querySelector(".container-form-sign-up");
   
btnlogin.addEventListener("click", function(){
    $(".container-form").toggle();
})

/*document.addEventListener('click', e => {
    if(e.target === btnlogin) {

    }   

})*/
