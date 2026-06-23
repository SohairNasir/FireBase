import{signOut,onAuthStateChanged,auth,deleteUser,getAuth,deleteDoc , query , collection , db,where, getDocs, doc}from"../signup/config.js"
let delaccbtn = document.querySelector('#delAcc-btn')
let logoutbtn   = document.querySelector('#logout-btn')
let currentUser ;
let uid = JSON.parse(localStorage.getItem('uid'))



async function getUser() {
    try {
    let q = query(collection(db , 'userData'), where('uid' , '==' , uid ))
    let querySnapshot = await getDocs(q)
      for (const element of querySnapshot.docs) {
            currentUser = { id: element.id, ...element.data() }
            console.log("Deleting data for:", currentUser)
            await deleteData(currentUser.id) 
        }
    deleteUserAccount()
    } catch (error) {
        console.error(new Error('get user data form data base in error '))
        console.log(error)}
} delaccbtn.addEventListener('click' , getUser)
async function deleteData(docid) {
            console.log(docid)
     await deleteDoc(doc(db , 'userData', docid))
     .then(()=>{
        console.log('this code runing okay delete data ')
     })
     .catch((error) => {
      console.log(error)  
     })
}
async function deleteUserAccount() {
try {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)
    await deleteUser(user)
    .then(()=>{
        console.log("successfully account delete.");
        localStorage.removeItem('uid')
        window.location.replace('../signup/signup.html')
})
} catch (error) {
    console.log(error)
}    
}

async function userSignOut() {
    try {
        console.log('signOut done')
        await signOut(auth)
        
    } catch (error) {
        console.log(error)
    }
}

logoutbtn.addEventListener('click',userSignOut)

onAuthStateChanged(auth,(user)=>{
    if (!user) {
     window.location.replace('../signup/signup.html')

    }
})