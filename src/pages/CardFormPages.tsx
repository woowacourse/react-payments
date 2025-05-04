import CardCVCNumberInputSection from '@InputSectionComponents/CardCVCNumberInputSection';
import CardNumbersInputSection from '@InputSectionComponents/CardNumbersInputSection';
import CardExpirationDateInputSection from '@InputSectionComponents/CardExpirationDateInputSection';
import CardDisplay from '@CardDisplayComponents/CardDisplay';
import styles from './cardForm.module.css';
import { useMemo, useRef, useState } from 'react';
import buttonStyle from '../css/button.module.css';
import CardCompanySelectSection from '@/components/SelectSection/CardCompanySelectSection';
import ConfirmButton from '@/components/common/ConfirmButton/ConfirmButton';
import { useNavigate } from 'react-router-dom';

import CardPasswordInputSection from '@/components/InputSection/CardPasswordInputSection';
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

  const { currentStep, goNextStep } = useStep();

  const nav = useNavigate();
  const handleSubmit = () => {
    setIsUserFocusing(false);
    nav(ROUTES.COMPLETE, {
      state: { cardFirstNumber: cardNumbersForm.cardNumbers.firstNumber },
    });
  };

  const firstNumber = useRef<HTMLInputElement>(null);
  const secondNumber = useRef<HTMLInputElement>(null);
  const thirdNumber = useRef<HTMLInputElement>(null);
  const fourthNumber = useRef<HTMLInputElement>(null);

  const cardNumbersInputRef = useMemo(
    () => ({
      firstNumber,
      secondNumber,
      thirdNumber,
      fourthNumber,
    }),
    []
  );

  const month = useRef<HTMLInputElement>(null);
  const year = useRef<HTMLInputElement>(null);

  const cardExpirationDateInputRef = useMemo(
    () => ({
      month,
      year,
    }),
    []
  );

  const cardCVCInputRef = useRef<HTMLInputElement>(null);
  const cardPasswordInputRef = useRef<HTMLInputElement>(null);

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
            goNextStep={goNextStep}
          />
          <CardCompanySelectSection
            {...cardCompanyForm}
            handleMouseDown={() => setIsUserFocusing(true)}
            onChange={() => setIsUserFocusing(false)}
            goNextStep={() => {
              goNextStep({ time: 'once', key: 'cardCompany' });
            }}
          />
          <CardExpirationDateInputSection
            {...cardExpirationDateForm}
            inputRef={cardExpirationDateInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            goNextStep={goNextStep}
          />
          <CardCVCNumberInputSection
            {...cardCVCNumberForm}
            inputRef={cardCVCInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            goNextStep={goNextStep}
          />
          <CardPasswordInputSection
            {...cardPasswordForm}
            inputRef={cardPasswordInputRef}
            handleMouseDown={() => setIsUserFocusing(true)}
            goNextStep={goNextStep}
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
