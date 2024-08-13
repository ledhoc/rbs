// Import the functions you need from the SDKs you need
import { Contact } from "@/types/contact";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  query,
  getFirestore,
  orderBy,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  OrderByDirection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJPZ9PIl6DRWoeovL_dm8F-pFFR78Yask",
  authDomain: "rbssys-99.firebaseapp.com",
  databaseURL:
    "https://rbssys-99-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rbssys-99",
  storageBucket: "rbssys-99.appspot.com",
  messagingSenderId: "306051753691",
  appId: "1:306051753691:web:7644056bea911d4b8d4efe",
  measurementId: "G-9HYDHF5LRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const createContactApi = async (data: Contact) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), data);
    if (docRef) {
      return docRef?.id;
    }
  } catch (err) {
    console.log(err);
  }
};
