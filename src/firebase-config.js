import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKaA1Qp-9PYltLjbcp2ntSTx7OdsYoYbo",
  authDomain: "ntpchat-2d424.firebaseapp.com",
  projectId: "ntpchat-2d424",
  storageBucket: "ntpchat-2d424.appspot.com",
  messagingSenderId: "869295372558",
  appId: "1:869295372558:web:ebabf90bcc2abdbd84ff5f",
  measurementId: "G-0EK1QRC53N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();