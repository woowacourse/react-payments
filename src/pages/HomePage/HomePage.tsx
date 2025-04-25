import { FormEvent, useState } from 'react';
import styles from './HomePage.module.css';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection from '../../components/CardExpirationSection/CardExpirationSection';
import Card from '../../components/Card/Card';
import CvcSection from '../../components/CvcSection/CvcSection';
import CardCompanySection from '../../components/CardCompanySection/CardCompanySection';
import useExpiration from '../../hooks/useExpiration';
import useCardNumbers from '../../hooks/useCardNumbers';
import useCvc from '../../hooks/useCvc';
import PasswordSection from '../../components/PasswordSection/PasswordSection';
import usePassword from '../../hooks/usePassword';
import Spacing from '../../components/Spacing/Spacing';
import { CardNumberType, CvcType, ExpirationType, PasswordType } from '../../types';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const [company, setCompany] = useState<string>('');

  const handleSelect = (value: string) => {
    setCompany(value);
  };

  const { expiration, handleExpirationChange, inputRef } = useExpiration();
  const { cardNumbers, handleCardNumberChange, inputRefs, getCardNumberErrorMessage } = useCardNumbers();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();

  const buttonVisible = isButtonVisible({ cardNumbers, expiration, cvc, password, company });

  const navigate = useNavigate();

  const handleGoCompletePage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumbers.first.value,
        company
      }
    });
  };
  return (
    <form className={styles.wrapper} onSubmit={(e) => handleGoCompletePage(e)}>
      <Card numbers={cardNumbers} company={company} expiration={expiration} />
      <Spacing size={45} />
      <div className={styles.inputSectionWrapper}>
        <PasswordSection password={password} handlePasswordChange={handlePasswordChange} />
        <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} />
        <CardCompanySection value={company} onSelect={handleSelect} />
        <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={inputRef} />
        <CardNumberSection
          cardNumbers={cardNumbers}
          onCardNumbersChange={handleCardNumberChange}
          inputRefs={inputRefs}
          getCardNumberErrorMessage={getCardNumberErrorMessage}
        />
      </div>
      <Button>확인</Button>
    </form>
  );
}

const isButtonVisible = ({
  cardNumbers,
  expiration,
  cvc,
  password,
  company
}: {
  cardNumbers: CardNumberType;
  expiration: ExpirationType;
  cvc: CvcType;
  password: PasswordType;
  company: string;
}) => {
  const isCardNumbersValid = Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  const isExpirationValid = Object.values(expiration).every(({ value, errorMessage }) => value.length == 2 && errorMessage === '');
  const isCvcValid = cvc.errorMessage === '' && cvc.value.length == 3;
  const isPasswordValid = password.errorMessage === '' && password.value.length == 2;
  const isCompanyValid = company !== '';
  return isCardNumbersValid && isExpirationValid && isCvcValid && isPasswordValid && isCompanyValid;
};
