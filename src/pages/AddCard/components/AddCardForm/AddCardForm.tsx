import * as S from './AddCardForm.styles';
import CardNumber from '../../../../domain/card/CardNumber/CardNumber';
import CardBrand from '../../../../domain/card/CardBrand/CardBrand';
import CardExpirationDate from '../../../../domain/card/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../../../domain/card/CardCVCNumber/CardCVCNumber';
import CardPasswordNumber from '../../../../domain/card/CardPasswordNumber/CardPasswordNumber';
import Button from '../../../../components/Button/Button';
import { AddCardFormProps, CardStepKey } from '../../types';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { CARD_STEP, CARD_STEPS } from '../../constants';
import { useNavigate } from 'react-router';
import { SequenceType } from '../../../../domain/card/CardNumber/types';
import { DateType } from '../../../../domain/card/CardExpirationDate/types';
import { validateErrorMessages } from '../../../../utils';

export default function AddCardForm({
  addFormState,
  _testModeSteps,
}: {
  addFormState: AddCardFormProps;
  _testModeSteps?: string[];
}) {
  const {
    cardNumber,
    cardNumberErrorMessage,
    isCardNumberNextStep,
    cardNumberRefs,
    handleCardNumberInputChange,
    cardBrandTypeState,
    isCardBrandNextStep,
    handleDropdownChange,
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
    cardExpirationDateRefs,
    handleCardExpirationDateInputChange,
    cardCVCNumber,
    cardCVCNumberErrorMessage,
    isCardCVCNumberNextStep,
    handleCardCVCNumberInputChange,
    cardPassword,
    cardPasswordErrorMessage,
    isCardPasswordNextStep,
    handleCardPasswordInputChange,
  } = addFormState;

  const [steps, setSteps] = useState<(typeof CARD_STEPS)[CardStepKey][]>(
    (_testModeSteps as (typeof CARD_STEPS)[CardStepKey][]) || [CARD_STEP[0]],
  );

  useEffect(() => {
    if (_testModeSteps) return;

    const currentStepIndex = steps.length - 1;
    const stepProgression = [
      isCardNumberNextStep,
      isCardBrandNextStep,
      isCardExpirationDateNextStep,
      isCardCVCNumberNextStep,
      isCardPasswordNextStep,
    ];
    const currentStepProgression = stepProgression[currentStepIndex];
    if (!currentStepProgression) {
      return;
    }

    setSteps((prev) => [Object.values(CARD_STEPS)[steps.length], ...prev]);
  }, [
    isCardNumberNextStep,
    isCardBrandNextStep,
    isCardExpirationDateNextStep,
    isCardCVCNumberNextStep,
    isCardPasswordNextStep,
  ]);

  const stepComponents: Record<(typeof CARD_STEPS)[CardStepKey], ReactNode> = {
    [CARD_STEPS.CARD_NUMBERS]: (
      <CardNumber
        cardNumberRefs={cardNumberRefs}
        cardNumber={cardNumber}
        cardNumberErrorMessage={cardNumberErrorMessage}
        handleCardNumberInputChange={handleCardNumberInputChange}
      />
    ),
    [CARD_STEPS.CARD_BRAND]: (
      <CardBrand cardBrandTypeState={cardBrandTypeState} handleDropdownChange={handleDropdownChange} />
    ),
    [CARD_STEPS.CARD_EXPIRATION_DATE]: (
      <CardExpirationDate
        cardExpirationDateRefs={cardExpirationDateRefs}
        cardExpirationDate={cardExpirationDate}
        cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
        handleCardExpirationDateInputChange={handleCardExpirationDateInputChange}
      />
    ),
    [CARD_STEPS.CARD_CVC_NUMBER]: (
      <CardCVCNumber
        cardCVCNumber={cardCVCNumber}
        cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
        handleCardCVCNumberInputChange={handleCardCVCNumberInputChange}
      />
    ),
    [CARD_STEPS.CARD_PASSWORD]: (
      <CardPasswordNumber
        cardPassword={cardPassword}
        cardPasswordErrorMessage={cardPasswordErrorMessage}
        handleCardPasswordInputChange={handleCardPasswordInputChange}
      />
    ),
  };

  const isCardNumberValid = validateErrorMessages<SequenceType, Record<SequenceType, string>>(cardNumberErrorMessage);
  const isCardExpirationDateValid = validateErrorMessages<DateType, Record<DateType, string>>(
    cardExpirationDateErrorMessage,
  );
  const isCardCVCNumberValid = validateErrorMessages<string, string>(cardCVCNumberErrorMessage);
  const isCardPasswordValid = validateErrorMessages<string, string>(cardPasswordErrorMessage);
  const isFormValid = isCardNumberValid && isCardExpirationDateValid && isCardCVCNumberValid && isCardPasswordValid;

  const button = isCardPasswordNextStep && isFormValid && (
    <S.CardAddFromButtonWrapper>
      <Button type={'submit'}>확인</Button>
    </S.CardAddFromButtonWrapper>
  );

  const navigate = useNavigate();
  return (
    <S.CardAddFrom
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/complete', {
          state: {
            cardNumber,
            cardBrandTypeState,
          },
        });
      }}
    >
      {steps.map((step) => {
        return <Fragment key={step}>{stepComponents[step]}</Fragment>;
      })}
      {button}
    </S.CardAddFrom>
  );
}
