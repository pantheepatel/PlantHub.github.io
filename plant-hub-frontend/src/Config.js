// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIV4i7XUCCXeQA92NI12hpZwpqmdXZKeI",
  authDomain: "planthub-95346.firebaseapp.com",
  projectId: "planthub-95346",
  storageBucket: "planthub-95346.appspot.com",
  messagingSenderId: "113732661573",
  appId: "1:113732661573:web:2a5df5910f87016a700e2c",
  measurementId: "G-CTGBT834CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const isDevelopment = (process.env.NODE_ENV === 'development' ? true : false)
console.log('is development : ',isDevelopment)

// const db = getFirestore(app);

// const getUID = async (db) => {
//   const uidCol = collection(db, 'id');
//   const uids = await getDocs(uidCol);
//   const uidList = uids.docs.map(doc => doc.data());
//   return uidList;
// }

const provider = new GoogleAuthProvider();
export { auth, provider };