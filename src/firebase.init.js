// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfzjJLF0PsrgBRQxQMzbyZ5JIMbYwQnys",
  authDomain: "azmira-photor-bazar.firebaseapp.com",
  projectId: "azmira-photor-bazar",
  storageBucket: "azmira-photor-bazar.appspot.com",
  messagingSenderId: "335474191413",
  appId: "1:335474191413:web:84363a44bb938b5969d57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;