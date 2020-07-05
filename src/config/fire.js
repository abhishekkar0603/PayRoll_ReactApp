import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBfj4EBfYD0idSvml1_UWBvku1MGf9dO_4",
  authDomain: "first-firebase-0603.firebaseapp.com",
  databaseURL: "https://first-firebase-0603.firebaseio.com",
  projectId: "first-firebase-0603",
  storageBucket: "first-firebase-0603.appspot.com",
  messagingSenderId: "863598236987",
  appId: "1:863598236987:web:460a3d64d77cee1c06d31e",
  measurementId: "G-F3Q8WWCCTV"
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
