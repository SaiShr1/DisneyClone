// This is a new change (firease -> firebase/compat/app)due to firebase updates
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB22OHWs-jp--BEgDd2zDzEqOSLaKOJew",
  authDomain: "disneyplushotstarclone-5005c.firebaseapp.com",
  projectId: "disneyplushotstarclone-5005c",
  storageBucket: "disneyplushotstarclone-5005c.appspot.com",
  messagingSenderId: "464550473604",
  appId: "1:464550473604:web:1c82cde5ab412b6173f7d1"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref();

export { auth, provider, storage};
export default db;