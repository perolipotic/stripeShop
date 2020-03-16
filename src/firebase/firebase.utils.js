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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const convertCollectionsSnapToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmpt: "select_account", display: "popup" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
