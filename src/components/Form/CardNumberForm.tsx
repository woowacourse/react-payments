import Input from "./Input";
import FormElement from "../common/FormElement";
import { FormProps } from "./Form";
import useCardNumberForm from "../../hooks/useCardNumberForm";
import { useEffect, useState } from "react";

export interface CardFormProps extends FormProps {
  labelContent: string;
  inputCount: number;
  type: string;
  placeholders: string[];
  onValidation?: (isValid: boolean) => void;
  onFocus: (field: string | null) => void;
}

const CardNumberForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  cardNumbers,
  setCardNumbers,
  onValidation,
  onFocus,
}: CardFormProps) => {
  const [allInputValid, setAllInputValid] = useState(false);
  const [inputValidities, setInputValidities] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const isValidCarNumber = (value: string) => /^[0-9]{4}$/.test(value);

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트하는 함수
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "4자리의 숫자를 입력해주세요.");

    if (onValidation) onValidation(allValid);
  }, [inputValidities]);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (type: string) => {
    onFocus(type);
    setIsFocused(true);
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index}
      type={type}
      placeholder={placeholders[index]}
      maxLength={4}
      state={cardNumbers || []}
      setState={setCardNumbers || (() => [])}
      setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
      setAllInputValid={(isValid) => updateInputValidity(index, isValid)}
      validationRule={(value) => isValidCarNumber(value)}
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

export default CardNumberForm;
