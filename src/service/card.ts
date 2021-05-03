import API from '../API';
import { getFirestoreTimestamp } from '../API/firebase';
import { Card, CardForSubmit } from '../types';
import { FieldValue } from '@firebase/firestore-types';

export const requestCard = async (id: string) => API.getById<Card>(id, 'cards');

export const requestCards = () => API.getAll<Card>('cards');

export const requestAddCard = async (card: CardForSubmit) => {
  const docId = await API.add<CardForSubmit & { createdAt: FieldValue }>(
    { ...card, createdAt: getFirestoreTimestamp() },
    'cards'
  );
  return docId;
};

export const requestEditNickname = (nickname: string, id: string) => API.editById<Card>({ nickname }, id, 'cards');

export const requestDeleteCard = (id: string) => API.deleteById<Card>(id, 'cards');
