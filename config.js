import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAsaqGuaggJ4-Fq4YciI_UwK7szB6qcbzI",
    authDomain: "project71-b8382.firebaseapp.com",
    projectId: "project71-b8382",
    storageBucket: "project71-b8382.appspot.com",
    messagingSenderId: "900644964394",
    appId: "1:900644964394:web:4a267d0217fc8b98e21b53"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


