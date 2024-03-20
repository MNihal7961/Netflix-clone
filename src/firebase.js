import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDttyEImYJUBM9xsE1IhJ8U6P2dbtxEGQY",
  authDomain: "netflix-clone-5806c.firebaseapp.com",
  projectId: "netflix-clone-5806c",
  storageBucket: "netflix-clone-5806c.appspot.com",
  messagingSenderId: "53339639882",
  appId: "1:53339639882:web:715fdbe695f11c3b7216b3",
  measurementId: "G-43FCJCZN2G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);