import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';
import CvcSection from './components/CvcSection/CvcSection';
import { CardBrandType, CardNumberType, CvcType, ExpirationType } from './types';
import { INITIAL_CARD_NUMBER, INITIAL_CVC, INITIAL_EXPIRATION } from './constants';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const [cardLogo, setCardLogo] = useState<keyof CardBrandType | null>(null);
  const [expiration, setExpiration] = useState<ExpirationType>(INITIAL_EXPIRATION);
  const [cvc, setCvc] = useState<CvcType>(INITIAL_CVC);

  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} cardLogo={cardLogo} expiration={expiration} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
