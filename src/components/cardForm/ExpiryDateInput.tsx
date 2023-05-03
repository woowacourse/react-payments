import Container from "../common/Container";
import Input from "../common/Input";
import InputLabel from "../common/InputLabel";

import React from "react";
import { useContext, useRef } from "react";
import { NewCardContext } from "../../contexts/NewCardContext";

import { EXPRIYDATE_MAXLEGNTH, EXPRIYDATE_REGEX, TWO_TO_NINE_REGEX } from "../../constants";
import { ValidFlagType } from "../../types/input";

interface ExpiryDateInputProps {
  isInputsValid: ValidFlagType;
  setExpriyDateCompleted: (isCompleted: boolean) => void;
  setIsExpiryDateValid: (isValid: boolean) => void;
}

const paddingSingleDigitMonth = (expriyDate: string) => {
  if (expriyDate.length === 2 && !new RegExp(TWO_TO_NINE_REGEX).test(expriyDate[0])) {
    return `${"0"}${expriyDate}`;
  }

  return expriyDate;
};

const ExpiryDateInfo = {
  label: "expiryDate",
  placeholder: "MM / YY",
  type: "text",
  $width: "137px",
  $textPosition: "center",
};

const ExpiryDateInput = ({ isInputsValid, setExpriyDateCompleted, setIsExpiryDateValid }: ExpiryDateInputProps) => {
  const { setExpiryDate } = useContext(NewCardContext);
  const postText = useRef("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll("/", "").replaceAll(" ", "");

    if (value.length > EXPRIYDATE_MAXLEGNTH) {
      e.target.value = postText.current;
      return;
    }

    const expriyDate = paddingSingleDigitMonth(value);

    e.target.value = (expriyDate.match(new RegExp(EXPRIYDATE_REGEX)) ?? []).join(" / ");
    postText.current = e.target.value;

    setExpiryDate(e.target.value);

    setIsExpiryDateValid(true);
    setExpriyDateCompleted(value.length === EXPRIYDATE_MAXLEGNTH);
  };

  return (
    <Container>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        error={{
          isValid: isInputsValid.isExpiryDateValid,
          errorMessage: "유효한 만료일을 입력해주세요.",
        }}
      />
    </Container>
  );
};

export default React.memo(ExpiryDateInput);
