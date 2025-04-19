import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";
import type {
  CardNumberState,
  CardNumberInputKey,
} from "../components/AddCardForm/components/CardNumber/types";
import type { ExpireDateState } from "../components/AddCardForm/components/ExpireDate/types";

interface AddCardState {
  cardNumberState: CardNumberState;
  handleCardNumberChange: (key: CardNumberInputKey, value: string) => void;
  expireDate: ExpireDateState;
  handleExpireMonthChange: (value: string) => void;
  handleExpireYearChange: (value: string) => void;
  handleExpireMonthBlur: (value: string) => void;
  CVCState: { value: string; errorMessage: string };
  handleCVCChange: (value: string) => void;
}

interface PreviewState {
  cardNumberState: CardNumberState;
  expireDate: ExpireDateState;
}

interface UseAddCardReturn {
  addCardState: AddCardState;
  previewState: PreviewState;
}

const useAddCard = (): UseAddCardReturn => {
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
