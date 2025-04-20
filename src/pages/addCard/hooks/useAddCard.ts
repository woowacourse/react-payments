import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledCardOwner from "../components/AddCardForm/components/CardOwner/hooks/useControlledCardOwner";
import useControlledCardType from "../components/AddCardForm/components/CardType/hooks/useControlledCardType";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";

const useAddCard = () => {
  const { cardNumberState, inputRefs, handleCardNumberChange } =
    useControlledCardNumber();
  const { cardType, handleCardTypeChange } = useControlledCardType();
  const {
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
  } = useControlledExpireDate();
  const { cardOwner, handleCardOwnerChange } = useControlledCardOwner();
  const { CVCState, handleCVCChange } = useControlledCVC();

  const addCardState = {
    cardNumberState,
    inputRefs,
    handleCardNumberChange,
    cardType,
    handleCardTypeChange,
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
    cardOwner,
    handleCardOwnerChange,
    CVCState,
    handleCVCChange,
  };

  const previewState = { cardNumberState, cardType, expireDate, CVCState };

  return { addCardState, previewState };
};

export default useAddCard;
