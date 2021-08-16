import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCy9OvNaLE5wzYZX3pf2SghJaAp4TM9y5I",
  authDomain: "clothing-shop-db-bef1d.firebaseapp.com",
  projectId: "clothing-shop-db-bef1d",
  storageBucket: "clothing-shop-db-bef1d.appspot.com",
  messagingSenderId: "702312281163",
  appId: "1:702312281163:web:e42f24312235bdf8f409ce",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
