import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormElement";

import { CardFormProps } from "./CardNumberForm";

const UserNameForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  userName,
  setUserName,
}: CardFormProps) => {
  const [, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({});

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  // NOTE: 모든 입력 필드가 유효한지 검사
  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);
    setErrorMessage(allValid ? "" : "이름은 30자 이하의 영문 대문자여야 합니다.");
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index}
      type={type}
      placeholder={placeholders[index]}
      maxLength={30}
      data={userName || []}
      setData={setUserName || (() => {})}
      setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
      setAllInputValid={(isValid) => updateInputValidity(index, isValid)}
      validationRule={(value) => /^[A-Z\s]{1,30}$/.test(value)}
    />
  ));

  return <FormElement labelContent={labelContent} inputs={inputs} errorMessage={errorMessage} />;
};

export default UserNameForm;
