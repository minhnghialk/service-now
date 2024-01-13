import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId:process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCBVj-ZBdOcQtBm1nz3Au759GvbANS5xqE",
  authDomain: "react-phone-auth-938ee.firebaseapp.com",
  projectId: "react-phone-auth-938ee",
  storageBucket: "react-phone-auth-938ee.appspot.com",
  messagingSenderId: "360555894176",
  appId: "1:360555894176:web:41ef8e11413bdef941c0c5",
  measurementId: "G-J9R7C3257W",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export { firebase, auth };
