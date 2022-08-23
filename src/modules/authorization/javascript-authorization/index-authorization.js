// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {goTo} from "../../shared/javascript-shared/index-shared.js";

/**
 * Está función contiene el código que se ejecuta al inicializar el módulo
 */
export default function init(){
    console.info("auth initialized");
    addEvents();
    initilalizeFirebase();
}

function addEvents() {
    document.getElementById("btn-login").addEventListener("click", login);
    document.getElementById("register-link").addEventListener("click", goToRegister);
    document.getElementById("session-link").addEventListener("click", goToLogin)
}

function login(){
    //Obtener usuario y contraseña del dom
    // const email = "misdely", password = "morales";

    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user;
    
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.error(error);
    // });
}

function goToRegister() {
    goTo("container-sign-up");
}
function goToLogin() {
    goTo("container-sign-in");
}

function initilalizeFirebase () {
    // const firebaseConfig = {
    //    apiKey: "" //Aqui credenciales de firebase
    // };
    // const app = initializeApp(firebaseConfig);
}