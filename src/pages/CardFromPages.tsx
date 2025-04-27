import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import { useEffect, useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import useError from '@/hooks/useError';
import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';
import { CardNumbersOptions } from '@/types/CardNumbers';

type CardFormPagesProps = {
  cardNumbersForm: CardNumbersOptions;
  cardCVCNumberForm: any;
  cardExpirationDateForm: any;
  canSubmit: () => boolean;
};

const CardFormPages = ({
  cardNumbersForm,
  cardCVCNumberForm,
  cardExpirationDateForm,
  canSubmit,
}: CardFormPagesProps) => {
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
    <CardNumbersInputSection {...cardNumbersForm} />,
    <CardCompanySelectSection
      cardCompany={cardCompany}
      setCardCompany={setCardCompany}
      isError={cardCompanyError.isError.cardCompany}
      errorMessage={cardCompanyError.errorMessage}
      clearError={() => clearCardCompanyError('cardCompany')}
    />,
    <CardExpirationDateInputSection {...cardExpirationDateForm} />,
    <CardCVCNumberInputSection {...cardCVCNumberForm} />,
  ];

  useEffect(() => {
    setInputCompletion((prev) => {
      const newCompletion = [...prev];
      if (inputCompletion[0] === false) {
        newCompletion[0] = canSubmitValidLength({
          state: cardNumbersForm.cardNumbers,
          isError: cardNumbersForm.isError,
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
          state: cardExpirationDateForm.cardExpirationDate,
          isError: cardExpirationDateForm.isCardExpirationDateError,
          validLength: {
            month: 2,
            year: 2,
          },
        });
      }
      if (inputCompletion[3] === false) {
        console.log('들어옴!');
        newCompletion[3] = canSubmitValidLength({
          state: cardCVCNumberForm.cardCVCNumber,
          isError: cardCVCNumberForm.isCardCVCNumberError,
          validLength: 3,
        });
        console.log('cardCVCNumber', cardCVCNumberForm.cardCVCNumber);
      }

      return newCompletion;
    });
  }, [
    cardCompany,
    cardNumbersForm.cardNumbers,
    cardCVCNumberForm.cardCVCNumber,
    cardExpirationDateForm.cardExpirationDate,
  ]);

  const nav = useNavigate();
  const handleSubmit = () => {
    nav('/complete');
  };

  return (
    <>
      <CardDisplay
        cardNumbers={cardNumbersForm.cardNumbers}
        cardExpirationDate={cardExpirationDateForm.cardExpirationDate}
        cardCompany={cardCompany}
      />

      <div className={styles.cardForm}>
        {inputCompletion.map((isCompleted, index) => {
          if (isCompleted) return inputSections[index + 1];
        })}
        <CardNumbersInputSection {...cardNumbersForm} />
      </div>
      {canSubmit() && (
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
  return true;
};
