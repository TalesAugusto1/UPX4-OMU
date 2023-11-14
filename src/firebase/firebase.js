// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMoFpdYFe7TRNkbj-0PTdEpBRZ1ixfOA",
  authDomain: "o-m-u-a00d5.firebaseapp.com",
  projectId: "o-m-u-a00d5",
  storageBucket: "o-m-u-a00d5.appspot.com",
  messagingSenderId: "265364103519",
  appId: "1:265364103519:web:51ba3030b0c458be7e16ea",
  measurementId: "G-STPNK00TCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);