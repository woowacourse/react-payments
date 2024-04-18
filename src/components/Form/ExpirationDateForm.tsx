import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormElement";

import { CardNumberFormProps } from "./CardNumberForm";

const ExpirationDateForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setExpirationDate,
}: CardNumberFormProps) => {
  const [isAllInputValid, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({});

  const validateMonth = (value: string) => {
    const regex = /^(0[1-9]|1[0-2]|1[0-9])$/;

    return regex.test(value);
  };

  const validateYear = (value: string) => {
    const intValue = Number(value);
    return !isNaN(intValue) && intValue >= 24 && intValue <= 29;
  };

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    setAllInputValid(allValid);

    setErrorMessage(allValid ? "" : "만료 기한을 올바르게 입력해주세요.");
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders[index]}
      maxLength={2}
      setErrorMessage={setErrorMessage}
      setData={setExpirationDate ? setExpirationDate : () => {}}
      setAllInputValid={(isValid: boolean) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) =>
        index === 0 ? validateMonth(value) : validateYear(value)
      }
      errorMessageText={
        index === 0
          ? "01에서 12 사이의 숫자를 입력해주세요."
          : "24에서 29 사이의 숫자를 입력해주세요."
      }
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

export default ExpirationDateForm;
