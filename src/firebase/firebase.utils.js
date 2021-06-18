import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEI8RSKZCM4Dpk90CLTZD_BbkQd4CsHC4",
  authDomain: "crwn-db-9f32a.firebaseapp.com",
  projectId: "crwn-db-9f32a",
  storageBucket: "crwn-db-9f32a.appspot.com",
  messagingSenderId: "281356231354",
  appId: "1:281356231354:web:2e67fac9b288e8c29e1883",
  measurementId: "G-F8GHLTN4T4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // 항상 Google 팝업 트리거하기 원해용

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
