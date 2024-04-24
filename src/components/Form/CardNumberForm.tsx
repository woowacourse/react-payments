import { useState, useEffect, useRef } from "react";

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
  const [focusedInputIndex, setFocusedInputIndex] = useState("-1");
  const [isAllInputValid, setAllInputValid] = useState(false);
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

  const focusToNextInput = () => {
    const curIdx = focusedInputIndex;
    const nextInputRef = inputRefs.current[Number(curIdx) + 1];
    if (nextInputRef) {
      nextInputRef.focus();
    }
  };

  const setInputRef = (element: HTMLInputElement, index: number) => {
    inputRefs.current[index] = element;
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputCount);
  }, [inputCount]);

  useEffect(() => {
    const isAllValid = Object.values(inputValidities).every(
      (isValid) => isValid
    );

    setAllInputValid(isAllValid);
    setAllFormsValid(isAllValid);

    focusToNextInput();

    setErrorMessage(
      isAllValid ? "" : CARD_NUMBER_FORM.errorMessage.notAllValid
    );

    if (isAllValid) {
      setIsFormFilledOnce(true);
    }
  }, [inputValidities]);

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트하는 함수
  const updateInputValidity = (index: string, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      ref={(element) => setInputRef(element as HTMLInputElement, index)}
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
        value.trim() === "" || FORM_REGEXP.fourDigitNumber.test(value)
      }
      errorMessageText={CARD_NUMBER_FORM.errorMessage.fourDigits}
      setFocusedInputIndex={setFocusedInputIndex}
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
