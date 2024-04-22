import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import { CARD_BRAND_INFO } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import useInputs from "@/hooks/useInputs";

export type CardNumberInputType = {
  cardNumbers1: string;
  cardNumbers2: string;
  cardNumbers3: string;
  cardNumbers4: string;
};

export type ExpirationPeriodInputType = {
  expirationMonth: string;
  expirationYear: string;
};

const CardRegisterPage = () => {
  const cardNumbersState = useInputs<CardNumberInputType>({
    cardNumbers1: "",
    cardNumbers2: "",
    cardNumbers3: "",
    cardNumbers4: "",
  });

  const expiredDateState = useInputs<ExpirationPeriodInputType>({
    expirationMonth: "",
    expirationYear: "",
  });

  const ownerNameState = useInput("");

  const checkCardBrand = (cardNumbers: string) => {
    if (Number(cardNumbers[0]) === CARD_BRAND_INFO.VISA.START_NUMBER) {
      return "VISA";
    }
    if (
      Number(cardNumbers.slice(0, 2)) <= CARD_BRAND_INFO.MASTER.END_NUMBER &&
      Number(cardNumbers.slice(0, 2)) >= CARD_BRAND_INFO.MASTER.START_NUMBER
    ) {
      return "MASTER";
    }
    return "NONE";
  };

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CreditCardPreview
          cardType={checkCardBrand(cardNumbersState.values.cardNumbers1)}
          cardNumbers={cardNumbersState.values}
          expirationDate={expiredDateState.values}
          ownerName={ownerNameState.value}
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

export default CardRegisterPage;
