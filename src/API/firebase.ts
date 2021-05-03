import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCh9qm3BfhNaQ-RHd4ll-lnuyTgk-A_HI',
  authDomain: 'wtc-react-payments.firebaseapp.com',
  projectId: 'wtc-react-payments',
  storageBucket: 'wtc-react-payments.appspot.com',
  messagingSenderId: '715243889950',
  appId: '1:715243889950:web:857eb09d02bcc1c2cc550f',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const getFirestoreTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
