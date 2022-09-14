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
  updateDoc,
  onSnapshot,
  getDoc,
  addDoc,
  // getDocs,
  query,
  doc,
  deleteDoc,
  arrayUnion, 
  arrayRemove,
  // getStorage,
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
 
//constantes
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const colRef= collection(db, 'posts');
// const storage = getStorage(app);

//Crear post
export async function createpost (textPost="texto por defecto"){
  try {
    let userEmail = localStorage.getItem('correo');
    const docRef = await addDoc(collection(db, "posts"), {
      name: userEmail,
      description: textPost,
      likesCounter: 0,
      likeUsers: [] //ids de usuarios que dieron like
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//mostrar en tiempo real collection data
export const showPosts = (callback) =>{
    const q = query(collection(db, 'posts'));
    onSnapshot(q, (querySnapShot) => {
      const allPosts = [];
      querySnapShot.forEach((doc) => {
        allPosts.push({...doc.data(), id: doc.id});
      });
      console.log({allPosts});
      callback(allPosts);
    });
  
  
}

//eliminar post
export const deletePost = async (id) =>{
  const email = localStorage.getItem('correo');

  const postRef = doc(db, 'posts', id);
  const docLike = await getDoc(postRef);
  const post = docLike.data();

  if(post.name === email){
    deleteDoc(doc(db, 'posts', id));
  }
};

//like
export const likePost = async (id) => {
  const userId=localStorage.getItem('uid');
  const postRef = doc(db, 'posts', id);
  const docLike = await getDoc(postRef);
  const post = docLike.data();
  if (!post.likeUsers.includes(userId)) {
    await updateDoc(postRef, {
      likeUsers: arrayUnion(userId),
      likesCounter: post.likesCounter + 1,
    });
  } 
  else {
    await updateDoc(postRef, {
      likeUsers: arrayRemove(userId),
      likesCounter: post.likesCounter - 1,
    });
  }
}; 

//Función de Registarse
export function register( email, password){
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //// Signed in
        const user = userCredential.user;
        const userId = user.uid;
        register(userId, email, password);
        alert("usuario creado correctamente");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
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

//Función para iniciar sesión con Google
export const signWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;

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
  
    //función para verficar correo
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
      localStorage.setItem('correo',user.email);
      localStorage.setItem('uid',user.uid);
      window.location.hash = '#/feed';
      return;
    }
    localStorage.removeItem('correo');
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