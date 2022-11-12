import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
// getAnalytics,
getAuth, 
onAuthStateChanged,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {collection, setDoc,doc,addDoc,getFirestore, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

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
const db = getFirestore();


console.log("HELLO");
let courseTime = document.getElementById("courseTime");
let classShedule = document.getElementById("classShedule");
let teacherName = document.getElementById("teacherName");
let sectionName = document.getElementById("sectionName");
let courseName = document.getElementById("courseName");
let batchNumber = document.getElementById("batchNumber");
let submitValue = document.getElementById("create");

// Upload data
submitValue.addEventListener('click', async () => {
    console.log(courseTime);
    
    
    const docRef = await addDoc(collection(db, "registerCourse"), {
    courseName: courseName.value,
    classShedule: classShedule.value,
    teacherName: teacherName.value,
    sectionName: sectionName.value,
    courseTime: courseTime.value,
    batchNumber: batchNumber.value
  });
  console.log("Document written with ID: ", docRef.id);

  courseName.value="";
    classShedule.value="";
    teacherName.value="";
    sectionName.value="";
    courseTime.value="";
    batchNumber.value="";
})

