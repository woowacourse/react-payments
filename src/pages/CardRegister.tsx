import styled from "styled-components";
import CardRegisterForm from "@/pages/CardRegisterForm/CardRegisterForm";
import CreditCardPreview, { CardType } from "@/components/CreditCardPreview/CreditCardPreview";
import { CARD_BRAND_INFO, INPUT_COUNTS } from "@/constants/condition";
import useInput from "@/hooks/useInput";

const inputsOf = (reduceds: ReturnType<typeof useInput>[]) => reduceds.map((reduced) => reduced[0].value);

const checkCardBrand = (cardNumbers: string[]): CardType => {
  if (Number(cardNumbers[0][0]) === CARD_BRAND_INFO.VISA.START_NUMBER) {
    return "VISA";
  }
  if (
    Number(cardNumbers[0].slice(0, 2)) <= CARD_BRAND_INFO.MASTER.END_NUMBER &&
    Number(cardNumbers[0].slice(0, 2)) >= CARD_BRAND_INFO.MASTER.START_NUMBER
  ) {
    return "MASTER";
  }
  return "NONE";
};
const CardRegister = () => {
  const cardNumbersReduceds = Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }).map(() => useInput(""));
  const expirationDateReduceds = Array.from({ length: INPUT_COUNTS.EXPIRATION_DATE }).map(() => useInput(""));
  const ownerNameReduceds = Array.from({ length: INPUT_COUNTS.OWNER_NAME }).map(() => useInput(""));

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType={checkCardBrand(inputsOf(cardNumbersReduceds))}
          cardNumbers={inputsOf(expirationDateReduceds)}
          expirationDate={expirationDateReduceds[0][0].value && inputsOf(expirationDateReduceds).join("/")}
          ownerName={inputsOf(expirationDateReduceds)[0]}
        />
        <CardRegisterForm
          cardNumbersReduceds={cardNumbersReduceds}
          expirationDateReduceds={expirationDateReduceds}
          ownerNameReduceds={ownerNameReduceds}
        />
      </S.FlexWrapper>
    </S.CardRegisterWrapper>
  );
};

export default CardRegister;

const CardRegisterWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexWrapper = styled.div`
  width: 375px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const S = {
  CardRegisterWrapper,
  FlexWrapper,
};
