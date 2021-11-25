import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHUoT_FAsNgAttoSmB9byAkzNdn3A8XSU",
    authDomain: "fir-70c9e.firebaseapp.com",
    projectId: "fir-70c9e",
    storageBucket: "fir-70c9e.appspot.com",
    messagingSenderId: "904117493246",
    appId: "1:904117493246:web:5970ccb021084c863d34af",
    measurementId: "G-P9KYXVGPV0"
};
export default firebase.initializeApp(firebaseConfig)