import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import { useState } from "react";
import { CARD_INPUT_NUMBER } from "../../constant/cardInput";

interface ExpiryDateInputProps {
  setExpiryDate: (value: string) => void;
}

const ExpiryDateInfo = {
  label: "expiryDate",
  width: "137px",
  placeholder: "MM / YY",
  textPosition: "center",
  type: "text",
  maxLength: CARD_INPUT_NUMBER.EXPIRY_DATE,
};

export const ExpiryDateInput = ({ setExpiryDate }: ExpiryDateInputProps) => {
  const [isValid, setIsValid] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    e.target.value = (value.match(/\d{1,2}/g) ?? []).join(" / ");
    setExpiryDate(e.target.value);
  };

  const validateExpiryDate = (expiryDate: string): void => {
    const [month, year] = expiryDate.split(" / ").map((each) => Number(each));

    setIsValid(true);

    if (month < 1 || month > 12) {
      setIsValid(false);
    }

    if (year < new Date().getFullYear() % 2000) {
      setIsValid(false);
    }
  };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(" / ", "");

    if (value.length === 4) {
      validateExpiryDate(e.target.value);
      return;
    }

    setIsValid(false);
  };

  return (
    <InputContainer>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        handleChange={handleOutFocusEvent}
        error={{
          isValid: isValid,
          errorMessage: "유효한 만료일이 아닙니다. ",
        }}
      />
    </InputContainer>
  );
};
