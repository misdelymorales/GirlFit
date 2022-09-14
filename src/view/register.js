import {Component} from './component.js';
import {register as registerFirebase} from '../lib/firebase.js';
import {nav} from './components/nav.js';

const onLoad = () => {
    nav.render('nav');
    document.getElementById("btn-sing-up").addEventListener("click", handleRegisterClick);
}

const handleRegisterClick = () => {
    const username= document.getElementById("register-name").value;
    const email= document.getElementById("register-email").value;
    const password= document.getElementById("register-password").value;

    registerFirebase(username, email, password);
}

const template = `
  <div id="backg-imag"></div>
  <div id="container-sign-up">
      <div class="mobile-logo "><img src="img/logo/logo-rosa.png"></div>
      <form id="signup-form">
        <h2 class="form_title">Bienvenidas a la primera redSocial para mujeres deportistas</h2>
        <input class="inputForm" type="name" id="register-name" placeholder="Nombre">
        <input class="inputForm" type="email" id="register-email" placeholder="Correo Electronico">
        <input class="inputForm" type="password" id="register-password" placeholder="Contraseña">
        <p class="session-text">¿Ya tienes cuenta?<br></p>
        <a href="#/login">Inicia Sesión</a>
      </form>
      <button class="button-auth" type="submit" id="btn-sing-up">Registrarse</button>
  </di>  `;

export const register = new Component(template, onLoad);
