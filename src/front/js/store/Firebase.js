// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxOMjLFCkBmE5KvOtN9jjXM-2wtDm-XTY",
  authDomain: "plan-and-go-355522.firebaseapp.com",
  projectId: "plan-and-go-355522",
  storageBucket: "plan-and-go-355522.appspot.com",
  messagingSenderId: "196263218036",
  appId: "1:196263218036:web:a7916e95c45be9132e3a21",
  measurementId: "G-52RX6VHFKW",
};

// Initialize Firebase
export const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
