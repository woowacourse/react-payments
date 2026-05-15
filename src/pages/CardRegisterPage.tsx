import styled from "@emotion/styled";
import CardForm from "../components/CardForm";
import CardPreview from "../components/CardPreview";
import { SubmitButton } from "../components/SubmitButton";
import { useCardForm } from "../hooks/useCardForm";
import { isCardFormComplete } from "../utils/validators";

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
`;

export function CardRegisterPage() {
  const { cardFormState, brand, handleSetFormState } = useCardForm();

  return (
    <View>
      <CardPreview
        cardBrand={brand}
        cardNumberSegments={cardFormState.cardNumberSegments}
        expiryMonth={cardFormState.expiryMonth}
        expiryYear={cardFormState.expiryYear}
        cardCompany={cardFormState.cardCompany}
      />
      <CardForm
        formState={cardFormState}
        setFormState={handleSetFormState}
        brand={brand}
      />
      <SubmitButton
        isCardFormComplete={isCardFormComplete(cardFormState, brand)}
      />
    </View>
  );
}
