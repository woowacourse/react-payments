import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSvBc45mzzSXxLoTERZabtaT6lE96A1ME',
  authDomain: 'react-payments-c696f.firebaseapp.com',
  projectId: 'react-payments-c696f',
  storageBucket: 'react-payments-c696f.appspot.com',
  messagingSenderId: '723014641724',
  appId: '1:723014641724:web:2d1d76b9ce7009d687fb39',
};

firebase.initializeApp(firebaseConfig);

const fireStore = firebase.firestore();

export default fireStore;
