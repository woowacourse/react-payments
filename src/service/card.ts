import API from '../API';
import { Card } from '../types';

export const requestCard = async (id: string) => API.getById<Card>(id, 'cards');

export const requestCards = () => API.getAll<Card>('cards');

export const requestAddCard = (card: Card) => API.add<Card>(card, 'cards');

export const requestEditNickname = (nickname: string, id: string) => API.editById<Card>({ nickname }, id, 'cards');
