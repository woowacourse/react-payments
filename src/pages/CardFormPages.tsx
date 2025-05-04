import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import { useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import ConfirmButton from '@/components/common/ConfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';

import CardPasswordInputSection from '@/components/InputSection/CardPasswordInputSection';
import useCardFormFlow from '@/hooks/useCardFormFlow';
import useCardForm from '@/hooks/useCardForm';
import { ROUTES } from '@/constants/routes';
import useStep from '@/hooks/useStep';
import StepStack from '@/components/common/StepStack/StepStack';

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

  const { currentStep, setNextStep } = useStep();

  const nav = useNavigate();
  const handleSubmit = () => {
    setIsUserFocusing(false);
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
    isFieldCompletion: [],
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
        <StepStack currentStep={currentStep}>
          <CardNumbersInputSection
            {...cardNumbersForm}
            inputRef={cardNumbersInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            setNextStep={setNextStep}
          />
          <CardCompanySelectSection
            {...cardCompanyForm}
            handleMouseDown={() => setIsUserFocusing(true)}
            onChange={() => setIsUserFocusing(false)}
            setNextStep={setNextStep}
          />
          <CardExpirationDateInputSection
            {...cardExpirationDateForm}
            inputRef={cardExpirationDateInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            setNextStep={setNextStep}
          />
          <CardCVCNumberInputSection
            {...cardCVCNumberForm}
            inputRef={cardCVCInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            setNextStep={setNextStep}
          />
          <CardPasswordInputSection
            {...cardPasswordForm}
            inputRef={cardPasswordInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            setNextStep={setNextStep}
          />
        </StepStack>
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
