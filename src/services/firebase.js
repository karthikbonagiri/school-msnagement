import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9kKnKWItbw5pRpxWmEGWvbnf9IBT5ldc",
  authDomain: "school-management-ac077.firebaseapp.com",
  projectId: "school-management-ac077",
  storageBucket: "school-management-ac077.firebasestorage.app",
  messagingSenderId: "430517369484",
  appId: "1:430517369484:web:852f6deb4eae6ad6af59a9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
