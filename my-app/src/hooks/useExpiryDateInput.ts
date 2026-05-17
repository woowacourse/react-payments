import { EXPIRY_FIELD_COUNT, EXPIRY_FIELD_MAX_LENGTH } from "../constants/cardField";
import { validateExpiry } from "../utils/validators";
import { useMultiFieldInput } from "./useMultiFieldInput";

type UseExpiryDateInputParams = {
  onValueHandler: (values: string[]) => void;
};

export const useExpiryDateInput = ({ onValueHandler }: UseExpiryDateInputParams) => {
  const base = useMultiFieldInput({
    fieldCount: EXPIRY_FIELD_COUNT,
    getMaxLength: () => EXPIRY_FIELD_MAX_LENGTH,
    validate: validateExpiry,
    onValueHandler,
  });

  return {
    ...base,
    fieldMaxLength: EXPIRY_FIELD_MAX_LENGTH,
  };
};
