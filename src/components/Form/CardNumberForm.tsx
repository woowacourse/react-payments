import { useState, useEffect } from "react";

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
  const [isAllInputValid, setAllInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState<InputValidities>(
    Array.from({ length: inputCount }, () => false).reduce<InputValidities>(
      (acc, curr, index) => {
        acc[index.toString()] = curr;
        return acc;
      },
      {} as InputValidities // 초깃값에 InputValidities 타입을 명시적으로 적용해야 에러 x
    )
  );

  useEffect(() => {
    const isAllValid = Object.values(inputValidities).every(
      (isValid) => isValid
    );

    setAllInputValid(isAllValid);
    setAllFormsValid(isAllValid);

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

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index.toString()}
      type={type}
      placeholder={placeholders[index]}
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
