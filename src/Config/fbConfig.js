import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAuDMbxaeHAQ6Psz42tgBQk-2Xj-VfZUKs",
    authDomain: "react-nn-project.firebaseapp.com",
    databaseURL: "https://react-nn-project.firebaseio.com",
    projectId: "react-nn-project",
    storageBucket: "react-nn-project.appspot.com",
    messagingSenderId: "666309622947",
    appId: "1:666309622947:web:c3603a9a6033a0ca075316",
    measurementId: "G-TE9J89NLYW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

