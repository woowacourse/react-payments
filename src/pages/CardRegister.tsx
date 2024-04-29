import styled from "styled-components";
import CardRegisterForm from "@/pages/CardRegisterForm/CardRegisterForm";
import CreditCardPreview, { CardBrand } from "@/components/CreditCardPreview/CreditCardPreview";
import { CARD_BRAND_INFO, Company } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import CreditCardPreviewRear from "@/components/CreditCardPreviewRear/CreditCardPreviewRear";
import { useNavigate } from "react-router-dom";

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
  const cardNumbersStates = [useInput(""), useInput(""), useInput(""), useInput("")];
  const expirationDateStates = [useInput(""), useInput("")];
  const ownerNameStates = [useInput("")];
  const CVCStates = [useInput("")];
  const passwordStates = [useInput("")];
  const cardCompanyStates = [useInput("BC카드")];
  const [isCVCFocused, setIsCVCFocused] = useState(false);

  const cardCompany = cardCompanyStates[0].value;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/card-register-complete", {
      state: { cardNumber: cardNumbersStates[0].value, cardCompany: cardCompany },
    });
  };

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        {!isCVCFocused && (
          <CreditCardPreview
            cardBrand={checkCardBrand(inputsOf(cardNumbersStates))}
            cardNumbers={inputsOf(cardNumbersStates)}
            expirationDate={expirationDateStates[0].value && inputsOf(expirationDateStates).join("/")}
            ownerName={inputsOf(ownerNameStates)[0]}
            cardCompany={cardCompany as Company}
          />
        )}
        {isCVCFocused && <CreditCardPreviewRear CVC={CVCStates[0].value} />}

        <CardRegisterForm
          cardNumbersStates={cardNumbersStates}
          expirationDateStates={expirationDateStates}
          ownerNameStates={ownerNameStates}
          CVCStates={CVCStates}
          passwordStates={passwordStates}
          cardCompanyStates={cardCompanyStates}
          setIsCVCFocused={setIsCVCFocused}
        />
        <button onClick={handleClick}>확인</button>
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
