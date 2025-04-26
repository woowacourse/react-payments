import * as S from './AddCardForm.styles';
import CardNumber from '../../../../domain/card/CardNumber/CardNumber';
import CardBrand from '../../../../domain/card/CardBrand/CardBrand';
import CardExpirationDate from '../../../../domain/card/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../../../domain/card/CardCVCNumber/CardCVCNumber';
import CardPasswordNumber from '../../../../domain/card/CardPasswordNumber/CardPasswordNumber';
import Button from '../../../../components/Button/Button';
import { AddCardFormProps } from '../../types';
import { Fragment, useEffect, useState } from 'react';
import { CARD_STEP, CARD_STEPS } from '../../constants';
import { useNavigate } from 'react-router';

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

  const [steps, setSteps] = useState<string[]>(_testModeSteps || [CARD_STEP[0]]);

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

  const renderContents = steps.map((step) => {
    return (
      <Fragment key={step}>
        {step === CARD_STEPS.CARD_NUMBERS && (
          <CardNumber
            cardNumberRefs={cardNumberRefs}
            cardNumber={cardNumber}
            cardNumberErrorMessage={cardNumberErrorMessage}
            handleCardNumberInputChange={handleCardNumberInputChange}
          />
        )}
        {step === CARD_STEPS.CARD_BRAND && (
          <CardBrand cardBrandTypeState={cardBrandTypeState} handleDropdownChange={handleDropdownChange} />
        )}
        {step === CARD_STEPS.CARD_EXPIRATION_DATE && (
          <CardExpirationDate
            cardExpirationDateRefs={cardExpirationDateRefs}
            cardExpirationDate={cardExpirationDate}
            cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
            handleCardExpirationDateInputChange={handleCardExpirationDateInputChange}
          />
        )}
        {step === CARD_STEPS.CARD_CVC_NUMBER && (
          <CardCVCNumber
            cardCVCNumber={cardCVCNumber}
            cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
            handleCardCVCNumberInputChange={handleCardCVCNumberInputChange}
          />
        )}
        {step === CARD_STEPS.CARD_PASSWORD && (
          <CardPasswordNumber
            cardPassword={cardPassword}
            cardPasswordErrorMessage={cardPasswordErrorMessage}
            handleCardPasswordInputChange={handleCardPasswordInputChange}
          />
        )}
      </Fragment>
    );
  });

  const isCardNumberError = Object.values(cardNumberErrorMessage).every((message) => message === '');
  const isCardExpirationDateError = Object.values(cardExpirationDateErrorMessage).every((message) => message === '');
  const isCardCVCNumberError = Object.values(cardCVCNumberErrorMessage).every((message) => message === '');
  const isCardPasswordError = Object.values(cardPasswordErrorMessage).every((message) => message === '');

  const button = isCardPasswordNextStep &&
    isCardNumberError &&
    isCardExpirationDateError &&
    isCardCVCNumberError &&
    isCardPasswordError && (
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
      {renderContents}
      {button}
    </S.CardAddFrom>
  );
}
