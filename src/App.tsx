import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';
import CvcSection from './components/CvcSection/CvcSection';

export type Expiration = {
  year: string;
  month: string;
};

export const INITIAL_CARD_NUMBER = {
  first: { value: '', isError: false },
  second: { value: '', isError: false },
  third: { value: '', isError: false },
  fourth: { value: '', isError: false }
} as const;

export type CardNumberType = typeof INITIAL_CARD_NUMBER;
export type CardNumberKey = keyof CardNumberType;

export const CARD_LOGO = {
  visa: 'images/visa.jpg',
  master: 'images/mastercard.jpg'
};
export type CardLogoType = typeof CARD_LOGO;

export type CardLogoKey = keyof CardLogoType;

const INITIAL_EXPIRATION = { year: '', month: '' } as const;

export type ExpirationKey = keyof typeof INITIAL_EXPIRATION;

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const [cardLogo, setCardLogo] = useState<keyof CardLogoType | null>(null);
  const [expiration, setExpiration] = useState<Expiration>(INITIAL_EXPIRATION);
  const [cvc, setCvc] = useState('');

  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} cardLogo={cardLogo} expiration={expiration} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
