import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import { useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';
import useFieldCompletion from '@/hooks/useFieldCompletion';

import CardPasswordInputSection from '@/components/InputSection/CardPasswordInputSection';
import useCardFormFlow from '@/hooks/useCardFormFlow';
import useCardForm from '@/hooks/useCardForm';
import { ROUTES } from '@/constants/routes';

const CardFormPages = () => {
  const {
    cardNumbersForm,
    cardCVCNumberForm,
    cardCompanyForm,
    cardExpirationDateForm,
    cardPasswordForm,
    canSubmit,
  } = useCardForm();

  const [isUserFocusing, setIsUserFocusing] = useState(false);

  const { isFieldCompletetion, resetFieldCompletetion } = useFieldCompletion({
    cardNumbersForm,
    cardCompanyForm,
    cardExpirationDateForm,
    cardCVCNumberForm,
  });

  const nav = useNavigate();
  const handleSubmit = () => {
    setIsUserFocusing(false);
    resetFieldCompletetion();
    nav(ROUTES.COMPLETE, {
      state: { cardFirstNumber: cardNumbersForm.cardNumbers.firstNumber },
    });
  };

  const {
    cardNumbersInputRef,
    cardExpirationDateInputRef,
    cardCVCInputRef,
    cardPasswordInputRef,
  } = useCardFormFlow({
    isFieldCompletetion,
    cardNumbersForm,
    cardExpirationDateForm,
    cardCVCNumberForm,
    isUserFocusing,
  });

  return (
    <>
      <CardDisplay
        cardNumbers={cardNumbersForm.cardNumbers}
        cardExpirationDate={cardExpirationDateForm.cardExpirationDate}
        cardCompany={cardCompanyForm.cardCompany}
      />

      <div className={styles.cardForm}>
        {isFieldCompletetion[3] && (
          <CardPasswordInputSection
            {...cardPasswordForm}
            inputRef={cardPasswordInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
          />
        )}

        {isFieldCompletetion[2] && (
          <CardCVCNumberInputSection
            {...cardCVCNumberForm}
            inputRef={cardCVCInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
          />
        )}
        {isFieldCompletetion[1] && (
          <CardExpirationDateInputSection
            {...cardExpirationDateForm}
            inputRef={cardExpirationDateInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
          />
        )}
        {isFieldCompletetion[0] && (
          <CardCompanySelectSection
            {...cardCompanyForm}
            handleMouseDown={() => setIsUserFocusing(true)}
            onChange={() => setIsUserFocusing(false)}
          />
        )}
        <CardNumbersInputSection
          {...cardNumbersForm}
          inputRef={cardNumbersInputRef}
          handleMouseDown={() => setIsUserFocusing(true)}
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
