import styled from "styled-components";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview, {
  CardType,
} from "@/components/CreditCardPreview/CreditCardPreview";
import useInput from "@/hooks/useInput";
import { CARD_BRAND_INFO, INPUT_COUNTS } from "@/constants/condition";
import { makeStringArray } from "@/components/utils/arrayHelper";
import {
  expirationDateValidators,
  ownerNameValidators,
} from "@/components/utils/validation";

const CardRegister = () => {
  const cardNumbersState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxNumberLength: 4,
    validLength: 4,
  });

  const expiredDateState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_PERIOD),
    maxNumberLength: 2,
    validLength: 2,
    onBlurValidators: expirationDateValidators,
  });

  const ownerNameState = useInput({
    initialValue: makeStringArray(1),
    onChangeValidators: ownerNameValidators,
  });

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

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType={checkCardBrand(cardNumbersState.inputs)}
          cardNumbers={cardNumbersState.inputs}
          expirationDate={
            expiredDateState.inputs[0] && expiredDateState.inputs.join("/")
          }
          ownerName={ownerNameState.inputs[0]}
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
