import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARY6CPM1oRcpoXqwZrUFh4F3zAMaMomfE",
    authDomain: "weenks-45db4.firebaseapp.com",
    projectId: "weenks-45db4",
    storageBucket: "weenks-45db4.appspot.com",
    messagingSenderId: "1049782339431",
    appId: "1:1049782339431:web:dafe5e5f06d528df2011c2",
    measurementId: "G-KPGZDHR7PS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;