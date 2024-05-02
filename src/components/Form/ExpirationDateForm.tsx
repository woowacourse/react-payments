import { useState } from "react";
import Input from "./Input";
import FormElement from "../common/FormElement";
import { CardFormProps } from "./CardNumberForm";
import useExpirationDateForm from "../../hooks/useExpirationDateForm";

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
  const [isFocused, setIsFocused] = useState(false);
  const { errorMessage, setErrorMessage, validateMonth, validateYear, updateInputValidity } =
    useExpirationDateForm(onValidation);

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
