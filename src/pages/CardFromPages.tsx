import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import { useEffect, useRef, useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import useError from '@/hooks/useError';
import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';
import { CardNumbersOptions } from '@/types/CardNumbers';
import { CardExpirationDateOptions } from '@/types/CardExpirationDateOptions';
import { useCardCVCNumberOptions } from '@/hooks/useCardCVCNumber';
import useFieldCompletion from '@/hooks/useFieldCompletion';
import { CardPasswordOptions } from '@/hooks/useCardPassword';
import CardPasswordInputSection from '@/components/InputSection/CardPasswordInputSection';

type CardFormPagesProps = {
  cardNumbersForm: CardNumbersOptions;
  cardCVCNumberForm: useCardCVCNumberOptions;
  cardExpirationDateForm: CardExpirationDateOptions;
  cardPasswordForm: CardPasswordOptions;
  canSubmit: () => boolean;
};

const CardFormPages = ({
  cardNumbersForm,
  cardCVCNumberForm,
  cardExpirationDateForm,
  cardPasswordForm,
  canSubmit,
}: CardFormPagesProps) => {
  const [cardCompany, setCardCompany] = useState('');
  const { error: cardCompanyError, clearError: clearCardCompanyError } =
    useError({
      cardCompany: false,
    });

  const isFieldCompletetion = useFieldCompletion({
    cardNumbersForm,
    cardCompany,
    cardExpirationDateForm,
    cardCVCNumberForm,
  });

  const nav = useNavigate();
  const handleSubmit = () => {
    nav('/complete');
  };

  const cardNumbersInputRef = {
    firstNumber: useRef<HTMLInputElement>(null),
    secondNumber: useRef<HTMLInputElement>(null),
    thirdNumber: useRef<HTMLInputElement>(null),
    fourthNumber: useRef<HTMLInputElement>(null),
  };

  const cardExpirationDateInputRef = {
    month: useRef<HTMLInputElement>(null),
    year: useRef<HTMLInputElement>(null),
  };

  const cardCVCInputRef = useRef<HTMLInputElement>(null);
  const cardPasswordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFieldCompletetion[3]) {
      cardPasswordInputRef.current?.focus();
      return;
    }
    if (isFieldCompletetion[2]) {
      cardCVCInputRef.current?.focus();
      return;
    }
    if (isFieldCompletetion[1]) {
      if (cardExpirationDateForm.cardExpirationDate.month.length < 2) {
        cardExpirationDateInputRef.month.current?.focus();
      } else {
        cardExpirationDateInputRef.year.current?.focus();
      }
      return;
    }
    if (isFieldCompletetion[0]) {
      cardNumbersInputRef.fourthNumber.current?.blur();
      return;
    }
    //cardNumers의 각 자리가 4길이가 되면 다음으로 포커스
    if (cardNumbersForm.cardNumbers.thirdNumber.length === 4) {
      cardNumbersInputRef.fourthNumber.current?.focus();
      return;
    }
    if (cardNumbersForm.cardNumbers.secondNumber.length === 4) {
      cardNumbersInputRef.thirdNumber.current?.focus();
      return;
    }
    if (cardNumbersForm.cardNumbers.firstNumber.length === 4) {
      cardNumbersInputRef.secondNumber.current?.focus();
      return;
    }
    cardNumbersInputRef.firstNumber.current?.focus();

    // cardNumbersInputRef.firstNumber.current?.focus();
  }, [
    isFieldCompletetion,
    cardNumbersForm.cardNumbers,
    cardExpirationDateForm.cardExpirationDate,
  ]);

  return (
    <>
      <CardDisplay
        cardNumbers={cardNumbersForm.cardNumbers}
        cardExpirationDate={cardExpirationDateForm.cardExpirationDate}
        cardCompany={cardCompany}
      />

      <div className={styles.cardForm}>
        {isFieldCompletetion[3] && (
          <CardPasswordInputSection
            {...cardPasswordForm}
            inputRef={cardPasswordInputRef}
          />
        )}

        {isFieldCompletetion[2] && (
          <CardCVCNumberInputSection
            {...cardCVCNumberForm}
            inputRef={cardCVCInputRef}
          />
        )}
        {isFieldCompletetion[1] && (
          <CardExpirationDateInputSection
            {...cardExpirationDateForm}
            inputRef={cardExpirationDateInputRef}
          />
        )}
        {isFieldCompletetion[0] && (
          <CardCompanySelectSection
            cardCompany={cardCompany}
            setCardCompany={setCardCompany}
            isError={cardCompanyError.isError.cardCompany}
            errorMessage={cardCompanyError.errorMessage}
            clearError={() => clearCardCompanyError('cardCompany')}
          />
        )}
        <CardNumbersInputSection
          {...cardNumbersForm}
          inputRef={cardNumbersInputRef}
        />
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
