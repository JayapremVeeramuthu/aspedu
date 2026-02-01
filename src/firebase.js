import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEl7obDiJ1yKt6J6_9cxM-Nyr6sWg21eM",
  authDomain: "aspedu-3fb9e.firebaseapp.com",
  projectId: "aspedu-3fb9e",
  storageBucket: "aspedu-3fb9e.firebasestorage.app",
  messagingSenderId: "410762314113",
  appId: "1:410762314113:web:b50ddbdf0acde041b52880",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
