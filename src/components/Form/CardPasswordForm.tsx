import FormElement from "../common/FormElement";
import { useEffect, useState } from "react";
import Input from "./Input";
import { CardFormProps } from "./CardNumberForm";

interface CardPasswordFormProps extends CardFormProps {
  cardPassword: string[];
  setCardPassword: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardPasswordForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  cardPassword,
  setCardPassword,
  onValidation,
  onFocus,
}: CardPasswordFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({
    0: false,
  });
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (type: string) => {
    onFocus(type);
    setIsFocused(true);
  };

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    if (onValidation && inputValidities[0]) {
      onValidation(true);
      setErrorMessage("");
    }
    if (onValidation && !inputValidities[0]) {
      onValidation(false);
      setErrorMessage("2자리 수를 입력하세요.");
    }
  }, [cardPassword, onValidation, inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index}
      type={type}
      placeholder={placeholders[index]}
      maxLength={2}
      state={cardPassword || []}
      setState={setCardPassword || (() => {})}
      setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
      setAllInputValid={(isValid: boolean) => updateInputValidity(index, isValid)}
      validationRule={(value) => /^[0-9]{2}$/.test(value)}
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

export default CardPasswordForm;
