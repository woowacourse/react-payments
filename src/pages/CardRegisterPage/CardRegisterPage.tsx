import S from "./style";
import CardRegisterForm from "@/components/CardRegisterForm/CardRegisterForm";
import { MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import useInput from "@/hooks/useInput";
import useInputs from "@/hooks/useInputs";
import {
  validateIsValidLength,
  validateMonth,
  validateOwnerName,
} from "@/utils/validation";
import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "@/components/CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import { CardType } from "@/constants/cardType";
import CardPreview from "@/components/CreditCardPreview/CardPreview";
import { useState } from "react";
import BasicButton from "@/components/_common/BasicButton/BasicButton";
import { theme } from "@/style/theme";

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

  const cardTypeState = useInput<CardType | null>({
    initialValue: null,
    validates: [(value: string) => validateOwnerName(value)],
  });

  const CVCNumbersState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.CVC_NUMBERS),
    ],
  });

  const passwordState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.PASSWORD),
    ],
  });

  const [step, setStep] = useState<number>(1);

  return (
    <S.CardRegisterWrapper>
      <S.FlexWrapper>
        <CardPreview
          cardType={cardTypeState.value}
          cardNumbers={cardNumbersState.values}
          expirationDate={expiredDateState.values}
          ownerName={ownerNameState.value}
          CVCNumbers={CVCNumbersState.value}
          step={step}
        />
        <CardRegisterForm
          cardNumbersState={cardNumbersState}
          expiredPeriodState={expiredDateState}
          ownerNameState={ownerNameState}
          cardTypeState={cardTypeState}
          CVCNumbersState={CVCNumbersState}
          passwordState={passwordState}
          step={step}
          setStep={setStep}
        />
      </S.FlexWrapper>
      <BasicButton
        fontSize={15}
        width={100}
        height={52}
        disabled={true}
        backgroundColor={theme.COLOR["grey-3"]}
      />
    </S.CardRegisterWrapper>
  );
};

export default CardRegisterPage;
