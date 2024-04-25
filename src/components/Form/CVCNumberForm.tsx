import { useState, useEffect } from "react";

import Input from "./Input";
import FormField from "../common/FormField";

import { ICardFormProps } from "./Form";

const CVCNumberForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setAllFormsValid,
  setIsFormFilledOnce,
  setIsFrontCardPreview,
  setCVCNumber,
}: ICardFormProps) => {
  const [isAllInputValid, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({ 0: false });

  const validateCVCNumber = (value: string) => {
    const REGEXP = /[0-9]{3}/;
    return value !== "" && REGEXP.test(value);
  };

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

    setErrorMessage(allValid ? "" : "CVC 번호는 3자리 숫자입니다.");

    if (allValid) {
      setIsFormFilledOnce(true);
    }
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={3}
      setErrorMessage={setErrorMessage}
      setData={setCVCNumber ? setCVCNumber : () => {}}
      setAllInputValid={(isValid: boolean) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) =>
        value.trim() === "" || validateCVCNumber(value)
      }
      errorMessageText={""}
      onFocus={() =>
        setIsFrontCardPreview ? setIsFrontCardPreview(false) : () => {}
      }
      onBlur={() =>
        setIsFrontCardPreview ? setIsFrontCardPreview(true) : () => {}
      }
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

export default CVCNumberForm;
