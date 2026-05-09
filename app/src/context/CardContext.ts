import { createContext } from 'react';
import type { CardExpiryDateType } from '../types/cardExpiryDate';

export type CardCompany =
  | 'bc'
  | 'sinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kookmin'
  | '';

export type CardContextType = {
  cardNumber: string[];
  cardExpiryDate: CardExpiryDateType;
  cardCompany: CardCompany;
  cardCVC: string;
  cardPassword: string;
  setCardNumber: React.Dispatch<React.SetStateAction<CardContextType['cardNumber']>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardContextType['cardExpiryDate']>>;
  setCardCompany: React.Dispatch<React.SetStateAction<CardCompany>>;
  setCardCVC: React.Dispatch<React.SetStateAction<CardContextType['cardCVC']>>;
  setCardPassword: React.Dispatch<React.SetStateAction<CardContextType['cardPassword']>>;
};

export const CardContext = createContext<CardContextType | null>(null);
