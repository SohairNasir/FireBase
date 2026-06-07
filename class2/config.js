import { doc , getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
});
const db = getFirestore(app);
const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
const analytics = getAnalytics(app);

const usersCollectionRef = collection(db, 'users');

console.log(usersCollectionRef)

// // try {
// //     const docRef = await addDoc(collection(db , 'users'),{    first: "Ada",
// //     last: "Lovelace",
// //     born: 1815
// // })
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//      console.error("Error adding document: ", e);
// }
