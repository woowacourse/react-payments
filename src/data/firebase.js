import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSID,
  appId: process.env.REACT_APP_APPID,
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
