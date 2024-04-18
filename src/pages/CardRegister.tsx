import styled from "styled-components";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import useInput from "@/hooks/useInput";
import { CARD_BRAND_INFO, INPUT_COUNTS } from "@/constants/condition";
import { makeStringArray } from "@/components/utils/arrayHelper";

const CardRegister = () => {
  const cardNumbersState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxLength: 4,
  });

  const expiredDateState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_PERIOD),
    maxLength: 2,
  });

  const ownerNameState = useInput({
    initialValue: makeStringArray(1),
  });

  const checkCardBrand = (cardNumbers: string[]) => {
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

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType={checkCardBrand(cardNumbersState.input)}
          cardNumbers={cardNumbersState.input}
          expirationDate={
            expiredDateState.input[0] && expiredDateState.input.join("/")
          }
          ownerName={ownerNameState.input[0]}
        />
        <CardRegisterForm
          cardNumbersState={cardNumbersState}
          expiredPeriodState={expiredDateState}
          ownerNameState={ownerNameState}
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
