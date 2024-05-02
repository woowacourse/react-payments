import { useState } from "react";
import Input from "./Input";
import FormElement from "../common/FormElement";
import { CardFormProps } from "./CardNumberForm";
import useCardOwnerForm from "../../hooks/useCardOwnerForm";

interface UserNameFormProps extends CardFormProps {
  userName: string[];
  setUserName: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardOwnerForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  userName,
  setUserName,
  onValidation,
  onFocus,
}: UserNameFormProps) => {
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
      state={userName || []}
      setState={setUserName || (() => {})}
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
