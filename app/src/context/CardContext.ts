import { createContext } from 'react';
import type { CardExpiryDateType } from '../types/cardExpiryDate';

export type CardContextType = {
  cardNumber: string[];
  cardExpiryDate: CardExpiryDateType;
  networkBrand: string;
  setCardNumber: React.Dispatch<React.SetStateAction<CardContextType['cardNumber']>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardContextType['cardExpiryDate']>>;
  setNetworkBrand: React.Dispatch<React.SetStateAction<string>>;
};

export const CardContext = createContext<CardContextType | null>(null);
