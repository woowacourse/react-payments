import useControlledCardPassword from "@/card/CardPassword/hooks/useControlledCardPassword";
import useControlledCardNumber from "@card/CardNumber/hooks/useControlledCardNumber";
import useControlledCardType from "@card/CardType/hooks/useControlledCardType";
import useControlledCVC from "@card/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "@card/ExpireDate/hooks/useControlledExpireDate";

const useAddCard = () => {
  const controlledCardNumber = useControlledCardNumber();
  const controlledCardType = useControlledCardType();
  const controlledExpireDate = useControlledExpireDate();
  const controlledCVC = useControlledCVC();
  const controlledCardPassword = useControlledCardPassword();

  const addCardState = {
    controlledCardNumber,
    controlledCardType,
    controlledExpireDate,
    controlledCVC,
    controlledCardPassword,
  };

  const previewState = {
    cardNumberState: controlledCardNumber.cardNumberState,
    cardType: controlledCardType.cardType,
    expireDate: controlledExpireDate.expireDate,
    CVCState: controlledCVC.CVCState,
  };

  return { addCardState, previewState };
};

export default useAddCard;
