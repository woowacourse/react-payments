import { useState, useEffect } from "react";
import Input from "./Input";
import FormElement from "../common/FormElement";
import { CardFormProps } from "./CardNumberForm";

interface UserNameFormProps extends CardFormProps {
  userName: string[];
  setUserName: React.Dispatch<React.SetStateAction<string[]>>;
}

const UserNameForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  userName,
  setUserName,
  onValidation,
  onFocus,
}: UserNameFormProps) => {
  const [, setAllInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidity, setInputValidity] = useState({ 0: false });
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (type: string) => {
    onFocus(type);
    setIsFocused(true);
  };

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidity((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  // NOTE: 모든 입력 필드가 유효한지 검사
  useEffect(() => {
    const allValid = Object.values(inputValidity).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "이름은 30자 이하의 영문 대문자여야 합니다.");

    if (onValidation && allValid) onValidation(true);
    if (onValidation && !allValid) onValidation(false);
  }, [inputValidity]);

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

export default UserNameForm;
