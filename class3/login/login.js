import { auth, signInWithEmailAndPassword  } from '../signup/config.js';

let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/
let emailInput = document.querySelector('#email')
let passInput  = document.querySelector('#password')
let loginBtn   = document.querySelector('#login-btn')
let allinputs  = document.querySelectorAll('.all-inputs')
let errorFiled = document.querySelectorAll('.Error-filed')
let sigenal    = [false , false]

function resetInputsStyle(index) {
    
    allinputs[index].addEventListener('input', () => {
        if(sigenal[index]){
            allinputs[index].style.border='1px solid #33333c'
            errorFiled[index].innerText=''
            sigenal[index] = false}})
}
resetInputsStyle(0)
resetInputsStyle(1)

async function login(event) {
    event.preventDefault()
    let email = emailInput.value.replace(/\s+/g , '')
    let {value : pass } = passInput
    let checkEmail = emailRegex.test(email)
  
if(!emailRegex.test(email)){
    emailInput.style.border='1px solid red'
    errorFiled[0].innerText='Please enter a valid email address.'
    sigenal[0] = true
    if(email == ''){
    emailInput.style.border='1px solid red'
    errorFiled[0].innerText='Email cannot be empty'
    sigenal[0] = true
    console.log(errorFiled)
}
}
if(pass === ''){
    passInput.style.border='1px solid red'
    errorFiled[1].innerText='Password cannot be empty'
    sigenal[1] = true
}if(checkEmail && pass){
    console.log('runing')
    loginBtn.innerHTML=`<span class="loader"></span>`
  await signInWithEmailAndPassword(auth , email , pass)
   .then((userCredential) => {
        emailInput.value =''
        passInput.value  =''
        loginBtn.innerText=`Login`
   })
   .catch((error) => {

        loginBtn.innerText=`Login`
        if (error.code == 'auth/user-not-found') {
            errorFiled[0].innerText='This email is not registered. Please sign up first'
            emailInput.style.border='1px solid red'
            sigenal[0] = true
        }else{
            errorFiled[1].innerText='your pass is incorrect'
            passInput.style.border='1px solid red'
            sigenal[1] = true
        }
        console.error(error.message)
   })

    console.log('runing')
}

}loginBtn.addEventListener('click',login)

//  see pass





// linkedin post 


   let seePassIcon = document.getElementById('togglePassword')
//    let seeNosee = true

   seePassIcon.addEventListener('click' , ()=>{
    
    passInput.type = (passInput.type === 'password' ? 'text' : 'password')
    // seeNosee ? (passInput.type = 'text' , seeNosee = false) : (passInput.type = 'password' , seeNosee = true)
    
    // if(seeNosee){
    //     passInput.type = 'text'
    //     seeNosee = false
    //  }else{
    //     passInput.type = 'password'
    //     seeNosee = true }
       
    })











// let emailInput = document.getElementById('email');
// let passInput = document.getElementById('password');
// let submitbtn = document.getElementById('login-btn'); 
// let inputsNotValid = document.getElementsByClassName('Error-filed');

// let sigenal = [false, false];

// emailInput.addEventListener('input', () => {
//     if (sigenal[0] == true) {
//         emailInput.style.border = '1px solid #33333c'; 
//         inputsNotValid[0].style.opacity = '0'; 
//         sigenal[0] = false;
//     }
// });

// passInput.addEventListener('input', () => {
//     if (sigenal[1] == true) {
//         passInput.style.border = '1px solid #33333c'; 
//         inputsNotValid[1].style.opacity = '0'; 
//         sigenal[1] = false;
//     }
// });

// submitbtn.addEventListener('click', loginUser);

// function loginUser(event) {
//     event.preventDefault(); 
//     sigenal = [false, false]; 

//     let email = emailInput.value.trim();
//     let password = passInput.value.trim();

//     if (email === "" || !email.includes("@")) {
//         emailInput.style.border = '2px solid red';
//         inputsNotValid[0].style.opacity = '1';
//         sigenal[0] = true;
//     }
    
//     if (password === "" || password.length < 12) {
//         passInput.style.border = '2px solid red';
//         inputsNotValid[1].style.opacity = '1';
//         sigenal[1] = true;
//     }

//     if (sigenal[0] === false && sigenal[1] === false) {
        
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.log(userCredential.user.uid);
//                 alert('Login Successful!');
//                 window.location.assign('../../dashboard/index.html');
//             })
//             .catch((error) => {
//                 console.log(error.code);
//                 alert(error.code);

//                 if (error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found') {
//                     emailInput.style.border = '2px solid red';
//                     inputsNotValid[0].style.opacity = '1';
//                     sigenal[0] = true;
//                 }
                
//                 if (error.code == 'auth/wrong-password' || error.code == 'auth/invalid-credential') {
//                     passInput.style.border = '2px solid red';
//                     inputsNotValid[1].style.opacity = '1';
//                     sigenal[1] = true;
//                 }
//             });
//     }

//     console.log(email, password);
// }


// import { auth } from '../signup/config.js'; // Use your existing auth import path
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; // Ensure SDK path matches your config

// onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     window.location.assign('../login/login.html');
//   }
// });