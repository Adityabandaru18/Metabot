// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1-LlvI4Ww25FxLlm7c0DXUNvu3KyhiqQ",
  authDomain: "metabot-65346.firebaseapp.com",
  projectId: "metabot-65346",
  storageBucket: "metabot-65346.appspot.com",
  messagingSenderId: "23102042926",
  appId: "1:23102042926:web:4535651b51700569c2c0bf",
  measurementId: "G-XLZQ3HK6TV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);