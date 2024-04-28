import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import useInputs from "./useInputs";
import { VALID_LENGTH } from "@/constants/condition";
import {
  validateDoubleSpace,
  validateIsCapital,
  validateIsNumber,
  validateIsValidLength,
  validateMonth,
} from "@/utils/validation";
import { ExpirationPeriodInputType } from "@/components/CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import useInput from "./useInput";
import { CardBrandType } from "@/constants/cardBrandType";
import { REGEX } from "@/constants/regex";
import { sliceInvalidValueWithRegex, sliceOverMaxLength } from "@/utils/view";

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
    inputChangeCallbacks: [
      (value: string) => sliceInvalidValueWithRegex(value, REGEX.NUMBERS),
      (value: string) => sliceOverMaxLength(value, VALID_LENGTH.CARD_NUMBERS),
    ],
  });

  const expirationPeriodState = useInputs<ExpirationPeriodInputType>({
    initialValue: { expirationMonth: "", expirationYear: "" },
    validates: [
      (value: string) =>
        validateIsValidLength(value, VALID_LENGTH.EXPIRATION_PERIOD),
      (value: string, name: string) =>
        name === "expirationMonth" ? validateMonth(Number(value)) : null,
    ],
    inputChangeCallbacks: [
      (value: string) =>
        sliceOverMaxLength(value, VALID_LENGTH.EXPIRATION_PERIOD),
    ],
  });

  const ownerNameState = useInput({
    initialValue: "",
    validates: [
      (value: string) => validateIsCapital(value),
      (value: string) => validateDoubleSpace(value),
    ],
    inputChangeCallbacks: [
      (value: string) =>
        sliceInvalidValueWithRegex(value, REGEX.CAPITAL_LETTERS),
    ],
  });

  const cardBrandState = useInput<CardBrandType | null>({
    initialValue: null,
  });

  const CVCNumbersState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.CVC_NUMBERS),
      (value: string) => validateIsNumber(value),
    ],
    inputChangeCallbacks: [
      (value: string) => sliceInvalidValueWithRegex(value, REGEX.NUMBERS),
      (value: string) => sliceOverMaxLength(value, VALID_LENGTH.CVC_NUMBERS),
    ],
  });

  const passwordState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.PASSWORD),
      (value: string) => validateIsNumber(value),
    ],
    inputChangeCallbacks: [
      (value: string) => sliceInvalidValueWithRegex(value, REGEX.NUMBERS),
      (value: string) => sliceOverMaxLength(value, VALID_LENGTH.PASSWORD),
    ],
  });

  return {
    cardNumbersState,
    expirationPeriodState,
    cardBrandState,
    CVCNumbersState,
    passwordState,
    ownerNameState,
  };
};

export default useCardRegister;
