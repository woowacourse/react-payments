import firebase from '../firebase';
const db = firebase.firestore();

const Api = {
  card: {
    get: () => {
      return db.collection('cards').get();
    },
    post: (card) => {
      db.collection('cards')
        .doc(card.serialNumber)
        .set({
          ...card,
          timestamp: Date.now(),
        });
    },
    put: (card) => {
      db.collection('cards')
        .doc(card.serialNumber)
        .update({
          ...card,
          timestamp: Date.now(),
        });
    },
    delete: (serialNumber) => {
      db.collection('cards').doc(serialNumber).delete();
    },
  },
};

export default Api;
