import useControlledCardNumber from "../Card/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledCVC from "../Card/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "../Card/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";

const useAddCard = () => {
  const { cardNumberState, handleCardNumberChange } = useControlledCardNumber();
  const {
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
  } = useControlledExpireDate();
  const { CVCState, handleCVCChange } = useControlledCVC();

  const addCardState = {
    cardNumberState,
    handleCardNumberChange,
    expireDate,
    handleExpireMonthChange,
    handleExpireYearChange,
    handleExpireMonthBlur,
    CVCState,
    handleCVCChange,
  };

  const previewState = { cardNumberState, expireDate };

  return { addCardState, previewState };
};

export default useAddCard;
