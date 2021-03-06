import firebase from "firebase/app";

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBXKJtvPlg5_Kpzyw5JaBNzIQA5SuVsmhg",
    authDomain: "chat-app-55df7.firebaseapp.com",
    projectId: "chat-app-55df7",
    storageBucket: "chat-app-55df7.appspot.com",
    messagingSenderId: "163082104986",
    appId: "1:163082104986:web:96a200c950883acd9caf23",
    measurementId: "G-ZMDBWGNXHX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();


// if (window.location.hostname === 'localhost') {
//     auth.useEmulator('http://localhost:9099');
//     db.useEmulator('localhost', '8080');
// }


export { db, auth };
export default firebase;