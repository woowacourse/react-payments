import { Card } from '../types/card';
import { http } from './api';

export type RegisterCardRequest = Omit<Card, 'id'>;
export type RegisterCardResponse = Pick<Card, 'id'>;

export const registerCard = async (data: RegisterCardRequest): Promise<RegisterCardResponse> => {
  return await http.post<RegisterCardResponse>(`/cards`, data);
};

export type CardListResponse = Omit<Card, 'cvc'>[];

export const getCardList = async (): Promise<CardListResponse> => {
  return await http.get<CardListResponse>(`/cards`);
};

export const deleteCard = async (id: string): Promise<void> => {
  return await http.delete<void>(`/cards/${id}`);
};
