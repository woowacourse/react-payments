import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';
import CvcSection from './components/CvcSection/CvcSection';
import CardCompanySection from './components/CardCompanySection/CardCompanySection';
import useExpiration from './hooks/useExpiration';
import useCardNumbers from './hooks/useCardNumbers';
import useCvc from './hooks/useCvc';

export default function App() {
  const [company, setCompany] = useState<string>('');

  const handleSelect = (value: string) => {
    setCompany(value);
  };

  const { expiration, handleExpirationChange, inputRef } = useExpiration();

  const { cardNumbers, handleCardNumberChange, inputRefs, getCardNumberErrorMessage } = useCardNumbers();

  const { cvc, handleCvcChange } = useCvc();
  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} company={company} expiration={expiration} />
      <CardCompanySection value={company} onSelect={handleSelect} />
      <CardNumberSection
        cardNumbers={cardNumbers}
        onCardNumbersChange={handleCardNumberChange}
        inputRefs={inputRefs}
        getCardNumberErrorMessage={getCardNumberErrorMessage}
      />
      <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={inputRef} />
      <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} />
    </div>
  );
}
