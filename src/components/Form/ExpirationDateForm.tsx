import { useState, useEffect } from "react";
import Input from "./Input";
import FormElement from "../common/FormElement";
import { CardFormProps } from "./CardNumberForm";

interface ExpirationDateFormProps extends CardFormProps {
  expirationDate: string[];
  setExpirationDate: React.Dispatch<React.SetStateAction<string[]>>;
}

const ExpirationDateForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  expirationDate,
  setExpirationDate,
  onValidation,
  onFocus,
}: ExpirationDateFormProps) => {
  const [, setAllInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({
    0: false,
    1: false,
  });

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (type: string) => {
    onFocus(type);
    setIsFocused(true);
  };

  const validateMonth = (value: string) => {
    const regex = /^(0[1-9]|1[0-2])$/;

    return regex.test(value);
  };

  const validateYear = (value: string) => {
    const intValue = Number(value);
    return !isNaN(intValue) && intValue >= 24 && intValue <= 29;
  };

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);

    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "만료 기한을 올바르게 입력해주세요.");

    if (onValidation) onValidation(allValid);
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index}
      type={type}
      placeholder={placeholders[index]}
      maxLength={2}
      state={expirationDate || []}
      setState={setExpirationDate || (() => {})}
      setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
      setAllInputValid={(isValid: boolean) => updateInputValidity(index, isValid)}
      validationRule={(value) => (index === 0 ? validateMonth(value) : validateYear(value))}
      onFocus={() => handleFocus(type)}
    />
  ));

  return (
    <FormElement
      labelContent={labelContent}
      inputs={inputs}
      errorMessage={isFocused ? errorMessage : ""}
    />
  );
};

export default ExpirationDateForm;
