import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBLpj2ny0zP3hZm8CPO6kLqKDgXr8LSpJ0",
  authDomain: "chat-app-5c9db.firebaseapp.com",
  projectId: "chat-app-5c9db",
  storageBucket: "chat-app-5c9db.appspot.com",
  messagingSenderId: "437267894274",
  appId: "1:437267894274:web:1522d044c92e0baba1d71b",
  measurementId: "G-M1WV65XVEN"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);