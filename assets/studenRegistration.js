import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    // getAnalytics,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { collection, setDoc, doc, addDoc, getFirestore, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";;

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


// Get data from firestore
const q = query(collection(db, "registerCourse"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let courseName = document.getElementById("courseName")
        let cn = doc.data().courseName
        courseName.innerHTML += `<option value="${cn}">${cn}</option>`
        console.log(cn);

        id(doc.id)
    });
});
let id = async (usr) => {
    console.log(await usr);
    // usr = await usr;
}

let create = document.getElementById("create");
let picture = document.getElementById("picture");
let name = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let rollNumber = document.getElementById("rollNumber");
let contactNumber = document.getElementById("contactNumber");
let cnic = document.getElementById("cnic");
let courseName = document.getElementById("courseName");
let slectClass = document.getElementById("slectClass");

create.addEventListener('click', async () => {
    
// Upload Picture to Storage

    let file = picture.files[0]
    const storage = getStorage();

    const storageRef = ref(storage, `images/${cnic.value}.jpg`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                console.log('File available at', downloadURL);
                const washingtonRef = doc(db, "register", "DC");

                // upload data to Firestore

                const docRef = await addDoc(collection(db, "studentRegisteration"), {
                    name: name.value,
                    countfatherNamery: fatherName.value,
                    rollNumber: rollNumber.value,
                    contactNumber: contactNumber.value,
                    cnic: cnic.value,
                    courseName: courseName.value,
                    slectClass: slectClass.value,
                    picture: downloadURL
                  });
                  name.value = "";
                  fatherName.value = "";
                  rollNumber.value = "";
                  contactNumber.value = "";
                  cnic.value = "";
                  courseName.value= "";
                  slectClass.value = "";
                  console.log("Document written with ID: ", docRef.id);
            });
        }
    );



})

