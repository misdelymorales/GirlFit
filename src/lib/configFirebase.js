// CONFIG FIREBASE APP
// Import the functions you need from the SDKs you need

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