import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import CardPreview from './components/CardPreview/CardPreview';
import CvcSection from './components/CvcSection/CvcSection';
import { CardCompany, CardLogo, CardNumber, Expiration } from './types/card';
import CardCompanySection from './components/CardCompanySection/CardCompanySection';
import CardPasswordSection from './components/CardPasswordSection/CardPasswordSection';
import { useCardNumberInput } from './hooks/useCardNumberInput';

export default function App() {
  const { cardNumbers, handleCardNumberChange, cardNumberError } = useCardNumberInput();

  const [cardLogo, setCardLogo] = useState<CardLogo>('');
  const [cardCompany, setCardCompany] = useState<CardCompany>('');
  const [expiration, setExpiration] = useState<Expiration>({ month: '', year: '' });
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleNumberChange(cardNumbers: CardNumber) {
    if (cardNumbers.first.startsWith('4')) {
      setCardLogo('visa');
      return;
    }
    if (51 <= Number(cardNumbers.first.slice(0, 2)) && Number(cardNumbers.first.slice(0, 2)) <= 55) {
      setCardLogo('master');
      return;
    }
    return setCardLogo('');
  }

  return (
    <div className={styles.appContainer}>
      <CardPreview numbers={cardNumbers} cardLogo={cardLogo} cardCompany={cardCompany} expiration={expiration} />
      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
        handleNumberChange={handleNumberChange}
      />
      <CardCompanySection cardCompany={cardCompany} setCardCompany={setCardCompany} />
      <CardExpirationSection expiration={expiration} setExpiration={setExpiration} />
      <CvcSection cvc={cvc} setCvc={setCvc} />
      <CardPasswordSection password={password} setPassword={setPassword} />
    </div>
  );
}
