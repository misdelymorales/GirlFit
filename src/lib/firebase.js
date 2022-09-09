import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
  sendEmailVerification,
  //sendPasswordResetEmail//
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

import { 
  getFirestore ,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

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

const db = getFirestore(app);

export async function createpost (text){
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      name: "user",
      description: "posts"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//crear posts//
function postData() {
  document.getElementById('publishPost').addEventListener('click', postUser); 
  event.preventDefault()
  function postUser() {
    let post = document.getElementById('inputPost').value
    if (post.length === 0) {
      alert('No hay nada que publicar!!')
    } else {
    addDoc(collection(db, 'Post'), {
    uid: auth.currentUser.uid,
    name: auth.currentUser.displayName,
    picture: auth.currentUser.photoURL,
    description: post,
    likes:[],
    likesCounter: 0,
    datepost: Timestamp.fromDate(new Date()), 
    });
      postDash()
      document.getElementById('inputPost').value = '';
  }event.stopImmediatePropagation()};
}

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


// Recuperar  Contraseña//
//sendPasswordResetEmail(auth, email)
  //.then(() => {
    // Password reset email sent!
    // ..
  //})
  //.catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // ..
  //});

  
  //crear vinculo para recuperar contraseña//
  //const userEmail = 'user@example.com';
//getAuth()
  //.generatePasswordResetLink(userEmail, actionCodeSettings)
  //.then((link) => {
    // Construct password reset email template, embed the link and send
    // using custom SMTP server.
    //return sendCustomPasswordResetEmail(userEmail, displayName, link);
  //})
  //.catch((error) => {
    // Some error occurred.
  //});

