import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgMy5SwkF4IerJDZo5QW0y2fv_TCLDiC4",
    authDomain: "messenger-14380.firebaseapp.com",
    projectId: "messenger-14380",
    storageBucket: "messenger-14380.appspot.com",
    messagingSenderId: "720126724197",
    appId: "1:720126724197:web:880c26674c43f27f655e8c",
    measurementId: "G-MFYHSC4LL2"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  export {auth,db};