import type { CardNumberState } from "@/card/CardNumber/types";
import useControlledCardPassword, {
  type ControlledCardPassword,
} from "@/card/CardPassword/hooks/useControlledCardPassword";
import useControlledCardNumber, {
  type ControlledCardNumber,
} from "@card/CardNumber/hooks/useControlledCardNumber";
import useControlledCardType, {
  type ControlledCardType,
} from "@card/CardType/hooks/useControlledCardType";
import useControlledCVC, {
  type ControlledCVC,
  type CVCState,
} from "@card/CVC/hooks/useControlledCVC";
import useControlledExpireDate, {
  type ControlledExpireDate,
} from "@card/ExpireDate/hooks/useControlledExpireDate";
import type { CardType } from "../types";
import type { ExpireDateState } from "@/card/ExpireDate/types";

interface AddCardState {
  controlledCardNumber: ControlledCardNumber;
  controlledCardType: ControlledCardType;
  controlledExpireDate: ControlledExpireDate;
  controlledCVC: ControlledCVC;
  controlledCardPassword: ControlledCardPassword;
}

interface PreviewState {
  cardNumberState: CardNumberState;
  cardType: CardType | null;
  expireDate: ExpireDateState;
  CVCState: CVCState;
}

interface UseAddCardReturn {
  addCardState: AddCardState;
  previewState: PreviewState;
}

const useAddCard = (): UseAddCardReturn => {
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
