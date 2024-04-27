import { useContext } from "react";
import FormContext from "../context/card-add-form";

import {
  validateCVCNumberInputCompleted,
  validateCardCompanySelectCompleted,
  validateCardNumbersInputCompleted,
  validateCardOwnerInputCompleted,
  validateCardPasswordInputCompleted,
  validateExpirationDateInputCompleted,
} from "../validators/cardAddFormValidator";

const useCardAddForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  const { formState, dispatch } = context;

  const isCardNumbersInputCompleted = validateCardNumbersInputCompleted(
    formState.cardNumbers.value
  );

  const isCardCompanySelectCompleted = validateCardCompanySelectCompleted(
    formState.cardCompany.value
  );

  const isExpirationDateInputCompleted = validateExpirationDateInputCompleted(
    formState.expirationDate.value
  );

  const isCardOwnerInputCompleted = validateCardOwnerInputCompleted(
    formState.ownerName.value
  );

  const isCVCNumberInputCompleted = validateCVCNumberInputCompleted(
    formState.cvcNumber.value
  );

  const isCardPasswordInputCompleted = validateCardPasswordInputCompleted(
    formState.cardPassword.value
  );

  const isFormInputCompleted =
    isCardNumbersInputCompleted &&
    isCardCompanySelectCompleted &&
    isExpirationDateInputCompleted &&
    isCardOwnerInputCompleted &&
    isCVCNumberInputCompleted &&
    isCardPasswordInputCompleted;

  return {
    formState,
    dispatch,
    isCardNumbersInputCompleted,
    isCardCompanySelectCompleted,
    isExpirationDateInputCompleted,
    isCardOwnerInputCompleted,
    isCVCNumberInputCompleted,
    isCardPasswordInputCompleted,
    isFormInputCompleted,
  };
};

export default useCardAddForm;
