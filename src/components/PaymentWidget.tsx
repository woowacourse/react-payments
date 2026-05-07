import CardInfo from "./cardInfo/CardInfo";
import CardPreview from "./cardPreview/CardPreview";
import { Wrapper } from "./PaymentWidget.styles";
import { useCardForm } from "./useCardForm";

export default function PaymentWidget() {
  const cardForm = useCardForm();

  return (
    <Wrapper>
      <CardPreview cardForm={cardForm} />
      <CardInfo cardForm={cardForm} />
    </Wrapper>
  );
}
