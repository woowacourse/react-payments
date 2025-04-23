import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';
import CvcSection from './components/CvcSection/CvcSection';
import { CardNumberType, CvcType } from './types';
import { INITIAL_CARD_NUMBER, INITIAL_CVC } from './constants';
import CardCompanySection from './components/CardCompanySection/CardCompanySection';
import useExpiration from './hooks/useExpiration';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);

  const [cvc, setCvc] = useState<CvcType>(INITIAL_CVC);
  const [company, setCompany] = useState<string>('');

  const handleSelect = (value: string) => {
    setCompany(value);
  };

  const { expiration, handleExpirationChange, ref } = useExpiration();

  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} company={company} expiration={expiration} />
      <CardCompanySection value={company} onSelect={handleSelect} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={ref} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
