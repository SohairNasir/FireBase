    import{auth , createUserWithEmailAndPassword} from'./config.js'
    document.getElementsByTagName('body')[0].style.background='black'

    let EmailRole = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/ // this @gmail.com regex only
    let PasswordRole = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{12,128}$/

    let emailInput = document.querySelector('#email')
    let passInput  = document.querySelector('#password')
    let confirmPassInput = document.querySelector('#confirm-pass')
    let submitbtn = document.querySelector('#submit-btn')
    let inputsNotValid = document.getElementsByClassName('Error-filed')
    let allinputs = document.getElementsByClassName('all-inputs')
    let sigenal = [false , false ,false]

//  reset of red border and inValid text

function setupInputReset(index){
    allinputs[index].addEventListener('input',()=>{
        if(sigenal[index]){
    allinputs[index].style.border='2px solid black'
    inputsNotValid[index].innerText=''
    sigenal[index] = false            
        }
    })
   }

   setupInputReset(0)
setupInputReset(1)
setupInputReset(2)

submitbtn.addEventListener('click',checkdata)

async function checkdata(event) {
    
    event.preventDefault()
    let {value : email} = emailInput
    let {value : password} = passInput 
    let {value : confirmPass} = confirmPassInput

    // check email & pass
    let validEmail  = EmailRole.test(email)
    let validPass   = PasswordRole.test(password)
    let Confirmpass = validEmail && password == confirmPass 

///  write if else check pass and email & confrim pass

   if (validEmail) {
       emailInput.style.border='2px solid green'
   } else {
    console.error(new Error(' this email not valid for signup'))
    emailInput.style.border='2px solid red'
    inputsNotValid[0].innerText='this email is already exiting'
    sigenal[0] = true
   }
   
   if (validPass) {
       passInput.style.border='2px solid green'
   } else {
    console.error(new Error(' this password not valid for signup'))
    passInput.style.border='2px solid red'
    inputsNotValid[1].innerText='Password must be 12+ secure characters.'
    sigenal[1] = true
   }
   
   if (Confirmpass) {
       confirmPassInput.style.border='2px solid green'
   } else {
    console.error(new Error(' this password not match'))
    confirmPassInput.style.border='2px solid red'
    inputsNotValid[2].innerText='Passwords do not match.'
    sigenal[2] = true
   }

    // firebase to check data and set new user
 if(email && password && confirmPass !== ""){

     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;         
         localStorage.setItem('uid',JSON.stringify(user.uid))
         window.location.replace('../login/login.html')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('already')
            // ..
        });
    }


}

// import { auth } from '../signup/config.js'; // Use your existing auth import path
// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; // Ensure SDK path matches your config

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     window.location.assign('../../dashboard/index.html');
//   }
// });

















































    // checkEmail.test(email) ? emailInput.style.border='2px solid green':emailInput.style.border='2px solid red' , 
    // validPass ? passInput.style.border='2px solid green':passInput.style.border='2px solid red' ,  
    // validPass && password == confirmPass ? confirmPassInput.style.border='2px solid green': confirmPassInput.style.border='2px solid red',
    // console.log(validPass)
  
    //  if(checkEmail.test(email) && validPass && password == confirmPass ){

    // let addUser = await createUserWithEmailAndPassword(auth , email , password)
    // .then((user)=>{
    // }).catch((error)=>{
    //    console.error(new Error('this error'+ "   "+ error))
    //            emailNotValid.style.opacity='1'
    //            console.log('.then error')
 
    // })     

    //     console.log('runing')

    //  }  




























// async function checkInputs(event) {

//         event.preventDefault();
//         let {value : email} = document.getElementById('email')
//         let {value : password} = document.getElementById('password')
//         let {value : confirmpass}= document.getElementById('confirm-pass')
//         let validEmail = checkEmail.test(email)
//         let validPass  = checkPassword.test(password)
//         let confirmpassword = validPass && password == confirmpass  

//         if (validEmail && confirmpassword){
//               await createUserWithEmailAndPassword(auth , email , password)
//             .then ((user) =>{

//             console.log(user.uid)
//             emailInput.style.border='2px solid black'
//              passInput.style.border='2px solid black'
//             confirmPassInput.style.border='2px solid black'
//             emailInput.value=''
//             passInput.value=''
//             confirmPassInput.value=''            
//             console.log('go to dashboard')
//         })
            
//           .catch ((error) => {
//                 console.log(error)
//             })

//         }else{
//         if (!validEmail) {
        
//             emailInput.style.border='2px solid red'
//             console.log('your email is not found')  // this work done now
     
//         }else{emailInput.style.border='2px solid green'}
//         if (!validPass){
     
//             passInput.style.border='2px solid red'
//             console.log('check you pass in uppercase , lowerCase , @!#%^etc,number')
     
//         }else{
     
//             passInput.style.border='2px solid green'
     
//         }if(!confirmpassword){
     
//             confirmPassInput.style.border='2px solid red'
     
//         }else{confirmPassInput.style.border='2px solid green'}
// }   

// // Sohair@329256 check pass
        
//         console.log(email,password , validEmail, validPass)
// }