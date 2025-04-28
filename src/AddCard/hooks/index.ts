import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledSelectedCardBrand from "../components/AddCardForm/components/CardBrand/hooks/useControlledSelectCardBrand";
import useControlledPassword from "../components/AddCardForm/components/Password/hooks/useControlledPassword";
import useStepValidation from "./useStepValidation";
import useFormState from "./useFormState";

const useCardRegistrationFlow = () => {
  const card = useControlledCardNumber();
  const brand = useControlledSelectedCardBrand();
  const expire = useControlledExpireDate();
  const cvc = useControlledCVC();
  const password = useControlledPassword();

  const slices = { card, brand, expire, cvc, password };

  const dependencies = [
    card.cardNumberState,
    brand.selectedBrand,
    expire.expireDate,
    cvc.CVCState,
    password.passwordState,
  ];

  const { currentStep, allValid } = useStepValidation(slices, dependencies);
  const { state, previewState } = useFormState(slices);

  return {
    state,
    previewState,
    currentStep,
    allValid,
  };
};

export default useCardRegistrationFlow;
