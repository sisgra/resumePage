import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCm-6SmVlxZptlYnevD3PozPla5mzyzuxU",
        authDomain: "contactformular-eee06.firebaseapp.com",
        projectId: "contactformular-eee06",
        storageBucket: "contactformular-eee06.appspot.com",
        messagingSenderId: "213961505831",
        appId: "1:213961505831:web:43e2e4f808ce93fb54e202"
});
 
var db = firebaseApp.firestore();

export { db };