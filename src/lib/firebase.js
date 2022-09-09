import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import { 
  getFirestore ,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

//Iniciar servicios
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

//const getUserData = () => auth.currentUser;

//const db = getFirestore()


//Función de Registarse
export function register(email, password){
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //// Signed in
        const user = userCredential.user;
      emailVerification(auth);

        alert("usuario creado correctamente");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.error("error al crear usuario");
      });
}

////Función de Iniciar sesión
export function login(email, password){
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
export const signWithGoogle = () => {
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

  //función para autenticar con facebook//
  export const signWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
    // The signed-in user info.
    //const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    //const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    //const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  }

    function emailVerification(auth) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert('Te hemos enviado una confirmación a tu correo por favor válida antes de comenzar.');
        });
    }

//Estado de autenticación y datos del usuario
export const stateUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = auth.currentUser;
      window.location.hash = '#/feed';
      return currentUser;
    }
    window.location.hash = '#/login';
    return ('not logged');
    
  })
};

//Cerrar sesión
signOut(auth).then(() => {
  // redirige a inicio de sesión
  window.location.hash = '#/login';
}).catch((error) => {
  // An error happened.
});

function newUserData(userId, nickInput, bioInput, birthInput, chosenPic, arrayGender){
  let userData = collection(db, "UsersList");
  const docUserData = addDoc(
    userData, {
      id: userId,
      Name: nickInput,
      email,
    })
    .then(() => {
      console.log('data registrada con éxito')
      sendEmailVerification(auth.currentUser)
      window.location.assign("/welcome")
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage)
   })
}
