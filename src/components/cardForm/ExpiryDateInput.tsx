import { InputContainer } from "../common/InputContainer";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import { useState } from "react";

interface ExpiryDateInputProps {
  expiryDate: string;
  setExpiryDate: (value: string) => void;
}

const ExpiryDateInfo = {
  label: "expiryDate",
  width: "137px",
  placeholder: "MM / YY",
  textPosition: "center",
  type: "text",
};

export const ExpiryDateInput = ({
  setExpiryDate,
  expiryDate,
}: ExpiryDateInputProps) => {
  const [isValid, setIsValid] = useState(true);
  const [isCompleted, setIsCompleted] = useState(true);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replaceAll(" / ", "");

    if (value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    if (e.target.value.length === 2 && !/[^2-9]/g.test(e.target.value[0])) {
      value = "0" + value;
    }

    e.target.value = (value.match(/\d{1,2}/g) ?? []).join(" / ");
    setExpiryDate(e.target.value);
  };

  const validateExpiryDate = (expiryDate: string): void => {
    const [month, year] = expiryDate.split(" / ").map((each) => Number(each));
    if (month < 1 || month > 12) {
      setIsValid(false);
    }

    if (year < new Date().getFullYear() % 2000) {
      setIsValid(false);
    }
  };

  const handleOutFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(" / ", "");

    setIsCompleted(false);
    setIsValid(true);
    if (value.length === 4) {
      setIsCompleted(true);
      validateExpiryDate(e.target.value);
    }
  };

  const getValidMessage = (): string => {
    if (!isCompleted) return "유효기간 입력이 완료되지 않았습니다.";

    if (!isValid) return "유효한 유효기간이 아닙니다";

    return "";
  };

  return (
    <InputContainer>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        handleChange={handleOutFocusEvent}
        error={{
          isValid: isValid && (isCompleted || !expiryDate),
          errorMessage: getValidMessage(),
        }}
      />
    </InputContainer>
  );
};
