import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDLfeZyfEh83td0j8XlPatoaizzihpwD9w",
  authDomain: "brendoplan-2f8b1.firebaseapp.com",
  databaseURL: "https://brendoplan-2f8b1.firebaseio.com",
  projectId: "brendoplan-2f8b1",
  storageBucket: "brendoplan-2f8b1.appspot.com",
  messagingSenderId: "669912861957",
  appId: "1:669912861957:web:8879fbf91bb023f637fb6c",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
