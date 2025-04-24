import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import CardPreview from './components/CardPreview/CardPreview';
import CvcSection from './components/CvcSection/CvcSection';
import { CardCompany, CardLogo, CardNumber, Expiration } from './types/card';
import CardCompanySection from './components/CardCompanySection/CardCompanySection';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>({ first: '', second: '', third: '', fourth: '' });
  const [cardLogo, setCardLogo] = useState<CardLogo>('');
  const [cardCompany, setCardCompany] = useState<CardCompany>('');
  const [expiration, setExpiration] = useState<Expiration>({ month: '', year: '' });
  const [cvc, setCvc] = useState<string>('');

  return (
    <div className={styles.appContainer}>
      <CardPreview numbers={cardNumbers} cardLogo={cardLogo} cardCompany={cardCompany} expiration={expiration} />
      <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />
      <CardCompanySection cardCompany={cardCompany} setCardCompany={setCardCompany} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
    </div>
  );
}
