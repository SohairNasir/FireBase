import { auth, createUserWithEmailAndPassword } from "./confi.JS";
document.getElementById('form-signup').addEventListener('submit' , Signup)

function Signup(event) { 
    event.preventDefault()
    let  {value :email }   =document.getElementById('email') 
    let  {value :password} = document.getElementById('password') 
    console.log(email,password)


// console.log(auth , createUserWithEmailAndPassword)

// createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    console.log('runing')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ..
  });
}


