import { useState, useEffect } from "react";

import Dropdown from "../common/Dropdown";
import FormField from "../common/FormField";

import { CARD_COMPANY } from "../../constants/card";

const CardCompanyForm = ({
  setCardCompany,
  setAllFormsValid,
  setIsFormFilledOnce,
}: {
  setCardCompany: React.Dispatch<React.SetStateAction<string>>;
  setAllFormsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFormFilledOnce: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isGotInputOnce, setIsGotInputOnce] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isSelected) {
      setIsGotInputOnce(true);
      setErrorMessage("");
      setAllFormsValid(true);
      setIsFormFilledOnce(true);
    } else {
      if (isGotInputOnce) setErrorMessage("카드사를 선택해 주세요.");
      setAllFormsValid(false);
    }
  }, [isSelected]);

  return (
    <>
      <FormField
        labelContent={""}
        dropdowns={
          <Dropdown
            values={Object.keys(CARD_COMPANY)}
            contents={Object.keys(CARD_COMPANY)}
            setData={setCardCompany}
            setIsValid={setIsSelected}
          />
        }
        errorMessage={errorMessage}
      />
    </>
  );
};

export default CardCompanyForm;
