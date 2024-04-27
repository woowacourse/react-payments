import { useState, useEffect } from "react";

import useInputFocus from "../../hooks/useInputFocus";
import Input from "./Input";
import FormField from "../common/FormField";

import { CARD_NUMBER_FORM, FORM_REGEXP } from "../../constants/form";

import { ICardFormProps } from "./Form";

interface InputValidities {
  [key: string]: boolean;
}

const CardNumberForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  setCardNumbers,
  setAllFormsValid,
  setIsFormFilledOnce,
}: ICardFormProps) => {
  const [isGotInputOnce, setIsGotInputOnce] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState<InputValidities>(
    Array.from({ length: inputCount }, () => false).reduce<InputValidities>(
      (acc, curr, index) => {
        acc[index.toString()] = curr;
        return acc;
      },
      {} as InputValidities
    )
  );

  const { inputRefs, focusNextInput, setFocusedIndex } = useInputFocus(
    inputCount,
    CARD_NUMBER_FORM.maxInputLength
  );

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputCount);
  }, [inputCount]);

  useEffect(() => {
    const isAllValid = Object.values(inputValidities).every(
      (isValid) => isValid
    );

    setAllFormsValid(isAllValid);

    focusNextInput();

    setErrorMessage(
      isAllValid || !isGotInputOnce
        ? ""
        : CARD_NUMBER_FORM.errorMessage.fourDigits
    );

    if (isAllValid) {
      setIsFormFilledOnce(true);
    }
  }, [inputValidities]);

  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      ref={(element) => (inputRefs.current[index] = element)}
      index={index.toString()}
      type={type}
      placeholder={placeholders ? placeholders[index] : ""}
      maxLength={CARD_NUMBER_FORM.maxInputLength}
      setErrorMessage={setErrorMessage}
      setData={setCardNumbers ? setCardNumbers : () => {}}
      setAllInputValid={(isValid) =>
        updateInputValidity(index.toString(), isValid)
      }
      validationRule={(value) =>
        value === "" || FORM_REGEXP.fourDigitNumber.test(value)
      }
      errorMessageText={CARD_NUMBER_FORM.errorMessage.fourDigits}
      setFocusedInputIndex={setFocusedIndex}
      onFocus={() => {
        setIsGotInputOnce && setIsGotInputOnce(true);
      }}
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
