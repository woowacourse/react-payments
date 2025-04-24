import CardNumber from '../../components/CardNumber/CardNumber';
import CardBrand from '../../components/CardBrand/CardBrand';
import CardExpirationDate from '../../components/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../components/CardCVCNumber/CardCVCNumber';
import CardPasswordNumber from '../../components/CardPasswordNumber/CardPasswordNumber';
import { Fragment, useEffect, useState } from 'react';
import { CARD_STEP, CARD_STEPS } from './constants';
import { AddCardFormProps } from './types';
import Button from './components/Button/Button';
import { useNavigate } from 'react-router';

export default function AddCardForm({ addFormState }: { addFormState: AddCardFormProps }) {
  const {
    cardNumber,
    cardNumberErrorMessage,
    isCardNumberNextStep,
    handleCardNumberInputChange,
    cardBrandTypeState,
    isCardBrandNextStep,
    handleDropdownChange,
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
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

  const [steps, setSteps] = useState<string[]>([CARD_STEP[0]]);

  useEffect(() => {
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
    isCardPasswordError && <Button>확인</Button>;

  const navigate = useNavigate();
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '0 32px',
        height: 'calc(100vh - 392px)',
        overflowY: 'auto',
      }}
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
    </form>
  );
}
