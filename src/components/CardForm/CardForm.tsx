import { useNavigate } from 'react-router';
import { isFormValid } from '../../validation/isFormValid';
import { FormEvent } from 'react';
import PasswordSection from '../PasswordSection/PasswordSection';
import CvcSection from '../CvcSection/CvcSection';
import CardCompanySection from '../CardCompanySection/CardCompanySection';
import CardExpirationSection from '../CardExpirationSection/CardExpirationSection';
import CardNumberSection from '../CardNumberSection/CardNumberSection';
import Button from '../Button/Button';

export default function CardForm({}) {
  const isButtonVisible = isFormValid({ cardNumbers, expiration, cvc, password, company });

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
    <form className={styles.inputSectionWrapper} onSubmit={(e) => handleGoCompletePage(e)}>
      <PasswordSection password={password} handlePasswordChange={handlePasswordChange} />
      <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} />
      <CardCompanySection value={company} onSelect={handleCompanySelect} />
      <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={inputRef} />
      <CardNumberSection
        cardNumbers={cardNumbers}
        onCardNumbersChange={handleCardNumberChange}
        inputRefs={inputRefs}
        getCardNumberErrorMessage={getCardNumberErrorMessage}
      />
      {isButtonVisible && <Button>확인</Button>}
    </form>
  );
}
