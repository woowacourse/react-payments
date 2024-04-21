import { useState, useEffect } from "react";

import Input from "./Input";
import FormField from "../common/FormField";

export interface CardNumberFormProps {
  labelContent: string;
  inputCount: number;
  type: string;
  placeholders: string[];
  setCardNumbers?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setExpirationDate?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
  setUserName?: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const CardNumberForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setCardNumbers,
}: CardNumberFormProps) => {
  const [isAllInputValid, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({});

  useEffect(() => {
    const isAllValid = Object.values(inputValidities).every(
      (isValid) => isValid
    );
    setAllInputValid(isAllValid);
    setErrorMessage(isAllValid ? "" : "모든 필드를 정확하게 입력해주세요.");
  }, [inputValidities]);

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트하는 함수
  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders[index]}
      maxLength={4}
      setErrorMessage={setErrorMessage}
      setData={setCardNumbers ? setCardNumbers : () => {}}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) => /^[0-9]{4}$/.test(value)}
      errorMessageText="숫자 4자리를 입력해주세요."
    />
  ));

  return (
    <FormField
      labelContent={labelContent}
      inputs={inputs}
      errorMessage={errorMessage}
    />
  );
};

export default CardNumberForm;
