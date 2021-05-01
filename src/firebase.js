import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDsAIiYYDxtHrkyBLwCJF3QB3k5f7GqxoU',
  authDomain: 'react-payments-94838.firebaseapp.com',
  projectId: 'react-payments-94838',
  storageBucket: 'react-payments-94838.appspot.com',
  messagingSenderId: '556815778307',
  appId: '1:556815778307:web:5d710a76f63681e4cf0436',
  measurementId: 'G-W9W01YJ089',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
