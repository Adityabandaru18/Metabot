import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1-LlvI4Ww25FxLlm7c0DXUNvu3KyhiqQ",
  authDomain: "metabot-65346.firebaseapp.com",
  projectId: "metabot-65346",
  storageBucket: "metabot-65346.appspot.com",
  messagingSenderId: "23102042926",
  appId: "1:23102042926:web:4535651b51700569c2c0bf",
  measurementId: "G-XLZQ3HK6TV"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);