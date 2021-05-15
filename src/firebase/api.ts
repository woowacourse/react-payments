import { Card } from '../types';
import fireStore from './firebase';

const COLLECTION = { CARDS: 'cards' };

export const fetchCards = async () => {
  try {
    let cards: Card[] = [];
    const docs = await fireStore.collection(COLLECTION.CARDS).get();

    docs.forEach(querySnapshot => cards.push(querySnapshot.data() as Card));

    return cards;
  } catch (e) {
    return [];
  }
};

export const addCard = async (card: Omit<Card, 'password' | 'CVC'>) => {
  try {
    await fireStore.collection(COLLECTION.CARDS).add(card);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
