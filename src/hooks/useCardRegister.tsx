import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import useInputs from "./useInputs";
import { MAX_LENGTH, VALID_LENGTH } from "@/constants/condition";
import {
  sliceInvalidValueWithRegex,
  validateDoubleSpace,
  validateEnterRequired,
  validateIsNumber,
  validateIsValidLength,
  validateMonth,
  validateOwnerName,
} from "@/utils/validation";
import { ExpirationPeriodInputType } from "@/components/CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import useInput from "./useInput";
import { CardType } from "@/constants/cardType";
import { REGEX } from "@/constants/regex";

const useCardRegister = () => {
  const cardNumbersState = useInputs<CardNumberInputType>({
    initialValue: {
      cardNumbers1: "",
      cardNumbers2: "",
      cardNumbers3: "",
      cardNumbers4: "",
    },
    validates: [
      (value: string) =>
        validateIsValidLength(value, VALID_LENGTH.CARD_NUMBERS),
      (value: string) => validateIsNumber(value),
    ],
    onChangeFunc: (value: string) =>
      sliceInvalidValueWithRegex(value, REGEX.NUMBERS),
  });

  const expirationPeriodState = useInputs<ExpirationPeriodInputType>({
    initialValue: { expirationMonth: "", expirationYear: "" },
    validates: [
      (value: string) =>
        validateIsValidLength(value, VALID_LENGTH.EXPIRATION_PERIOD),
      (value: string, name: string) => {
        return name === "expirationMonth" ? validateMonth(Number(value)) : null;
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
    onChangeFunc: (value: string) =>
      sliceInvalidValueWithRegex(value, REGEX.CAPITAL_LETTERS),
  });

  const cardTypeState = useInput<CardType | null>({
    initialValue: null,
    validates: [(value: string) => validateOwnerName(value)],
  });

  const CVCNumbersState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.CVC_NUMBERS),
      (value: string) => validateIsNumber(value),
    ],
    onChangeFunc: (value: string) =>
      sliceInvalidValueWithRegex(value, REGEX.NUMBERS),
  });

  const passwordState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.PASSWORD),
      (value: string) => validateIsNumber(value),
    ],
    onChangeFunc: (value: string) =>
      sliceInvalidValueWithRegex(value, REGEX.NUMBERS),
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
