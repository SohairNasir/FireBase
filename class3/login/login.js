import { auth, signInWithEmailAndPassword } from '../signup/config.js';

let emailInput = document.getElementById('email');
let passInput = document.getElementById('password');
let submitbtn = document.getElementById('login-btn'); 
let inputsNotValid = document.getElementsByClassName('Error-filed');

let sigenal = [false, false];

emailInput.addEventListener('input', () => {
    if (sigenal[0] == true) {
        emailInput.style.border = '1px solid #33333c'; 
        inputsNotValid[0].style.opacity = '0'; 
        sigenal[0] = false;
    }
});

passInput.addEventListener('input', () => {
    if (sigenal[1] == true) {
        passInput.style.border = '1px solid #33333c'; 
        inputsNotValid[1].style.opacity = '0'; 
        sigenal[1] = false;
    }
});

submitbtn.addEventListener('click', loginUser);

function loginUser(event) {
    event.preventDefault(); 
    sigenal = [false, false]; 

    let email = emailInput.value.trim();
    let password = passInput.value.trim();

    if (email === "" || !email.includes("@")) {
        emailInput.style.border = '2px solid red';
        inputsNotValid[0].style.opacity = '1';
        sigenal[0] = true;
    }
    
    if (password === "" || password.length < 12) {
        passInput.style.border = '2px solid red';
        inputsNotValid[1].style.opacity = '1';
        sigenal[1] = true;
    }

    if (sigenal[0] === false && sigenal[1] === false) {
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.uid);
                alert('Login Successful!');
                window.location.assign('../../dashboard/index.html');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.code);

                if (error.code == 'auth/invalid-email' || error.code == 'auth/user-not-found') {
                    emailInput.style.border = '2px solid red';
                    inputsNotValid[0].style.opacity = '1';
                    sigenal[0] = true;
                }
                
                if (error.code == 'auth/wrong-password' || error.code == 'auth/invalid-credential') {
                    passInput.style.border = '2px solid red';
                    inputsNotValid[1].style.opacity = '1';
                    sigenal[1] = true;
                }
            });
    }

    console.log(email, password);
}


// import { auth } from '../signup/config.js'; // Use your existing auth import path
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; // Ensure SDK path matches your config

// onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     window.location.assign('../login/login.html');
//   }
// });