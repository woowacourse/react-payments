import * as S from './AddCardForm.styles';
import CardNumber from '../../../../domain/card/CardNumber/CardNumber';
import CardBrand from '../../../../domain/card/CardBrand/CardBrand';
import CardExpirationDate from '../../../../domain/card/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../../../domain/card/CardCVCNumber/CardCVCNumber';
import CardPasswordNumber from '../../../../domain/card/CardPasswordNumber/CardPasswordNumber';
import Button from '../../../../components/Button/Button';
import { AddCardFormProps, CardStepKey } from '../../types';
import { Fragment, ReactNode } from 'react';
import { CARD_STEPS } from '../../constants';
import { useCardFormStep } from './hooks/useCardFormStep';
import { useCardFormSubmit } from './hooks/useCardFormSubmit';

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

  const nextStepFlags = useCardFormStep(
    [isCardNumberNextStep, isCardBrandNextStep, isCardExpirationDateNextStep, isCardCVCNumberNextStep],
    _testModeSteps,
  );

  const { isFormValid, handleFormSubmit } = useCardFormSubmit({
    cardNumber,
    cardBrandTypeState,
    cardNumberErrorMessage,
    cardExpirationDateErrorMessage,
    cardCVCNumberErrorMessage,
    cardPasswordErrorMessage,
  });

  const componentsMap: Record<(typeof CARD_STEPS)[CardStepKey], ReactNode> = {
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

  return (
    <S.CardAddFrom onSubmit={handleFormSubmit}>
      {nextStepFlags.map((step) => {
        return <Fragment key={step}>{componentsMap[step]}</Fragment>;
      })}
      {isCardPasswordNextStep && isFormValid && (
        <S.CardAddFromButtonWrapper>
          <Button type="submit">확인</Button>
        </S.CardAddFromButtonWrapper>
      )}
    </S.CardAddFrom>
  );
}
