import { CardNumberState } from "@/card/CardNumber/types";
import { CardType } from "../types";
import { ExpireDateState } from "@/card/ExpireDate/types";
import { CVCState } from "@/card/CVC/hooks/useControlledCVC";
import { CardPasswordState } from "@/card/CardPassword/types";

interface GetIsAddFormSubmitParameters {
  cardNumberState: CardNumberState;
  cardType: CardType | null;
  expireDate: ExpireDateState;
  CVCState: CVCState;
  cardPasswordState: CardPasswordState;
}

export const getIsAddFormSubmit = ({
  cardNumberState,
  cardType,
  expireDate,
  CVCState,
  cardPasswordState,
}: GetIsAddFormSubmitParameters) => {
  const isCardNumberValid = Object.values(cardNumberState).every(
    ({ isError, value }) => !isError && value !== ""
  );
  const isCardTypeValid = cardType !== null;
  const isExpireDateValid = Object.values(expireDate).every(
    ({ errorMessage, value }) => errorMessage === "" && value !== ""
  );
  const isCVCValid = !CVCState.isError && CVCState.value !== "";
  const isCardPasswordValid =
    cardPasswordState.errorMessage === "" && cardPasswordState.value !== "";

  return (
    isCardNumberValid &&
    isCardTypeValid &&
    isExpireDateValid &&
    isCVCValid &&
    isCardPasswordValid
  );
};
