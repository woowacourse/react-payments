import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormElement";

import { CardNumberFormProps } from "./CardNumberForm";

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
  const updateInputValidity = (index, isValid) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  // NOTE: 모든 입력 필드가 유효한지 검사
  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(
      allValid ? "" : "이름은 30자 이하의 영문 대문자여야 합니다."
    );
  }, [inputValidities]);

  const validateName = (nameInput) => {
    const regex = /^[A-Z\s]{1,30}$/;
    return regex.test(nameInput);
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders[index]}
      maxLength={30}
      setErrorMessage={setErrorMessage}
      setData={setUserName}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) => validateName(value)}
      errorMessageText="이름은 30자 이하의 영문 대문자여야 합니다."
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
