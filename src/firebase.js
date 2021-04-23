import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuf5bRuF9WXwrAeMxm8B2FeypZ7ABJybQ",
  authDomain: "vishalroyalroadlines.firebaseapp.com",
  projectId: "vishalroyalroadlines",
  storageBucket: "vishalroyalroadlines.appspot.com",
  messagingSenderId: "43872643786",
  appId: "1:43872643786:web:ebcedecc12567b99416233",
  measurementId: "G-PEJ9PN7QW4",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
