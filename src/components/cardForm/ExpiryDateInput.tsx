import { InputContainer, Input, InputLabel } from "../common";
import { isNumeric } from "../../utils/validate";
import { ERROR_MESSAGE, INPUT_FULL_LENGTH } from "../../constant/cardInput";
import { useError } from "../../hook/useError";

interface ExpiryDateInputProps {
  setExpiryDate: (value: string) => void;
  validateExpiryDateInput: (expiryDate: string) => boolean;
}

const ExpiryDateInfo = {
  label: "expiryDate",
  $width: "137px",
  $textPosition: "center",
  placeholder: "MM / YY",
  type: "text",
};

export const ExpiryDateInput = ({
  setExpiryDate,
  validateExpiryDateInput,
}: ExpiryDateInputProps) => {
  const { isError, setErrorState, removeError } = useError();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(" / ", "");

    if (!isNumeric(value)) {
      const onlyNumbers = value.match(/\d+/g)?.join("") || "";
      e.target.value = (onlyNumbers.match(/\d{1,2}/g) ?? []).join(" / ");
      return;
    }

    if (value.length > INPUT_FULL_LENGTH.EXPIRY_DATE) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = (value.match(/\d{1,2}/g) ?? []).join(" / ");
    setExpiryDate(e.target.value);
  };

  const validate = (e: React.FocusEvent<HTMLInputElement>) => {
    const validity = validateExpiryDateInput(e.target.value);
    setErrorState(!validity);
  };

  return (
    <InputContainer>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        handleOutFocus={validate}
        handleFocus={removeError}
        error={{
          isError: isError,
          errorMessage: ERROR_MESSAGE.EXPIRY_DATE,
        }}
      />
    </InputContainer>
  );
};
