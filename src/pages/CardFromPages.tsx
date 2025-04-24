import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import useCardExpirationDate from '@hooks/useCardExpirationDate';
import { useEffect, useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import useError from '@/hooks/useError';
import useCardCVCNumber from '@/hooks/useCardCVCNumber';
import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';
import { CardNumbersOptions } from '@/types/CardNumbers';

const CardFormPages = ({
  cardNumbers,
  setCardNumbers,
  isError: isCardNumbersError,
  errorMessage: cardNumbersErrorMessage,
  handleCardNumbersBlur,
}: CardNumbersOptions) => {
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

  const [inputCompletion, setInputCompletion] = useState([
    false,
    false,
    false,
    false,
  ]);
  const inputSections = [
    <CardNumbersInputSection
      cardNumbers={cardNumbers}
      setCardNumbers={setCardNumbers}
      handleCardNumbersBlur={handleCardNumbersBlur}
      isError={isCardNumbersError}
      errorMessage={cardNumbersErrorMessage}
    />,
    <CardCompanySelectSection
      cardCompany={cardCompany}
      setCardCompany={setCardCompany}
      isError={cardCompanyError.isError.cardCompany}
      errorMessage={cardCompanyError.errorMessage}
      clearError={() => clearCardCompanyError('cardCompany')}
    />,
    <CardExpirationDateInputSection
      cardExpirationDate={cardExpirationDate}
      setCardExpirationDate={setCardExpirationDate}
      handleCardExpirationDateBlur={handleCardExpirationDateBlur}
      isError={isCardExpirationDateError}
      errorMessage={cardExpirationDateErrorMessage}
    />,
    <CardCVCNumberInputSection
      cardCVCNumber={cardCVCNumber}
      setCardCVCNumber={setCardCVCNumber}
      handleCardCVCBlur={handleCardCVCBlur}
      isError={isCardCVCNumberError}
      errorMessage={cardCVCNumberErrorMessage}
    />,
  ];
  useEffect(() => {
    setInputCompletion((prev) => {
      const newCompletion = [...prev];
      if (inputCompletion[0] === false) {
        newCompletion[0] = canSubmitValidLength({
          state: cardNumbers,
          isError: isCardNumbersError,
          validLength: {
            firstNumber: 4,
            secondNumber: 4,
            thirdNumber: 4,
            fourthNumber: 4,
          },
        });
      }
      if (inputCompletion[1] === false) {
        newCompletion[1] = cardCompany !== '';
      }
      if (inputCompletion[2] === false) {
        newCompletion[2] = canSubmitValidLength({
          state: cardExpirationDate,
          isError: isCardExpirationDateError,
          validLength: {
            month: 2,
            year: 2,
          },
        });
      }
      if (inputCompletion[3] === false) {
        console.log('들어옴!');
        newCompletion[3] = canSubmitValidLength({
          state: cardCVCNumber,
          isError: isCardCVCNumberError,
          validLength: 3,
        });
        console.log('cardCVCNumber', cardCVCNumber);
      }

      return newCompletion;
    });
  }, [cardCompany, cardNumbers, cardCVCNumber, cardExpirationDate]);

  const nav = useNavigate();
  const handleSubmit = () => {
    nav('/complete');
  };

  return (
    <>
      <CardDisplay
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
        cardCompany={cardCompany}
      />

      <div className={styles.cardForm}>
        {inputCompletion.map((isCompleted, index) => {
          if (isCompleted) return inputSections[index + 1];
        })}
        <CardNumbersInputSection
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
          handleCardNumbersBlur={handleCardNumbersBlur}
          isError={isCardNumbersError}
          errorMessage={cardNumbersErrorMessage}
        />
      </div>
      {inputCompletion.every((value) => value) && (
        <ConfirmButton
          type="submit"
          text="확인"
          onClick={handleSubmit}
          className={buttonStyle.cardConfirm}
        />
      )}
    </>
  );
};

export default CardFormPages;

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
