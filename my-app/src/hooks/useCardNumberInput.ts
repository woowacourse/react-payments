import { CARD_NUMBER_FIELD_COUNT, CARD_NUMBER_FIELD_MAX_LENGTH } from "../constants/cardField";
import { SUPPORTED_NETWORKS_MESSAGE, getRequiredLengthForDetection } from "../utils/cardNetwork";
import { validateCardNumbers } from "../utils/validators";
import { useMultiFieldInput } from "./useMultiFieldInput";

type UseCardNumberInputParams = {
  onValueHandler: (numbers: string[]) => void;
  maxLength: number;
  isSupportedNetwork: boolean;
};

export const useCardNumberInput = ({ onValueHandler, maxLength, isSupportedNetwork }: UseCardNumberInputParams) => {
  const lastInputMaxLength = maxLength - CARD_NUMBER_FIELD_MAX_LENGTH * (CARD_NUMBER_FIELD_COUNT - 1);
  const base = useMultiFieldInput({
    fieldCount: CARD_NUMBER_FIELD_COUNT,
    getMaxLength: (index) =>
      index === CARD_NUMBER_FIELD_COUNT - 1 ? lastInputMaxLength : CARD_NUMBER_FIELD_MAX_LENGTH,
    validate: validateCardNumbers,
    onValueHandler,
  });

  const totalDigits = base.inputValues.join("");
  const warningMessage =
    !isSupportedNetwork && totalDigits.length >= getRequiredLengthForDetection(totalDigits)
      ? SUPPORTED_NETWORKS_MESSAGE
      : "";

  return {
    ...base,
    warningMessage,
    fieldCount: CARD_NUMBER_FIELD_COUNT,
    fieldMaxLength: CARD_NUMBER_FIELD_MAX_LENGTH,
    lastInputMaxLength,
  };
};
