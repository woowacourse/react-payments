import { useEffect } from "react";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import useInput from "../../../hooks/useInput";
import CreditCardForm from "../../creditCardForm";
import InputOwnerName from "../InputForm/InputOwnerName";
import Validator from "../../../utils/Validator";

interface CardOwnerNameFormProps {
  owner: { name: string };
  setOwner: (value: { name: string }) => void;
  setIsOwnerValid: (value: boolean) => void;
}

const CardOwnerNameForm = ({ owner, setOwner, setIsOwnerValid }: CardOwnerNameFormProps) => {
  const [inputValue, handleChange, ownerError] = useInput(owner);

  useEffect(() => {
    const isOwnerValid = Validator.checkCreditCardOwner(inputValue.name);
    console.log(inputValue, inputValue.name);
    console.log("-----", isOwnerValid);
    setOwner(inputValue);
    setIsOwnerValid(isOwnerValid && !ownerError);
    console.log("!!!!!", { inputValue, ownerError, setOwner, setIsOwnerValid });
  }, [inputValue, ownerError, setOwner, setIsOwnerValid]);

  return (
    <CreditCardForm title={CARD_FORM_MESSAGE.inputCardOwner} inputError={ownerError}>
      <InputOwnerName
        inputValue={inputValue.name}
        handleChange={handleChange}
        inputError={ownerError}
      />
    </CreditCardForm>
  );
};

export default CardOwnerNameForm;
