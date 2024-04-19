import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import useInput from "@/hooks/useInput";
import {
  CARD_BRAND_INFO,
  INPUT_COUNTS,
  MAX_LENGTH,
  VALID_LENGTH,
} from "@/constants/condition";
import { makeStringArray } from "@/components/utils/arrayHelper";
import {
  validateExpirationDate,
  validateOwnerName,
} from "@/components/utils/validation";

const CardRegisterPage = () => {
  const cardNumbersState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxNumberLength: MAX_LENGTH.CARD_NUMBERS,
    validLength: VALID_LENGTH.CARD_NUMBERS,
  });

  const expiredDateState = useInput({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_PERIOD),
    maxNumberLength: MAX_LENGTH.EXPIRATION_PERIOD,
    validLength: VALID_LENGTH.EXPIRATION_PERIOD,
    onBlurValidate: validateExpirationDate,
  });

  const ownerNameState = useInput({
    initialValue: makeStringArray(1),
    onChangeValidate: validateOwnerName,
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
          expirationDate={expiredDateState.input}
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

export default CardRegisterPage;
