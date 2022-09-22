import {Component} from './component.js';
import {login as loginFirebase} from '../lib/firebase.js';
import {signWithGoogle} from '../lib/firebase.js';
import {nav} from './components/nav.js';
import {signWithFacebook} from '../lib/firebase.js';

const onLoad = () => {
    nav.render('nav');
    document.getElementById("btn-login").addEventListener("click", handleLoginClick);
    document.getElementById("login-google").addEventListener("click", signWithGoogle);
    document.getElementById("login-facebook").addEventListener("click", signWithFacebook);
}

const handleLoginClick = () => {
    const email= document.getElementById("login-email").value;
    const password= document.getElementById("login-password").value;

    loginFirebase(email,password);
    
}

const template = `
<div id="backg-imag"></div>
   <div id="container-sign-in">   
    <div class="mobile-logo"><img src="img/logo/logo-rosa.png"></div>
        <form>
            <h2 class="form_title">Inicia Sesión para continuar</h2>
            <input class="inputForm" type="email" id="login-email" placeholder="Correo Electronico">
            <input class="inputForm" type="password" id="login-password" placeholder="Contraseña">
        </form>
        <button class="button-auth" id="btn-login">Iniciar Sesión</button>
    <div class="icons-login">
        <img id="login-facebook" src="img/Logo/facebook-rosa.png">
        <img id="login-google" src="img/Logo/google-rosa.png">
    </div>
    <p>¿Aun no tienes cuenta?<br></p>
    <a href="#/register">¡Registrate aquí!</a>
`;

export const login = new Component(template, onLoad);