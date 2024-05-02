import FormElement from "../common/FormElement";
import { useEffect, useState } from "react";
import Input from "./Input";
import { CardFormProps } from "./CardNumberForm";

interface CardCVCFormProps extends CardFormProps {
  cardCVC: string[];
  setCardCVC: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardCVCForm = ({
  labelContent,
  inputCount,
  type,
  placeholders,
  cardCVC,
  setCardCVC,
  onValidation,
  onFocus,
}: CardCVCFormProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValidity, setInputValidity] = useState({
    0: false,
  });

  // NOTE: 각 입력 필드의 유효성 검사 결과를 업데이트
  const updateInputValidity = (index: number, isValid: boolean) => {
    setInputValidity((prevValidities) => ({
      ...prevValidities,
      [index]: isValid,
    }));
  };

  useEffect(() => {
    if (onValidation && inputValidity[0]) {
      onValidation(true);
      setErrorMessage("");
    }
    if (onValidation && !inputValidity[0]) {
      onValidation(false);
      setErrorMessage("3자리 수를 입력하세요.");
    }
  }, [inputValidity]);

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
