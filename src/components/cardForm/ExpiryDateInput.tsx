import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import { useState } from "react";

interface ExpiryDateInputProps {
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
  setExpiryDate: (value: string) => void;
  setIsCompleted: (isCompleted: boolean) => void;
}

const ExpiryDateInfo = {
  label: "expiryDate",
  width: "137px",
  placeholder: "MM / YY",
  textPosition: "center",
  type: "text",
};

export const ExpiryDateInput = ({ isValid, setExpiryDate, setIsCompleted, setIsValid }: ExpiryDateInputProps) => {
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

    setIsCompleted(false);
    setIsValid(true);
    if (value.length === 4) {
      setIsCompleted(true);
    }
  };

  return (
    <Container>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        error={{
          isValid: isValid,
          errorMessage: "유효한 만료일을 입력해주세요.",
        }}
      />
    </Container>
  );
};
