import { useState, useEffect } from "react";

import Input from "./Input";
import FormField from "../common/FormField";
import { FORM_REGEXP } from "../../constants/form";
import { CVC_NUMBER_FORM } from "../../constants/form";

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
  const [isEditedOnce, setIsEditedOnce] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({ 0: false });

  const validateCVCNumber = (value: string) => {
    return FORM_REGEXP.validCVCNumber.test(value);
  };

  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    const isAllValid = Object.values(inputValidities).every(
      (isValid) => isValid
    );

    setAllFormsValid(isAllValid);

    setErrorMessage(
      isAllValid || !isEditedOnce
        ? ""
        : CVC_NUMBER_FORM.errorMessage.notThreeDigits
    );

    if (isAllValid) {
      setIsFormFilledOnce(true);
    }
  }, [inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={CVC_NUMBER_FORM.maxInputLength}
      setErrorMessage={setErrorMessage}
      setData={setCVCNumber ? setCVCNumber : () => {}}
      setAllInputValid={(isValid: boolean) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) =>
        value.trim() === "" || validateCVCNumber(value)
      }
      errorMessageText={""}
      onFocus={() => {
        setIsFrontCardPreview ? setIsFrontCardPreview(false) : () => {};
        isEditedOnce ? setIsEditedOnce(true) : () => {};
      }}
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
