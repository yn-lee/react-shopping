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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("err !", err.message);
    }
  }
  return userRef;
};

//Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
//firebase를 한번 초기화를 하고 page에서 firebase가 호출이 되었을 떄, 초기화 한 값이 있어서 중복 error가 발생
//해결
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // 항상 Google 팝업 트리거하기 원해용

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
