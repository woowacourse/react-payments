import { Card } from '../types';
import fireStore from './firebase';

const COLLECTION = { CARDS: 'cards' };

export interface StoredCard extends Card {
  id: string;
}

export const fetchCards = async () => {
  try {
    let cards: StoredCard[] = [];
    const docs = await fireStore.collection(COLLECTION.CARDS).get();

    docs.forEach(querySnapshot =>
      cards.push({ id: querySnapshot.id, ...(querySnapshot.data() as Card) } as StoredCard)
    );

    return cards;
  } catch (e) {
    return {};
  }
};

export const addCard = async (card: Omit<Card, 'password' | 'CVC'>) => {
  try {
    await fireStore.collection(COLLECTION.CARDS).add(card);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw new Error('카드를 추가하지 못했습니다!');
  }
};
