import { useState, useEffect } from "react";

import Input from "./Input";
import FormField from "../common/FormField";

import { EXPIRATION_DATE_FORM, FORM_REGEXP } from "../../constants/form";

import { ICardFormProps } from "./Form";

const ExpirationDateForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setExpirationDate,
  setAllFormsValid,
  setIsFormFilledOnce,
}: ICardFormProps) => {
  const [isAllInputValid, setAllInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({});

  const validateMonth = (value: string) => {
    return value !== "" && FORM_REGEXP.validMonth.test(value);
  };

  const validateYear = (value: string) => {
    const intValue = Number(value);
    return (
      !isNaN(intValue) &&
      intValue >= EXPIRATION_DATE_FORM.startYear &&
      intValue <= EXPIRATION_DATE_FORM.endYear
    );
  };

  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const allValid = Object.values(inputValidities).every((isValid) => isValid);
    const allFilled = Object.keys(inputValidities).length === inputCount;

    setAllInputValid(allValid && allFilled);
    setAllFormsValid(allValid && allFilled);

    setErrorMessage(
      allValid && allFilled ? "" : EXPIRATION_DATE_FORM.errorMessage.notAllValid
    );

    if (allValid && allFilled) {
      setIsFormFilledOnce(true);
    }
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={EXPIRATION_DATE_FORM.maxInputLength}
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
          ? EXPIRATION_DATE_FORM.errorMessage.invalidMonth
          : EXPIRATION_DATE_FORM.errorMessage.invalidYear
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

export default ExpirationDateForm;
