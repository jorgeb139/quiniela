import { db } from "./firebaseConfig";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export const userExists = async (email) => {
	try {
		const docRef = doc(db, "users", email)
		const res = await getDoc(docRef)
		return res.exists()
	} catch (error) {
		console.log(error)
	}
};

export const registerNewUser = async (user) => {
	try {
    const collectionRef = collection(db, "users")
    const docRef = doc(collectionRef, user.email)
    await setDoc(docRef, user)
  } catch (error) {
    console.log(error)
  }
};
