// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8wDfZi0QDMeapP22xI5rdf1pDQRe6BXY",
  authDomain: "auth-firebase-context-ta-63f4d.firebaseapp.com",
  projectId: "auth-firebase-context-ta-63f4d",
  storageBucket: "auth-firebase-context-ta-63f4d.appspot.com",
  messagingSenderId: "580681837703",
  appId: "1:580681837703:web:1a1bf76b4063920bbc9c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;