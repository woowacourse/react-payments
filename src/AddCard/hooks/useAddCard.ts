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

export interface UseAddCardReturn {
  addCardState: AddCardState;
  previewState: PreviewState;
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

  return { addCardState, previewState };
};

export default useAddCard;
