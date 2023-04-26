import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import { useState } from "react";
import { isNumeric } from "../../utils/validate";

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
  const [isValid, setIsValid] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(" / ", "");

    if (!isNumeric(value)) {
      const onlyNumbers = value.match(/\d+/g)?.join("") || "";
      e.target.value = (onlyNumbers.match(/\d{1,2}/g) ?? []).join(" / ");
      return;
    }

    if (value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = (value.match(/\d{1,2}/g) ?? []).join(" / ");
    setExpiryDate(e.target.value);
  };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    const validity = validateExpiryDateInput(e.target.value);
    setIsValid(validity);
  };

  return (
    <InputContainer>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        handleOutFocus={handleOutFocusEvent}
        error={{
          isValid: isValid,
          errorMessage: "유효한 만료일이 아닙니다. ",
        }}
      />
    </InputContainer>
  );
};
