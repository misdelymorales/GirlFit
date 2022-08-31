import {Component} from './component.js';
import {register as registerFirebase} from '../lib/firebase.js';
import {nav} from './components/nav.js';

const onLoad = () => {
    nav.render('nav');
    document.getElementById("btn-sing-up").addEventListener("click", handleRegisterClick);
}

const handleRegisterClick = () => {
    const email= document.getElementById("register-email").value;
    const password= document.getElementById("register-password").value;

    registerFirebase(email,password);
}

const template = `
<div class="view" id="container-sign-up">
<div class="mobile-logo "><img src="img/logo/logo-rosa.png"></div>
<form id="signup-form">
  <h2 class="form_title">Antes de Empezar cuentanos un poco sobre ti</h2>
  <input type="email" id="register-email" placeholder="Correo Electronico">
  <input type="password" id="register-password" placeholder="Contraseña">
  <p class="session-text">¿Ya tienes cuenta?<br></p>
  <a href="#/login">Inicia Sesión</a>
</form>
<button type="submit" id="btn-sing-up">Registrarse</button>
</div>
`;

export const register = new Component(template, onLoad);
