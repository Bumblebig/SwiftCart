import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SWIFTCART_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_SWIFTCART_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_SWIFTCART_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SWIFTCART_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_SWIFTCART_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_SWIFTCART_FIREBASE_APP_ID,
};

// Init firebase app
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);
