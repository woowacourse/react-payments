import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdORkxfq-h5cUjoiLI8joLxiFtOGZAScw',
  authDomain: 'react-payments-e2305.firebaseapp.com',
  projectId: 'react-payments-e2305',
  storageBucket: 'react-payments-e2305.appspot.com',
  messagingSenderId: '1062609893204',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
