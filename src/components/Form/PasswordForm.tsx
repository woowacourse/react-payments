import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormField";

import { ICardFormProps } from "./Form";

const PasswordForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setPassword,
  setAllFormsValid,
  setIsFormFilledOnce,
}: ICardFormProps) => {
  const [isAllInputValid, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({
    0: false,
  });

  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);

    setAllInputValid(allValid);
    setAllFormsValid(allValid);

    if (allValid) {
      setIsFormFilledOnce(true);
    }

    setErrorMessage(allValid ? "" : "비밀번호는 숫자 2자리입니다.");
  }, [inputValidities]);

  const validatePassword = (passwordInput: string) => {
    const regex = /[0-9]{2}/;
    return regex.test(passwordInput);
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={2}
      setErrorMessage={setErrorMessage}
      setData={setPassword ? setPassword : () => {}}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) => value.trim() === "" || validatePassword(value)}
      errorMessageText=""
    />
  ));

  return (
    <FormElement
      labelContent={labelContent}
      inputs={inputs}
      errorMessage={errorMessage}
    />
  );
};

export default PasswordForm;
