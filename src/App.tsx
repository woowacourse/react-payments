import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './css/cardForm.module.css';
import useCardNumbers from '@hooks/useCardNumbers';
import useCardExpirationDate from '@hooks/useCardExpirationDate';
import CardCompanySelectSection from './components/SelectSection/CardCompanySelectSection';
import { useEffect, useState } from 'react';
import useError from './hooks/useError';
import ConfirmButton from './components/common/ComfirmButton/ConfirmButton';
import buttonStyle from './css/button.module.css';
import useCardCVCNumber from './hooks/useCardCVCNumber';

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

  const {
    cardCVCNumber,
    setCardCVCNumber,
    handleCardCVCBlur,
    isError: isCardCVCNumberError,
    errorMessage: cardCVCNumberErrorMessage,
  } = useCardCVCNumber();

  const [cardCompany, setCardCompany] = useState('');
  const { error: cardCompanyError, clearError: clearCardCompanyError } =
    useError({
      cardCompany: false,
    });

  const canSubmit =
    canSubmitValidLength({
      state: cardNumbers,
      isError: isCardNumbersError,
      validLength: {
        firstNumber: 4,
        secondNumber: 4,
        thirdNumber: 4,
        fourthNumber: 4,
      },
    }) &&
    canSubmitValidLength({
      state: cardExpirationDate,
      isError: isCardExpirationDateError,
      validLength: {
        month: 2,
        year: 2,
      },
    }) &&
    cardCompany !== '' &&
    canSubmitValidLength({
      state: cardCVCNumber,
      isError: isCardCVCNumberError,
      validLength: 3,
    });

  console.log('canSubmit', canSubmit);

  return (
    <>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
          cardCompany={cardCompany}
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
          <CardCVCNumberInputSection
            cardCVCNumber={cardCVCNumber}
            setCardCVCNumber={setCardCVCNumber}
            handleCardCVCBlur={handleCardCVCBlur}
            isError={isCardCVCNumberError}
            errorMessage={cardCVCNumberErrorMessage}
          />
        </div>
        {canSubmit && (
          <ConfirmButton
            type="submit"
            text="확인"
            onClick={() => {}}
            className={buttonStyle.cardConfirm}
          />
        )}
      </div>
    </>
  );
}

export default App;

const canSubmitValidLength = ({ state, isError, validLength }) => {
  let isStateLengthValid = false;
  if (typeof state === 'object') {
    isStateLengthValid = Object.entries(state).every(([key, value]) => {
      if (typeof value !== 'string') {
        return false;
      }
      const length = value.length;

      return length === validLength[key];
    });
  } else if (typeof state === 'string') {
    isStateLengthValid = state.length === validLength;
  }

  const isErrorValid = Object.values(isError).every((value) => value === false);

  return isStateLengthValid === true && isErrorValid === true;
};
