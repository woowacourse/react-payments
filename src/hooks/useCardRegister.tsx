import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import useInputs from "./useInputs";
import { MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import {
  validateDoubleSpace,
  validateEnterRequired,
  validateIsValidLength,
  validateMonth,
  validateOwnerName,
} from "@/utils/validation";
import { ExpirationPeriodInputType } from "@/components/CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import useInput from "./useInput";
import { CardType } from "@/constants/cardType";

const useCardRegister = () => {
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

  const expirationPeriodState = useInputs<ExpirationPeriodInputType>({
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
    validates: [
      (value: string) => validateOwnerName(value),
      (value: string) => validateDoubleSpace(value),
      () => validateEnterRequired(),
    ],
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

  return {
    cardNumbersState,
    expirationPeriodState,
    cardTypeState,
    CVCNumbersState,
    passwordState,
    ownerNameState,
  };
};

export default useCardRegister;
