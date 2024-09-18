import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoqE_s4XUUVOctUIS-q77Ux0VLDo1FZAs",
  authDomain: "test-8f0d8.firebaseapp.com",
  projectId: "test-8f0d8",
  storageBucket: "test-8f0d8.appspot.com",
  messagingSenderId: "318263540853",
  appId: "1:318263540853:web:295fc5ea093e78e33a0c3c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
