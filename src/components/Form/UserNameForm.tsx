import { useState, useEffect } from "react";

import Input from "./Input";
import FormElement from "../common/FormField";

import { ICardFormProps } from "./Form";
import { USERNAME_FORM, FORM_REGEXP } from "../../constants/form";

const UserNameForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setUserName,
  setAllFormsValid,
  setIsFormFilledOnce,
}: ICardFormProps) => {
  const [isGotInputOnce, setIsGotInputOnce] = useState(false);
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
      allValid || !isGotInputOnce ? "" : USERNAME_FORM.errorMessage.notAllValid
    );
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
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={USERNAME_FORM.maxInputLength}
      setErrorMessage={setErrorMessage}
      setData={setUserName ? setUserName : () => {}}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) => value.trim() === "" || validateName(value)}
      errorMessageText=""
      onFocus={() => (setIsGotInputOnce ? setIsGotInputOnce(true) : () => {})}
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
