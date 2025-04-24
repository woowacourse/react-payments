import useControlledCardPassword from "@/card/CardPassword/hooks/useControlledCardPassword";
import useControlledCardNumber from "@card/CardNumber/hooks/useControlledCardNumber";
import useControlledCardType from "@card/CardType/hooks/useControlledCardType";
import useControlledCVC from "@card/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "@card/ExpireDate/hooks/useControlledExpireDate";
import { getIsAddFormSubmit } from "../validation";
import useAddCardFormStep from "./useAddCardFormStep";

const useAddCard = () => {
  const { cardNumberState, isCardNumberNextStep, ...controlledCardNumber } =
    useControlledCardNumber();
  const { cardType, handleCardTypeChange, isCardTypeNextStep } =
    useControlledCardType();
  const { expireDate, isExpireDateNextStep, ...controlledExpireDate } =
    useControlledExpireDate();
  const { CVCState, handleCVCChange, isCVCNextStep } = useControlledCVC();
  const { cardPasswordState, handleCardPasswordChange } =
    useControlledCardPassword();
  const addCardFormSteps = useAddCardFormStep({
    isCardNumberNextStep,
    isCardTypeNextStep,
    isExpireDateNextStep,
    isCVCNextStep,
  });

  const addCardState = {
    addCardFormSteps,
    cardNumberState,
    ...controlledCardNumber,
    cardType,
    handleCardTypeChange,
    expireDate,
    ...controlledExpireDate,
    CVCState,
    handleCVCChange,
    cardPasswordState,
    handleCardPasswordChange,
    isAddFormSubmit: getIsAddFormSubmit({
      cardNumberState,
      cardType,
      expireDate,
      CVCState,
      cardPasswordState,
    }),
  };

  const previewState = {
    cardNumberState,
    cardType,
    expireDate,
    CVCState,
  };

  return { addCardState, previewState };
};

export default useAddCard;
