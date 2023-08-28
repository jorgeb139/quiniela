import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, User } from "firebase/auth";
import { isMobile } from "react-device-detect";
import { registerNewUser, userExists } from "./fireStoreServices";

const getUserFromFirebaseAuth = (user) => {
  const provider = user.providerData[0]?.providerId;
  const { displayName, email } = user;
  return {
    displayName,
    email: provider === "twitter.com" ? user.providerData[0]?.email : email,
  };
};

const loginWithProvider = async (provider) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return getUserFromFirebaseAuth(userCredential.user);
  } catch (error) {
    console.error(error);
    throw error; // Rechazar la promesa para manejar el error en el componente
  }
};

export const onAuthStateChange = (onChange: (user: User | null) => void) => {
  const auth = getAuth();

  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userData = getUserFromFirebaseAuth(user);
      onChange(userData);
      const isRegistered = await userExists(user.email);
      if (isRegistered) {
        console.log("Registrado");
      } else {
        console.log("No se ha registrado");
        await registerNewUser({
          displayName: userData.displayName,
          email: userData.email,
          userMembership: "Free",
          lastLogin: new Date(),
          registerDate: new Date(),
          loginCount: 1,
          userValidate: false,
        });
      }
    } else {
      onChange(null);
    }
  });

  return unsubscribe;
};


export const loginWithGoogle = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  if (isMobile) {
    return signInWithRedirect(auth, googleProvider);
  } else {
    return signInWithPopup(auth, googleProvider);
  }
};

export const loginWithFacebook = async () => {
  const auth = getAuth();
  const facebookProvider = new FacebookAuthProvider();
  return signInWithPopup(auth, facebookProvider);
};

export const loginWithTwitter = async () => {
  const auth = getAuth();
  const twitterProvider = new TwitterAuthProvider();
  return signInWithPopup(auth, twitterProvider);
};
export const isLoggedIn = () => {
  const auth = getAuth()
  return auth.currentUser !== null
};

export const isLoggedOut = () => {
  const auth = getAuth()
  return auth.currentUser === null
};

