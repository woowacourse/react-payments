import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormField";

import { CardNumberFormProps } from "./CardNumberForm";
import { USERNAME_FORM, FORM_REGEXP } from "../../constants/form";

const UserNameForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setUserName,
}: CardNumberFormProps) => {
  const [isAllInputValid, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({});

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  // NOTE: 모든 입력 필드가 유효한지 검사
  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : USERNAME_FORM.errorMessage.notAllValid);
  }, [inputValidities]);

  const validateName = (nameInput: string) => {
    const regex = FORM_REGEXP.validUserName;
    return regex.test(nameInput);
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders[index]}
      maxLength={USERNAME_FORM.maxInputLength}
      setErrorMessage={setErrorMessage}
      setData={setUserName ? setUserName : () => {}}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) => validateName(value)}
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

export default UserNameForm;
