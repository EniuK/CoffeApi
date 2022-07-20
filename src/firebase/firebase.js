import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqyAJIV5XIzxjNnnilc6t6ViJcvZU-4hE",
  authDomain: "coffe-eniuk-project.firebaseapp.com",
  projectId: "coffe-eniuk-project",
  storageBucket: "coffe-eniuk-project.appspot.com",
  messagingSenderId: "762264336458",
  appId: "1:762264336458:web:f073e80ec02b5b9dd10eb3",
  measurementId: "G-ZQ54P7KX0P",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();
export const db = getDatabase()
export default database;

