import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBGH0ipKi8OLjXYu1FyBCZdxgBVj10O_rA",
  authDomain: "crwn-db-da8f4.firebaseapp.com",
  projectId: "crwn-db-da8f4",
  storageBucket: "crwn-db-da8f4.appspot.com",
  messagingSenderId: "427538229729",
  appId: "1:427538229729:web:40794022840d0a85740aa0",
  measurementId: "G-Q7Q357XGSQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
    console.log("error creating user", e.message);

    }
  }

  return userRef;



}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
