//import { 
  //getAuth, 
  //createUserWithEmailAndPassword, 
  //signInWithEmailAndPassword, 
  //signInWithPopup, 
  //GoogleAuthProvider, 
//} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";//

//import {app} from "./configFirebase.js"

//const auth = getAuth();
//const provider = new GoogleAuthProvider();
//const getUserData = () => auth.currentUser;

//Función de eventos
// function addEvents() {
//     document.getElementById("register-link").addEventListener("click", ()=>goTo("container-sign-up")); //evento que cambia vista de registro
//     document.getElementById("session-link").addEventListener("click", ()=>goTo("container-sign-in")); //evento que cambia vista de inicio
//     document.getElementById("btn-login").addEventListener("click", login);
//     document.getElementById("btn-sing-up").addEventListener("click", register);
//     document.getElementById("login-google").addEventListener("click", signWithGoogle);
//     document.getElementById("login-facebook").addEventListener("click", signWithFacebook);
// }
//Función de Registarse
//export function register(){
    
    //createUserWithEmailAndPassword(auth, email, password)
    //.then((userCredential) => {
        //// Signed in
        //const user = userCredential.user;
        //// limpiar formulario

        //console.info("usuario creado correctamente");
      //})
      //.catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        //console.error("error al crear usuario");
      //});
//}

////Función de Iniciar sesión
//export function login(){
    //signInWithEmailAndPassword(auth, email, password)
  //.then((userCredential) => {
    // Signed in
    //const user = userCredential.user;
    // ...
    //console.info("inicio sesion")
  //})
  //.catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    //console.error("usuario no encontrado");
  //});
//}

////Función para iniciar sesión con Google
//const signWithGoogle = () => {
  //signInWithPopup(auth, provider)
    //.then((result) => {
      //// This gives you a Google Access Token. You can use it to access the Google API.
      ////const credential = GoogleAuthProvider.credentialFromResult(result);
      //// const token = credential.accessToken;
      //// The signed-in user info.
      //// const user = result.user;
      //// ...
      //// console.log('resultó google jeje');
      //return credential;
    //})
    //.catch((error) => {
      //// Handle Errors here.
      //const errorCode = error.code;
      //// const errorMessage = error.message;
      //// The email of the user's account used.
      //// const email = error.customData.email;
      //// The AuthCredential type that was used.
      //// const credential = GoogleAuthProvider.credentialFromError(error);
      //// ...
      //return errorCode;
    //});
//};

