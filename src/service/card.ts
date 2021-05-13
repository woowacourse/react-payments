import API from '../API';
import { Card, CardForSubmit } from '../types';

export const requestCards = () => {
  try {
    return API.getAll<Card>('cards');
  } catch (error) {
    console.error('API ERROR(requestCards): ' + error);
    throw error;
  }
};

export const requestCard = (id: string) => {
  try {
    return API.getById<Card>(id, 'cards');
  } catch (error) {
    console.error('API ERROR(requestCard): ' + error);
    throw error;
  }
};

export const requestAddCard = (card: CardForSubmit) => {
  try {
    return API.add<CardForSubmit>(card, 'cards');
  } catch (error) {
    console.error('API ERROR(requestAddCard): ' + error);
    throw error;
  }
};

export const requestEditNickname = (nickname: string, id: string) => {
  try {
    return API.editById<Card>({ nickname }, id, 'cards');
  } catch (error) {
    console.error('API ERROR(requestEditNickname): ' + error);
    throw error;
  }
};

export const requestDeleteCard = (id: string) => {
  try {
    return API.deleteById(id, 'cards');
  } catch (error) {
    console.error('API ERROR(requestDeleteCard): ' + error);
    throw error;
  }
};
