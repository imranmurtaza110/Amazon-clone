import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNZ4y1mVdMRSRk0t8WCczyEbMBnEIa2Qc",
    authDomain: "clone-d7879.firebaseapp.com",
    projectId: "clone-d7879",
    storageBucket: "clone-d7879.appspot.com",
    messagingSenderId: "876352481497",
    appId: "1:876352481497:web:fb7a8dfc7c8417e695b6c8",
    measurementId: "G-851B834BLG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };