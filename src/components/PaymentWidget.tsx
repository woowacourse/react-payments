import { useNavigate } from 'react-router-dom';
import CardFormFields from "./cardFormFields/CardFormFields";
import CardPreview from "./cardPreview/CardPreview";
import { ConfirmButton } from "./PaymentWidget.styles";
import { Wrapper } from "./PageCard.styles";
import { useCardForm } from "./useCardForm";
import { useCardStep } from "./cardFormFields/useCardStep";
import { createCard } from "../api/cards";
import { CARD_BRANDS } from "../constants/constants";

export default function PaymentWidget() {
  const cardForm = useCardForm();
  const step = useCardStep(cardForm);
  const navigate = useNavigate();

  const handleConfirm = async () => {
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
            cardBrand: CARD_BRANDS[cardForm.cardBrand.value].label,
          },
        });
        return;
      }
      // TODO: result.error.code를 해당 입력 필드 아래 메시지로 표시
      alert(result.error.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <CardPreview cardForm={cardForm} />
      <CardFormFields cardForm={cardForm} step={step} />
      {step >= 5 && <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>}
    </Wrapper>
  );
}
