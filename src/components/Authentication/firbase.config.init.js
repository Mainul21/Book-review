// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgiC6RFc_rhXkR4OBdu9SGBiwuidE63iM",
  authDomain: "book-review-3a157.firebaseapp.com",
  projectId: "book-review-3a157",
  storageBucket: "book-review-3a157.appspot.com",
  messagingSenderId: "181674261764",
  appId: "1:181674261764:web:777d8246ee3e4396626451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth