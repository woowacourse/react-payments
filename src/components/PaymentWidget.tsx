import { useNavigate } from 'react-router-dom';
import CardFormFields from "./cardFormFields/CardFormFields";
import CardPreview from "./cardPreview/CardPreview";
import { Wrapper, ConfirmButton } from "./PaymentWidget.styles";
import { useCardForm } from "./useCardForm";
import { useCardStep } from "./cardFormFields/useCardStep";
import { CARD_BRANDS } from "../constants/constants";

export default function PaymentWidget() {
  const cardForm = useCardForm();
  const step = useCardStep(cardForm);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/complete', {
      state: {
        cardNumberFirstSegment: cardForm.cardNumber.value[0],
        cardBrand: CARD_BRANDS[cardForm.cardBrand.value].label,
      },
    });
  };

  return (
    <Wrapper>
      <CardPreview cardForm={cardForm} />
      <CardFormFields cardForm={cardForm} step={step} />
      {step >= 5 && <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>}
    </Wrapper>
  );
}
