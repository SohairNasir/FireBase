  import { getFirestore , doc , setDoc} from  "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
  import { getDatabase , set ,ref } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  const firebaseConfig = {
    apiKey: "AIzaSyAh5Oovtx27_mxs-0uCqAsvHviVmwO-sFw",
    authDomain: "myfirstproject-92472.firebaseapp.com",
    projectId: "myfirstproject-92472",
    storageBucket: "myfirstproject-92472.firebasestorage.app",
    messagingSenderId: "356849932444",
    appId: "1:356849932444:web:62101bf9a11b52702af559",
    measurementId: "G-Q77VE7JY3D",
    // databaseURL: "https://DATABASE_NAME.firebaseio.com",

  };    

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);  
  const db = getFirestore(app);


export {doc , setDoc , db , createUserWithEmailAndPassword , auth ,signInWithEmailAndPassword }
