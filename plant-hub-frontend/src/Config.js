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
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
// const isDevelopment = (process.env.NODE_ENV === 'development' ? true : false)
// console.log('is development : ',isDevelopment)

// const db = getFirestore(app);

// const getUID = async (db) => {
//   const uidCol = collection(db, 'id');
//   const uids = await getDocs(uidCol);
//   const uidList = uids.docs.map(doc => doc.data());
//   return uidList;
// }

const provider = new GoogleAuthProvider();
export { auth, provider };