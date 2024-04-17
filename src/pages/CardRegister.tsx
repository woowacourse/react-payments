import styled from "styled-components";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const CardRegister = () => {
  const cardNumbersState = useInput({
    initialValue: Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }, () => ""),
  });

  const expiredDateState = useInput({
    initialValue: Array.from(
      { length: INPUT_COUNTS.EXPIRATION_PERIOD },
      () => ""
    ),
  });

  const ownerNameState = useInput({
    initialValue: [""],
  });

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType="VISA"
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
