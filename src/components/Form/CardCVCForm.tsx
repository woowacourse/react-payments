import FormElement from "../common/FormElement";
import { useEffect, useState } from "react";
import Input from "./Input";
import { CardFormProps } from "./CardNumberForm";

const CardCVCForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  cardCVC,
  setCardCVC,
  onValidation,
  onFocus,
}: CardFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidities, setInputValidities] = useState({
    0: false,
  });

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidities((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    if (onValidation && inputValidities[0]) {
      onValidation(true);
      setErrorMessage("");
    }
    if (onValidation && !inputValidities[0]) {
      onValidation(false);
      setErrorMessage("3자리 수를 입력하세요.");
    }
  }, [cardCVC, onValidation, inputValidities]);

  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <Input
      key={index}
      index={index}
      type={type}
      placeholder={placeholders[index]}
      maxLength={3}
      state={cardCVC || []}
      setState={setCardCVC || (() => {})}
      setErrorMessage={(errorMessage) => setErrorMessage(errorMessage)}
      setAllInputValid={(isValid: boolean) => updateInputValidity(index, isValid)}
      validationRule={(value) => /^[0-9]{3}$/.test(value)}
      onFocus={() => onFocus(type)}
    />
  ));

  return <FormElement labelContent={labelContent} inputs={inputs} errorMessage={errorMessage} />;
};

export default CardCVCForm;
