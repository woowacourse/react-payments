import { createContext } from 'react';

export type CardContextType = {
  cardNumber: string[];
  cardExpiryDate: { 'expiry-month': string; 'expiry-year': string };
  networkBrand: string;
  setCardNumber: React.Dispatch<React.SetStateAction<CardContextType['cardNumber']>>;
  setCardExpiryDate: React.Dispatch<React.SetStateAction<CardContextType['cardExpiryDate']>>;
  setNetworkBrand: React.Dispatch<React.SetStateAction<string>>;
};

export const CardContext = createContext<CardContextType | null>(null);
