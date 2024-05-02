import Input from "./Input";
import FormElement from "../common/FormElement";
import useCardNumberForm from "../../hooks/useCardNumberForm";
import { useState } from "react";

export interface CardFormProps {
  labelContent: string;
  inputCount: number;
  type: string;
  placeholders: string[];
  onValidation?: (isValid: boolean) => void;
  onFocus: (field: string | null) => void;
}

interface CardNumberFormProps extends CardFormProps {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
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
}: CardNumberFormProps) => {
  const { updateInputValidity, isValidCarNumber, setErrorMessage, errorMessage } =
    useCardNumberForm(onValidation!);

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
