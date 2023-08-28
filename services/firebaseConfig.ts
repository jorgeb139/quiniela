import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGsp8RFmixqjOIKJcO-MwpBAR3JTtGafw",
  authDomain: "quiniela-8d73b.firebaseapp.com",
  projectId: "quiniela-8d73b",
  storageBucket: "quiniela-8d73b.appspot.com",
  messagingSenderId: "475936910757",
  appId: "1:475936910757:web:149d19821560e730530c4c",
  measurementId: "G-HTJK9KQ5RE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
