// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth"
// import {
//   getStorage,
//   // ref,
//   // uploadBytes,
//   // getDownloadUrl,
//   // getBytes,
// } from "firebase/storage"
import {
  getFirestore,
  collection,
  // addDoc,
  // getDocs,
  doc,
  getDoc,
  // query,
  // where,
  setDoc,
  // deleteDoc,
} from "firebase/firestore"
import { isMobile } from "react-device-detect"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGsp8RFmixqjOIKJcO-MwpBAR3JTtGafw",
  authDomain: "quiniela-8d73b.firebaseapp.com",
  projectId: "quiniela-8d73b",
  storageBucket: "quiniela-8d73b.appspot.com",
  messagingSenderId: "475936910757",
  appId: "1:475936910757:web:149d19821560e730530c4c",
  measurementId: "G-HTJK9KQ5RE",
}

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const storage = getStorage(app)

// Construct user data oject from Firebase Auth user
const getUserFromFirebaseAuth = (user) => {
  const provider = user.reloadUserInfo.providerUserInfo[0].providerId
  const { displayName } = user
  const email =
    provider === "twitter.com"
      ? user.reloadUserInfo.providerUserInfo[0].email
      : user.email
  return {
    displayName,
    email,
  }
}

// Check if the auth state is changed
export const onAuthStateChange = (onChange) => {
  const auth = getAuth()
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userData = getUserFromFirebaseAuth(user)
      onChange(userData)
      const isRegistered = await userExists(user.email)
      if (isRegistered) {
        console.log("Registrado")
      } else {
        console.log("No se ha registrado")
        await registerNewUser({
          displayName: userData.displayName,
          email: userData.email,
          userMembership: "Free",
          lastLogin: new Date(),
          registerDate: new Date(),
          loginCount: 1,
          userValidate: false,
        })
      }
    } else {
      onChange(null)
    }
  })
}

export const loginWithGoogle = () => {
  // Initializing Google provider
  const googleProvider = new GoogleAuthProvider()

  const auth = getAuth()

  if (isMobile) {
    // Using signInWithRedirect to sign in with Google on desktop
    return signInWithRedirect(auth, googleProvider).then((user) => {
      try {
        const { displayName, email } = user.user
        return {
          displayName,
          email,
        }
      } catch (error) {
        console.log(error)
      }
    })
  } else {
    try {
      // Using signInWithPopup to sign in with Google on mobile
      return signInWithPopup(auth, googleProvider).then((user) => {
        const { displayName, email } = user.user
        return {
          displayName,
          email,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// Login with Facebook
export const loginWithFacebook = () => {
  // Initializing Facebook provider
  const facebookProvider = new FacebookAuthProvider()

  // Using SiginWithPopup to sign in with Facebook
  const auth = getAuth()
  return signInWithPopup(auth, facebookProvider)
}

// Login with Twitter
export const loginWithTwitter = async () => {
  // Initializing Twitter provider
  const twitterProvider = new TwitterAuthProvider()

  // Using SiginWithPopup to sign in with Twitter
  const auth = getAuth()

  signInWithPopup(auth, twitterProvider).catch((error) => {
    console.log(error.email)
  })
}

// Check if the user exists in the database
export const userExists = async (email) => {
  try {
    const docRef = doc(db, "users", email)
    const res = await getDoc(docRef)
    return res.exists()
  } catch (error) {
    console.log(error)
  }
}

// Register new user
export const registerNewUser = async (user) => {
  try {
    const collectionRef = collection(db, "users")
    const docRef = doc(collectionRef, user.email)
    await setDoc(docRef, user)
  } catch (error) {
    console.log(error)
  }
}

// Check if the user is logged in
export const isLoggedIn = () => {
  const auth = getAuth()
  return auth.currentUser !== null
}

// Check if the user is logged out
export const isLoggedOut = () => {
  const auth = getAuth()
  return auth.currentUser === null
}
