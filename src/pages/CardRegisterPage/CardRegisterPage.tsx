import CreditCardPreview from "@/components/CreditCardPreview/CreditCardPreview";
import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import { MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import useInputs from "@/hooks/useInputs";
import {
  checkCardBrand,
  validateIsValidLength,
  validateMonth,
  validateOwnerName,
} from "@/utils/validation";
import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "@/components/CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";

const CardRegisterPage = () => {
  const cardNumbersState = useInputs<CardNumberInputType>({
    initialValue: {
      cardNumbers1: "",
      cardNumbers2: "",
      cardNumbers3: "",
      cardNumbers4: "",
    },
    validates: [
      (value: string[]) =>
        validateIsValidLength(value[0], VALID_LENGTH.CARD_NUMBERS),
    ],
    maxNumberLength: MAX_LENGTH.CARD_NUMBERS,
  });

  const expiredDateState = useInputs<ExpirationPeriodInputType>({
    initialValue: { expirationMonth: "", expirationYear: "" },
    validates: [
      (value: string[]) =>
        validateIsValidLength(value[0], VALID_LENGTH.EXPIRATION_PERIOD),
      (value: string[], name: string) => {
        if (name === "expirationMonth") {
          return validateMonth(Number(value));
        }
        return null;
      },
    ],
    maxNumberLength: MAX_LENGTH.EXPIRATION_PERIOD,
  });

  const ownerNameState = useInput({
    initialValue: "",
    validates: [(value: string) => validateOwnerName(value)],
  });

  const cardTypeState = useInput({
    initialValue: "",
    validates: [(value: string) => validateOwnerName(value)],
  });

  const CVCNumbersState = useInput({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.CVC_NUMBERS),
    ],
  });

  const passwordState = useInput({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.PASSWORD),
    ],
  });

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
          cardTypeState={cardTypeState}
          CVCNumbersState={CVCNumbersState}
          passwordState={passwordState}
        />
      </S.FlexWrapper>
    </S.CardRegisterWrapper>
  );
};

export default CardRegisterPage;
