  import { getFirestore, deleteDoc, doc , setDoc , addDoc , collection , query , where , getDocs} from  "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
  import { getDatabase , set ,ref } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getAuth,signOut,onAuthStateChanged, createUserWithEmailAndPassword , signInWithEmailAndPassword, deleteUser } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  const firebaseConfig = {
  apiKey: "AIzaSyDds8wTDfqD48rv-0s6ZuJwD8YDEwc_ywQ",
  authDomain: "e-commerce-ee633.firebaseapp.com",
  projectId: "e-commerce-ee633",
  storageBucket: "e-commerce-ee633.firebasestorage.app",
  messagingSenderId: "842522905675",
  appId: "1:842522905675:web:1c22816f379c0951e151ce",
  measurementId: "G-5JVWMBTX9Q"
};    

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);  
  const db = getFirestore(app);  

export {where,query,doc , addDoc ,onAuthStateChanged ,auth,deleteDoc , collection , setDoc , getDocs , db , createUserWithEmailAndPassword , signInWithEmailAndPassword ,getAuth , deleteUser ,signOut}