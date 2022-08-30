import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

 const firebaseConfig = {
     apiKey: "AIzaSyAlSrkSdzAr2miMg3q0c0_ZWOqIL1EkANs",
     authDomain: "girlfit-94742.firebaseapp.com",
     databaseURL: "https://girlfit-94742-default-rtdb.firebaseio.com",
     projectId: "girlfit-94742",
     storageBucket: "girlfit-94742.appspot.com",
     messagingSenderId: "20460878579",
     appId: "1:20460878579:web:4e56d9c5aadeb762221586"
   };
 
 export const app = initializeApp(firebaseConfig);

const auth = getAuth();
const getUserData = () => auth.currentUser;

//Función de Registarse
export function register(email, password){
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //// Signed in
        const user = userCredential.user;
        //// limpiar formulario

        console.info("usuario creado correctamente");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("error al crear usuario");
      });
}

////Función de Iniciar sesión
export function login(){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    //console.info("inicio sesion")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("usuario no encontrado");
  });
}

////Función para iniciar sesión con Google
const signWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      //// This gives you a Google Access Token. You can use it to access the Google API.
      ////const credential = GoogleAuthProvider.credentialFromResult(result);
      //// const token = credential.accessToken;
      //// The signed-in user info.
      //// const user = result.user;
      //// ...
      //// console.log('resultó google jeje');
      return credential;
    })
    .catch((error) => {
      //// Handle Errors here.
      const errorCode = error.code;
      //// const errorMessage = error.message;
      //// The email of the user's account used.
      //// const email = error.customData.email;
      //// The AuthCredential type that was used.
      //// const credential = GoogleAuthProvider.credentialFromError(error);
      //// ...
      return errorCode;
    });
};

