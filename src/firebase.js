import firebase from "firebase/app"
import "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB26D96qekSdZ-eHAkkUJU-kCft3iHMgys",
    authDomain: "profile-5b87a.firebaseapp.com",
    databaseURL: "https://profile-5b87a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "profile-5b87a",
    storageBucket: "profile-5b87a.appspot.com",
    messagingSenderId: "988496577902",
    appId: "1:988496577902:web:3c6e19a16bd9659d1eed7f"
  };

  firebase.initializeApp(firebaseConfig)
  const databaseRef = firebase.database().ref()
  export const notesRef = databaseRef.child("notes")
  export default firebase 