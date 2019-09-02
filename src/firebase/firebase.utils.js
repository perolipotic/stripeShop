import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBt0SVnboB4P1wusEonpaA6O9arc-uY85Q",
  authDomain: "shop-db-3db2a.firebaseapp.com",
  databaseURL: "https://shop-db-3db2a.firebaseio.com",
  projectId: "shop-db-3db2a",
  storageBucket: "",
  messagingSenderId: "791182257642",
  appId: "1:791182257642:web:89f88e0d0c9106d8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const fire = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmpt: "select_account", display: "popup" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
