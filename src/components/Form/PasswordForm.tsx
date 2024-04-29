import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormField";
import { FORM_REGEXP } from "../../constants/form";
import { PASSWORD_FORM } from "../../constants/form";

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
  const [isEditedOnce, setIsEditedOnce] = useState(false);
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

    setAllFormsValid(allValid);

    if (allValid) {
      setIsFormFilledOnce(true);
    }

    setErrorMessage(
      allValid || !isEditedOnce ? "" : PASSWORD_FORM.errorMessage.notTwoDigits
    );
  }, [inputValidities]);

  const validatePassword = (passwordInput: string) => {
    return FORM_REGEXP.validPassword.test(passwordInput);
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={PASSWORD_FORM.maxInputLength}
      setErrorMessage={setErrorMessage}
      setData={setPassword ? setPassword : () => {}}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) => value.trim() === "" || validatePassword(value)}
      errorMessageText=""
      onFocus={() => (setIsEditedOnce ? setIsEditedOnce(true) : () => {})}
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
