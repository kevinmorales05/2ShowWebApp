import app from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD93r5aj3RecCnnj5e0O8ER22xbTpqvQoE",
    authDomain: "showwebapp-ba70f.firebaseapp.com",
    databaseURL: "https://showwebapp-ba70f-default-rtdb.firebaseio.com",
    projectId: "showwebapp-ba70f",
    storageBucket: "showwebapp-ba70f.appspot.com",
    messagingSenderId: "1069588292306",
    appId: "1:1069588292306:web:f56bcbc49bc94cac70030b"
  };
  // Initialize Firebase
app.initializeApp(firebaseConfig);
app.analytics();

const db = app.database();
const auth = app.auth();
const storage = app.storage();

export  { db, auth, storage };
