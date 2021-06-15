import Firebase from "firebase/app";
import 'firebase/firestore';
import  'firebase/auth';

const config={
  apiKey: "AIzaSyCiab5mjOnSY3EZznWMwTttC6oKKUTK-eU",
  authDomain: "netflix-clone-9a250.firebaseapp.com",
  projectId: "netflix-clone-9a250",
  databaseURL:"https://netflix-clone-9a250.firebaseio.com",
  storageBucket: "netflix-clone-9a250.appspot.com",
  messagingSenderId: "292267548424",
  appId: "1:292267548424:web:9f2d54de7cf872901916bd",
  measurementId: "G-DV8EFNQF6V"
};

const firebase = Firebase.initializeApp(config);

export {firebase};