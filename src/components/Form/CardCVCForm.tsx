import FormElement from "../common/FormElement";
import Input from "./Input";
import { CardFormProps } from "./CardNumberForm";
import useCardCVCForm from "../../hooks/useCardCVCForm";

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
  const { errorMessage, setErrorMessage, updateInputValidity } = useCardCVCForm(onValidation);

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
