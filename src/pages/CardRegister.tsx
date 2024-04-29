import styled from "styled-components";
import CardRegisterForm from "@/pages/CardRegisterForm/CardRegisterForm";
import CreditCardPreview, { CardBrand } from "@/components/CreditCardPreview/CreditCardPreview";
import { CARD_BRAND_INFO, Company } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import CreditCardPreviewRear from "@/components/CreditCardPreviewRear/CreditCardPreviewRear";

const inputsOf = (reduceds: ReturnType<typeof useInput>[]) => reduceds.map((reduced) => reduced.value);

const checkCardBrand = (cardNumbers: string[]): CardBrand => {
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
  const cardNumbersReduceds = [useInput(""), useInput(""), useInput(""), useInput("")];
  const expirationDateStates = [useInput(""), useInput("")];
  const ownerNameReduceds = [useInput("")];
  const CVCStates = [useInput("")];
  const passwordReduceds = [useInput("")];
  const { value: cardCompany, setValue: setCardCompany } = useInput("BC카드");
  const [isCVCFocused, setIsCVCFocused] = useState(false);
  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        {!isCVCFocused && (
          <CreditCardPreview
            cardBrand={checkCardBrand(inputsOf(cardNumbersReduceds))}
            cardNumbers={inputsOf(cardNumbersReduceds)}
            expirationDate={expirationDateStates[0].value && inputsOf(expirationDateStates).join("/")}
            ownerName={inputsOf(ownerNameReduceds)[0]}
            cardCompany={cardCompany as Company}
          />
        )}
        {isCVCFocused && <CreditCardPreviewRear CVC={CVCStates[0].value} />}

        <CardRegisterForm
          cardNumbersStates={cardNumbersReduceds}
          expirationDateStates={expirationDateStates}
          ownerNameStates={ownerNameReduceds}
          CVCStates={CVCStates}
          passwordStates={passwordReduceds}
          setIsCVCFocused={setIsCVCFocused}
          setCardCompany={setCardCompany}
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
