import { createContext } from 'react';
import type { CardExpiryDateType } from '../types/cardExpiryDate';

export type NetworkBrand = 'visa' | 'master' | '';

export type CardContextType = {
  cardNumber: string[];
  cardExpiryDate: CardExpiryDateType;
  networkBrand: NetworkBrand;
  setCardNumber: React.Dispatch<React.SetStateAction<CardContextType['cardNumber']>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardContextType['cardExpiryDate']>>;
  setNetworkBrand: React.Dispatch<React.SetStateAction<NetworkBrand>>;
};

export const CardContext = createContext<CardContextType | null>(null);
