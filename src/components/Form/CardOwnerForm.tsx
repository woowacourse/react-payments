import { useState } from "react";
import Input from "./Input";
import FormElement from "../common/FormElement";
import { CardFormProps } from "./CardNumberForm";
import useCardOwnerForm from "../../hooks/useCardOwnerForm";

interface CardOwnerFormProps extends CardFormProps {
  cardOwner: string[];
  setCardOwner: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardOwnerForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  cardOwner,
  setCardOwner,
  onValidation,
  onFocus,
}: CardOwnerFormProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { errorMessage, setErrorMessage, updateInputValidity } = useCardOwnerForm(onValidation);

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
      maxLength={30}
      state={cardOwner || []}
      setState={setCardOwner || (() => {})}
      setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
      setAllInputValid={(isValid) => updateInputValidity(index, isValid)}
      validationRule={(value) => /^[A-Z\s]{1,30}$/.test(value)}
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

export default CardOwnerForm;
