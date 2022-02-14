import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiQOQ9mBMifEh1TvhJrtYiP0GSmLHtgCk",
  authDomain: "react-community-3392c.firebaseapp.com",
  projectId: "react-community-3392c",
  storageBucket: "react-community-3392c.appspot.com",
  messagingSenderId: "464319953965",
  appId: "1:464319953965:web:7563e7282a4bce54770ca4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
