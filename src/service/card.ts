import API from '../API';
import { Card, CardForSubmit } from '../types';

export const requestCard = async (id: string) => API.getById<Card>(id, 'cards');

export const requestCards = () => API.getAll<Card>('cards');

export const requestAddCard = (card: CardForSubmit) => API.add<CardForSubmit>(card, 'cards');

export const requestEditNickname = (nickname: string, id: string) => API.editById<Card>({ nickname }, id, 'cards');

export const requestDeleteCard = (id: string) => API.deleteById(id, 'cards');
