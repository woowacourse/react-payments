import { useState } from 'react';
import './styles/index.css';
import styles from './App.module.css';
import CardNumberSection from './components/CardNumberSection/CardNumberSection';
import CardExpirationSection from './components/CardExpirationSection/CardExpirationSection';
import Card from './components/Card/Card';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardValidity, setCardValidity] = useState<boolean[]>([true, true, true, true]);

  const handleCardNumberChange = (index: number, value: string) => {
    const isValid = /^[0-9]*$/.test(value);
    const updatedNumbers = [...cardNumbers];
    updatedNumbers[index] = value;
    setCardNumbers(updatedNumbers);

    const updatedValidity = [...cardValidity];
    updatedValidity[index] = isValid;
    setCardValidity(updatedValidity);
  };

  const [expiration, setExpiration] = useState<string[]>(['', '']);
  const [expirationError, setExpirationError] = useState<string[]>(['', '']);

  const handleExpirationChange = (index: number, value: string) => {
    let errorMsg = '';
    if (!/^[0-9]*$/.test(value)) {
      errorMsg = '숫자만 입력 가능합니다.';
    } else {
      if (index === 0) {
        if (value !== '') {
          const month = Number(value);
          if (month < 1 || month > 12) {
            errorMsg = '1부터 12 사이의 숫자를 입력해주세요.';
          }
        }
      }
      if (index === 1) {
        if (value !== '' && value.length !== 2) {
          errorMsg = '2자리 숫자를 입력해주세요.';
        }
      }
    }
    const updatedExpiration = [...expiration];
    updatedExpiration[index] = value;
    setExpiration(updatedExpiration);

    const updatedError = [...expirationError];
    updatedError[index] = errorMsg;
    setExpirationError(updatedError);
  };

  return (
    <div className={styles.appContainer}>
      <Card numbers={cardNumbers} />
      <CardNumberSection cardNumbers={cardNumbers} cardValidity={cardValidity} onChange={handleCardNumberChange} />
      <CardExpirationSection
        expiration={expiration}
        expirationError={expirationError}
        onChange={handleExpirationChange}
      />
    </div>
  );
}
