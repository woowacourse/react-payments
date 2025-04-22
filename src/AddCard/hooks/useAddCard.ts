import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";

type CardNumberSlice = ReturnType<typeof useControlledCardNumber>;
type ExpireDateSlice = ReturnType<typeof useControlledExpireDate>;
type CVCSlice = ReturnType<typeof useControlledCVC>;

export interface AddCardState
  extends CardNumberSlice,
    ExpireDateSlice,
    CVCSlice {}

export interface PreviewState {
  cardNumberState: CardNumberSlice["cardNumberState"];
  expireDate: ExpireDateSlice["expireDate"];
}

export interface ValidationState {
  isCardNumberValid: boolean;
  isExpireDateValid: boolean;
  isCVCValid: boolean;
  isAllValid: boolean;
}

export interface UseAddCardReturn {
  addCardState: AddCardState;
  previewState: PreviewState;
  validationState: ValidationState;
}

export const useAddCard = (): UseAddCardReturn => {
  const card = useControlledCardNumber();
  const expire = useControlledExpireDate();
  const cvc = useControlledCVC();

  const addCardState: AddCardState = { ...card, ...expire, ...cvc };
  const previewState: PreviewState = {
    cardNumberState: card.cardNumberState,
    expireDate: expire.expireDate,
  };

  const isCardNumberValid = Object.values(card.cardNumberState).every(
    (field) => !field.errorMessage && field.value.length === 4
  );

  const isExpireDateValid = Object.values(expire.expireDate).every(
    (field) => !field.errorMessage && field.value.length === 2
  );

  const isCVCValid =
    !cvc.CVCState.errorMessage && cvc.CVCState.value.length === 3;

  const validationState: ValidationState = {
    isCardNumberValid,
    isExpireDateValid,
    isCVCValid,
    isAllValid: isCardNumberValid && isExpireDateValid && isCVCValid,
  };

  return { addCardState, previewState, validationState };
};

export default useAddCard;
