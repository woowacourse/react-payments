import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardFormFields from "./cardFormFields/CardFormFields";
import CardPreview from "./cardPreview/CardPreview";
import { ConfirmButton } from "./PaymentWidget.styles";
import { Wrapper } from "./PageCard.styles";
import { useCardForm } from "./useCardForm";
import { useCardStep } from "./cardFormFields/useCardStep";
import { createCard, type CardRequest } from "../api/cards";
import { CARD_BRANDS, type CardBrand } from "../constants/constants";

type SubmitError = { code: keyof CardRequest; message: string };

export default function PaymentWidget() {
  const cardForm = useCardForm();
  const step = useCardStep(cardForm);
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<SubmitError | null>(null);

  const handleConfirm = async () => {
    setSubmitError(null);

    const body = {
      cardNumber: cardForm.cardNumber.value.join(''),
      expireDate: cardForm.expireDate.value.join('/'),
      cvc: cardForm.cvc.value,
      cardBrand: cardForm.cardBrand.value,
      cardPassword: cardForm.cardPassword.value,
    };

    try {
      const result = await createCard(body);

      if (result.ok) {
        navigate('/complete', {
          state: {
            cardNumberFirstSegment: cardForm.cardNumber.value[0],
            cardBrand: CARD_BRANDS[cardForm.cardBrand.value as CardBrand].label,
          },
        });
        return;
      }

      setSubmitError(result.error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <CardPreview cardForm={cardForm} />
      <CardFormFields cardForm={cardForm} step={step} submitError={submitError} />
      {step >= 5 && <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>}
    </Wrapper>
  );
}
