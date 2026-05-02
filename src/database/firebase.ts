import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "app-lembrete-mobile.firebaseapp.com",
  projectId: "app-lembrete-mobile",
  storageBucket: "app-lembrete-mobile.appspot.com",
  messagingSenderId: "441460339109",
  appId: "1:441460339109:web:6de3ff82ed0a8676a9384c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);