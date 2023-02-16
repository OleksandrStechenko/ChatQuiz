import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDklqiHD3KMJE78NtcVqh0Q3zxD8cYa3Xo',
  authDomain: 'mychat-7357b.firebaseapp.com',
  projectId: 'mychat-7357b',
  storageBucket: 'mychat-7357b.appspot.com',
  messagingSenderId: '751304339454',
  appId: '1:751304339454:web:0e91c709266732a223daaf',
  databaseURL: 'https://mychat-7357b-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
const storeDB = firebase.firestore();
const storage = firebase.storage();

const signIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Redirect to google sign out.
      window.location.assign(
        'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://joyful-starship-e5ef78.netlify.app/'
      );
    })
    .catch(function (error) {
      console.log('Google account signOut false: ' + error);
    });
};

export { signIn, signOut, database, storeDB, storage };
