// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRHHGHX9RancZpkfj0yI5RmYY1yDnu_ZY",
    authDomain: "clone-c6401.firebaseapp.com",
    projectId: "clone-c6401",
    storageBucket: "clone-c6401.appspot.com",
    messagingSenderId: "455918555405",
    appId: "1:455918555405:web:d35510437e622fda3fa044",
    measurementId: "G-SHXWSKPL90"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};