import { Fragment, useEffect, useState } from 'react';
import CardNumber from '../../components/CardNumber/CardNumber';
import { CardNumberProps } from '../../components/CardNumber/type';
import CardBrand from '../../components/CardBrand/CardBrand';
import { CardBrandProps, CardBrandType } from '../../components/CardBrand/type';
import CardExpirationDate from '../../components/CardExpirationDate/CardExpirationDate';
import { CardExpirationDateProps } from '../../components/CardExpirationDate/type';
import CardCVCNumber from '../../components/CardCVCNumber/CardCVCNumber';
import { CardCVCNumberProps } from '../../components/CardCVCNumber/type';
import { CardPasswordProps } from '../../components/CardPasswordNumber/type';
import CardPasswordNumber from '../../components/CardPasswordNumber/CardPasswordNumber';

const CARD_STEPS = {
  CARD_NUMBERS: '카드 번호',
  CARD_BRAND: '카드 브랜드',
  CARD_EXPIRATION_DATE: '카드 유효기간',
  CARD_CVC_NUMBER: '카드 CVC',
  CARD_PASSWORD: '카드 비밀번호',
} as const;

const initialCardStep = Object.values(CARD_STEPS)[0];

interface AddCardFormProps
  extends CardPasswordProps,
    CardCVCNumberProps,
    CardExpirationDateProps,
    CardBrandProps,
    CardNumberProps {
  cardBrandType: CardBrandType | null;
  isCardNumberNextStep: boolean;
  isCardExpirationDateNextStep: boolean;
  isCardBrandNextStep: boolean;
  isCardCVCNumberNextStep: boolean;
  isCardPasswordNextStep: boolean;
}

export default function AddCardForm({
  cardNumber,
  cardNumberErrorMessage,
  isCardNumberNextStep,
  handleCardNumberInputChange,
  cardBrandType,
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
}: AddCardFormProps) {
  const [steps, setSteps] = useState<string[]>([initialCardStep]);

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
          <CardBrand cardBrandType={cardBrandType} handleDropdownChange={handleDropdownChange} />
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
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>{renderContents}</div>;
}
