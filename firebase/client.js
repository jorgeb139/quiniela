// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider  } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGsp8RFmixqjOIKJcO-MwpBAR3JTtGafw",
  authDomain: "quiniela-8d73b.firebaseapp.com",
  projectId: "quiniela-8d73b",
  storageBucket: "quiniela-8d73b.appspot.com",
  messagingSenderId: "475936910757",
  appId: "1:475936910757:web:149d19821560e730530c4c",
  measurementId: "G-HTJK9KQ5RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Login with Google
export const loginWithGoogle = () => {
  //Initializing Google provider
  const googleProvider = new GoogleAuthProvider();

  //Using SiginWithPopup to sign in with Google
  const auth = getAuth();
  return(signInWithPopup(auth, googleProvider))
  .then((user) => {
    const { displayName, email, photoURL, uid } = user.user;
    return {
      displayName,
      email,
      photoURL,
      uid,
    }
  })
}

//Login with Facebook
export const loginWithFacebook = () => {
  //Initializing Facebook provider
  const facebookProvider = new FacebookAuthProvider();
  
  //Using SiginWithPopup to sign in with Facebook
  const auth = getAuth();
  return(signInWithPopup(auth, facebookProvider))
  .then((user) => {
    const { displayName, email, photoURL, uid } = user.user;
    return {
      displayName,
      email,
      photoURL,
      uid,
    }
  })
}

//Login with Twitter
export const loginWithTwitter = () => {
  //Initializing Twitter provider
  const twitterProvider = new TwitterAuthProvider();

  //Using SiginWithPopup to sign in with Twitter
  const auth = getAuth();
  return(signInWithPopup(auth, twitterProvider))
  .then((user) => {
    const { displayName, email, photoURL, uid } = user.user;
    return {
      displayName,
      email,
      photoURL,
      uid,
    }
  })
}

//Check if the user is logged in
export const isLoggedIn = () => {
  const auth = getAuth();
  return auth.currentUser !== null;
}

//Check if the user is logged out
export const isLoggedOut = () => {
  const auth = getAuth();
  return auth.currentUser === null;
}

//Check if the auth state is changed
export const onAuthStateChange = (callback) => {
  const auth = getAuth();
  auth.onAuthStateChanged(callback);
}