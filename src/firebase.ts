import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALwYq3RetYoqWI22QeS6s54EJNSX8DAE8",
  authDomain: "fir-twitter-project.firebaseapp.com",
  projectId: "fir-twitter-project",
  storageBucket: "fir-twitter-project.appspot.com",
  messagingSenderId: "906773925237",
  appId: "1:906773925237:web:8b927631c559bcba48173c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
