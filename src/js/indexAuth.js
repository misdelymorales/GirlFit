// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// import { getDatabase } from "firebase/database";
import {goTo} from "./indexShared.js";


/**
 * Está función contiene el código que se ejecuta al inicializar el módulo
 */
 export default function init(){
    console.info("auth initialized");
    addEvents();
    initilalizeFirebase();
}

let app;

//Función de eventos
function addEvents() {
    document.getElementById("login-google").addEventListener("click", signWithGoogle);
    document.getElementById("btn-login").addEventListener("click", login);
    document.getElementById("btn-sing-up").addEventListener("click", register);
    document.getElementById("register-link").addEventListener("click", ()=>goTo("container-sign-up")); //evento que cambia vista de registro
    document.getElementById("session-link").addEventListener("click", ()=>goTo("container-sign-in")); //evento que cambia vista de inicio
}
//Función de Registarse
function register(){
    //Obtener usuario y contraseña del dom
    const email= document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // limpiar formulario

        console.info("usuario creado correctamente");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("error al crear usuario");
      });
}

//Función de Iniciar sesión
function login(){
//usuario entre en la aplicación//
    const email= document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const auth = getAuth(app);
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.info("inicio sesion")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("usuario no encontrado");
  });
}

<<<<<<< HEAD
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


//const loginUsingGoogle = () => {
 // loginUsingGoogleWithPopup(auth, provider)
   // .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
     // const credential = GoogleAuthProvider.credentialFromResult(result);
    
     // return credential;
    //})
    //.catch((error) => {
      
      //const errorCode = error.code;
    
     // return errorCode;
   // });
//};

 //const loginUsingGoogle = () => {
   //loginUsingWithPopup(auth, provider) 
   //.then((result) => {
   //const provider = new GoogleAuthProvider();
   //const auth = getAuth();
   ////This gives you a Google Access Token. You can use it to access the Google API.
   //const credential = GoogleAuthProvider.credentialFromResult(result);
   //const token = credential.accessToken;
   ////The signed-in user info.
   //const user = result.user;
    // ...
    //}).catch((error) => {
    ////Handle Errors here.
    //const errorCode = error.code;
    //const errorMessage = error.message;
    //The email of the user's account used.
    //const email = error.customData.email;
    //The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  //});

//}
=======
//Función para iniciar sesión con Google
const signWithGoogle = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
      // console.log('resultó google jeje');
      return credential;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return errorCode;
    });
};
>>>>>>> refs/remotes/origin/main

//Configuración FIREBASE
function initilalizeFirebase () {
    const firebaseConfig = {
        apiKey: "AIzaSyAlSrkSdzAr2miMg3q0c0_ZWOqIL1EkANs",
        authDomain: "girlfit-94742.firebaseapp.com",
        databaseURL: "https://girlfit-94742-default-rtdb.firebaseio.com",
        projectId: "girlfit-94742",
        storageBucket: "girlfit-94742.appspot.com",
        messagingSenderId: "20460878579",
        appId: "1:20460878579:web:4e56d9c5aadeb762221586"
      };

    app = initializeApp(firebaseConfig);
    //const database = getDatabase();
   
}