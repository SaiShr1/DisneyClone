// This is a new change (firease -> firebase/compat/app)due to firebase updates
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import firebaseConfig from '../utils/firebaseConfig.js'


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref();

export { auth, provider, storage};
export default db;