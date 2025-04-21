import useControlledCardPassword from "@/card/CardPassword/hooks/useControlledCardPassword";
import useControlledCardNumber from "@card/CardNumber/hooks/useControlledCardNumber";
import useControlledCardType from "@card/CardType/hooks/useControlledCardType";
import useControlledCVC from "@card/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "@card/ExpireDate/hooks/useControlledExpireDate";

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
  const { CVCState, handleCVCChange } = useControlledCVC();
  const { cardPasswordState, handleCardPasswordChange } =
    useControlledCardPassword();

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
    CVCState,
    handleCVCChange,
    cardPasswordState,
    handleCardPasswordChange,
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
