import { useState, useEffect } from "react";

import Dropdown from "../common/Dropdown";
import FormField from "../common/FormField";

import { CARD_COMPANY } from "../../constants/card";
import { CARD_COMPANY_FORM } from "../../constants/form";

const CardCompanyForm = ({
  setCardCompany,
  setAllFormsValid,
  setIsFormFilledOnce,
}: {
  setCardCompany: React.Dispatch<React.SetStateAction<string>>;
  setAllFormsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFormFilledOnce: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isEditedOnce, setIsEditedOnce] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isSelected) {
      setIsEditedOnce(true);
      setErrorMessage("");
      setAllFormsValid(true);
      setIsFormFilledOnce(true);
    } else {
      if (isEditedOnce) {
        setErrorMessage(CARD_COMPANY_FORM.errorMessage.notSelected);
      }

      setAllFormsValid(false);
    }
  }, [isSelected]);

  return (
    <>
      <FormField
        labelContent={""}
        dropdowns={[
          <Dropdown
            values={Object.keys(CARD_COMPANY)}
            contents={Object.keys(CARD_COMPANY)}
            setData={setCardCompany}
            setIsValid={setIsSelected}
          />,
        ]}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default CardCompanyForm;
