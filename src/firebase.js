import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  //first step in firebase config
  apiKey: "AIzaSyCg-DLaXfCtgxXZJju11XTOEbbhHl8fIhI",
  authDomain: "yt-clone-by-savan.firebaseapp.com",
  projectId: "yt-clone-by-savan",
  storageBucket: "yt-clone-by-savan.appspot.com",
  messagingSenderId: "355035225483",
  appId: "1:355035225483:web:3022a7a770533c6f12a38e",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth(); //step for google authentication config
