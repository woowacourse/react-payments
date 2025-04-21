import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import CardPreview from './components/CardPreview/CardPreview';
import CvcSection from './components/CvcSection/CvcSection';
import { CardLogo } from './types/card';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardLogo, setCardLogo] = useState<CardLogo>('');
  const [expiration, setExpiration] = useState<string[]>(['', '']);
  const [cvc, setCvc] = useState<string>('');

  return (
    <div className={styles.appContainer}>
      <CardPreview numbers={cardNumbers} cardLogo={cardLogo} expiration={expiration} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
