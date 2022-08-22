import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function (){
    /**
     * Está función contiene el código que se ejecuta al inicializar el módulo
     */
   (function init(){
        console.info("auth initialized");
        addEvents();
        initilalizeFirebase();
    })();

    function addEvents() {
        document.getElementById("btn-login").addEventListener("click", login);
    }

    function login(){
        //Obtener usuario y contraseña del dom
        const email = "misdely", password = "morales";

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error);
        });
    }

    function initilalizeFirebase () {
        const firebaseConfig = {
           apiKey: "" //Aqui credenciales de firebase
        };
        const app = initializeApp(firebaseConfig);
    }
};