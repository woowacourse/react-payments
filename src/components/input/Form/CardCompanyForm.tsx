import { useEffect, useState } from "react";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import Validator from "../../../utils/Validator";
import CreditCardForm from "../../creditCardForm";
import InputCreditCardCompany from "../InputForm/InputCreditCardCompany";

interface CardCompanyFormProps {
  selectedCompany: string;
  setSelectedCompany: (value: string) => void;
  setIsCardCompanyValid: (value: boolean) => void;
  onBlur: () => void;
}

const CardCompanyForm = ({
  selectedCompany,
  setSelectedCompany,
  setIsCardCompanyValid,
}: CardCompanyFormProps) => {
  const [cardCompanyError, setCardCompanyError] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCompany(value);
    setIsSelected(true);
  };

  const handleCompanyBlur = () => {
    if (!isSelected) {
      setCardCompanyError(true);
      setIsCardCompanyValid(false);
    }
  };

  useEffect(() => {
    if (selectedCompany) {
      const { isError, isValid } = Validator.checkCreditCardCompany(selectedCompany);
      setCardCompanyError(isError);
      setIsCardCompanyValid(isValid);
    }
  }, [selectedCompany, setIsCardCompanyValid]);

  return (
    <CreditCardForm
      title={CARD_FORM_MESSAGE.inputCardCompany}
      description={CARD_FORM_MESSAGE.cardCompanyDescription}
      inputError={cardCompanyError}
    >
      <InputCreditCardCompany
        selectedCompany={selectedCompany}
        handleChange={handleCompanyChange}
        onBlur={handleCompanyBlur}
      />
    </CreditCardForm>
  );
};

export default CardCompanyForm;
