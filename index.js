// Getting value from signup btn
let signBtn = document.getElementById("signBtn")
signBtn.addEventListener('click', () => {
    
        Swal.fire({
            title: 'Sign in',
            html: `<input type="text" id="signin" class="swal2-input" placeholder="Username">
            <input type="password" id="password" class="swal2-input" placeholder="Password">
            `,
            confirmButtonText: '<button class="main-signin" id="signupBtnMain" onclick="signupBtnMain(signin, password)">Sign in</button>',
            focusConfirm: false,
            preConfirm: () => {
                const signin = Swal.getPopup().querySelector('#signin').value
                const password = Swal.getPopup().querySelector('#password').value
                if (!signin || !password) {
                    Swal.showValidationMessage(`Please enter signin and password`)
                }
                return { signin: signin, password: password }
            }
        }).then((result) => {
            const emailValue = result.value.signin;
            const passwordValue = result.value.password;
            value(emailValue, passwordValue )
            return {emailValue, passwordValue}
        })
        
})

let  value = async (emailValue, passwordValue) => {
    let email = await emailValue;
    let password = await passwordValue;
    console.log(await email);
    console.log(await password);
    signupBtnMain(email, password)
    return email, password
}

// nam(email, password)




import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
// getAnalytics,
getAuth, 
onAuthStateChanged,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {collection, setDoc,doc,addDoc,getFirestore, } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

    // Import the functions you need from the SDKs you need
// import { value } from "./app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCgjMcOrpNR6BtyZRvP-1IbN9SDd_nZEZY",
      authDomain: "smit-attendportalance.firebaseapp.com",
      projectId: "smit-attendportalance",
      storageBucket: "smit-attendportalance.appspot.com",
      messagingSenderId: "1089311772403",
      appId: "1:1089311772403:web:43be1a2e2b95813a54f186",
      measurementId: "G-5NX5YL68VR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Set an authentication state observer and get user data
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});


// Getting value from alert
    let signupBtnMain =  async (email, password) => {
    
         signInWithEmailAndPassword(auth,  await email, await password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }


console.log("HELLO");

// window.signupBtn= signupBtn














































// Ahmed


// //  https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png
 
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { 
//    signInWithEmailAndPassword,
//    getAuth,


// } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyCgjMcOrpNR6BtyZRvP-1IbN9SDd_nZEZY",
//     authDomain: "smit-attendportalance.firebaseapp.com",
//     projectId: "smit-attendportalance",
//     storageBucket: "smit-attendportalance.appspot.com",
//     messagingSenderId: "1089311772403",
//     appId: "1:1089311772403:web:43be1a2e2b95813a54f186",
//     measurementId: "G-5NX5YL68VR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
    
// const auth = getAuth();

    
// let login = document.getElementById("login-button")

// login.addEventListener('click',()=>{

// //   const login_email = document.getElementById("login-email")
// //   const login_password = document.getElementById("login-password")

//   signInWithEmailAndPassword(auth, login_email.value, login_password.value)
//   .then(async(userCredential) => {
//     // Signed in 
//     const user = userCredential.user;

//     location.replace("admin_attendance.html")
//     setTimeout(()=>{window.location="index.html"},2000)
    
//     console.log("rigister") ;
//   })
//   .catch((error) => {
    
//     const errorCode = error.code;
//     if(errorCode){
//       alert("wrong email and password")
//     }
//     const errorMessage = error.message;
//     // if(errorMessage){
//     //   alert("")
//     // }
//     console.log(errorMessage);
//   });


// })