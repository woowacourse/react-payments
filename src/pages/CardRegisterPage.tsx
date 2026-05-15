import styled from "@emotion/styled";
import CardForm from "../components/CardRegister/CardForm";
import CardPreview from "../components/CardRegister/CardPreview";
import { SubmitButton } from "../components/CardRegisterComplete/SubmitButton";
import { isCardFormComplete } from "../utils/validators";
import type { CardBrand, CardFormState } from "../types";

const View = styled.div`
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  padding: 16px 32px;
`;

interface CardRegisterPageProps {
  cardFormState: CardFormState;
  brand: CardBrand | undefined;
  handleSetFormState: (newState: CardFormState) => void;
}

export function CardRegisterPage(props: CardRegisterPageProps) {
  const { cardFormState, brand, handleSetFormState } = props;

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
