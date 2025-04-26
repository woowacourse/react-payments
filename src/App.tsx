import { useState, useMemo } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import CardPreview from './components/CardPreview/CardPreview';
import CvcSection from './components/CvcSection/CvcSection';
import { CardCompany, CardLogo } from './types/card';
import CardCompanySection from './components/CardCompanySection/CardCompanySection';
import CardPasswordSection from './components/CardPasswordSection/CardPasswordSection';
import { useCardNumberInput } from './hooks/useCardNumberInput';
import { useCardExpirationInput } from './hooks/useCardExpirationInput';
import { handleCardLogoChange } from './utils/cardLogoUtils.ts';

export default function App() {
  const { cardNumbers, handleCardNumberChange, cardNumberError } = useCardNumberInput();
  const [cardCompany, setCardCompany] = useState<CardCompany>('');
  const { expiration, handleExpirationChange, expirationError } = useCardExpirationInput();
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const cardLogo = useMemo<CardLogo>(() => handleCardLogoChange(cardNumbers.first), [cardNumbers.first]);

  return (
    <div className={styles.appContainer}>
      <CardPreview numbers={cardNumbers} cardLogo={cardLogo} cardCompany={cardCompany} expiration={expiration} />
      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
      />
      <CardCompanySection cardCompany={cardCompany} setCardCompany={setCardCompany} />
      <CardExpirationSection
        expiration={expiration}
        handleExpirationChange={handleExpirationChange}
        expirationError={expirationError}
      />
      <CvcSection cvc={cvc} setCvc={setCvc} />
      <CardPasswordSection password={password} setPassword={setPassword} />
    </div>
  );
}
