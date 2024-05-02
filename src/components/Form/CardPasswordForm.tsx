import FormElement from "../common/FormElement";
import { useState } from "react";
import Input from "./Input";
import { CardFormProps } from "./CardNumberForm";
import useCardPasswordForm from "../../hooks/useCardPasswordForm";

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
  const [isFocused, setIsFocused] = useState(false);
  const { errorMessage, setErrorMessage, updateInputValidity, handleFocus } = useCardPasswordForm({
    onFocus,
    setIsFocused,
    onValidation,
  });

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
