import { firestore } from './firebase';

const getCardsRequest = async () => {
  try {
    let cardsData = [];
    const snapshot = await firestore.collection('cards').get();
    snapshot.forEach((doc) => cardsData.push({ id: doc.id, data: doc.data() }));

    return cardsData;
  } catch (error) {
    throw new Error(error);
  }
};

const getCardByIdRequest = async (cardId) => {
  try {
    const cardData = await firestore.collection('cards').doc(cardId).get();

    return cardData;
  } catch (error) {
    throw new Error(error);
  }
};

const addCardRequest = (cardData) => {
  try {
    firestore.collection('cards').add(cardData);
  } catch (error) {
    throw new Error(error);
  }
};

const updateCardRequest = async (cardId, newData) => {
  try {
    await firestore.collection('cards').doc(cardId).update(newData);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCardRequest = (cardId) => {
  try {
    firestore.collection('cards').doc(cardId).delete();
  } catch (error) {
    throw new Error(error);
  }
};

export { getCardsRequest, getCardByIdRequest, addCardRequest, updateCardRequest, deleteCardRequest };
