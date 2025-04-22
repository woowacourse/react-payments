import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './css/cardForm.module.css';
import useCardNumbers from '@hooks/useCardNumbers';
import useCardExpirationDate from '@hooks/useCardExpirationDate';
import CardCompanySelectSection from './components/SelectSection/CardCompanySelectSection';
import { useState } from 'react';
import useError from './hooks/useError';

function App() {
  const {
    cardNumbers,
    setCardNumbers,
    isError: isCardNumbersError,
    errorMessage: cardNumbersErrorMessage,
    handleCardNumbersBlur,
  } = useCardNumbers();

  const {
    cardExpirationDate,
    setCardExpirationDate,
    isError: isCardExpirationDateError,
    errorMessage: cardExpirationDateErrorMessage,
    handleCardExpirationDateBlur,
  } = useCardExpirationDate();

  const [cardCompany, setCardCompany] = useState('');
  const { error: cardCompanyError, clearError: clearCardCompanyError } =
    useError({
      cardCompany: false,
    });

  return (
    <>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
        />
        <div className={styles.cardForm}>
          <CardCompanySelectSection
            cardCompany={cardCompany}
            setCardCompany={setCardCompany}
            isError={cardCompanyError.isError.cardCompany}
            errorMessage={cardCompanyError.errorMessage}
            clearError={() => clearCardCompanyError('cardCompany')}
          />
          <CardNumbersInputSection
            cardNumbers={cardNumbers}
            setCardNumbers={setCardNumbers}
            handleCardNumbersBlur={handleCardNumbersBlur}
            isError={isCardNumbersError}
            errorMessage={cardNumbersErrorMessage}
          />
          <CardExpirationDateInputSection
            cardExpirationDate={cardExpirationDate}
            setCardExpirationDate={setCardExpirationDate}
            handleCardExpirationDateBlur={handleCardExpirationDateBlur}
            isError={isCardExpirationDateError}
            errorMessage={cardExpirationDateErrorMessage}
          />
          <CardCVCNumberInputSection />
        </div>
      </div>
    </>
  );
}

export default App;
