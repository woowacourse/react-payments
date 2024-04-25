import useCardCvc, { CardCvcErrorState } from "./useCardCvc";
import useCardExpiration, {
  CardExpiration,
  CardExpirationErrorState,
} from "./useCardExpiration";
import useCardIssuer, { CardIssuerErrorState } from "./useCardIssuer";
import useCardNumbers, {
  CardNumbers,
  CardNumbersErrorState,
} from "./useCardNumbers";
import useCardOwnerName, { CardOwnerNameErrorState } from "./useCardOwnerName";
import useCardPassword, { CardPasswordErrorState } from "./useCardPassword";

import { CardIssuer } from "../constants/cardIssuers";
import useIsReadyForSubmit from "./useIsReadyForSubmit";

export interface CardInformationValueState {
  cardNumbers: CardNumbers;
  cardIssuer: CardIssuer | "";
  cardExpiration: CardExpiration;
  cardOwnerName: string;
  cardCvc: string;
  cardPassword: string;
}

export interface CardInformationErrorState {
  cardNumbers: CardNumbersErrorState;
  cardIssuer: CardIssuerErrorState;
  cardExpiration: CardExpirationErrorState;
  cardOwnerName: CardOwnerNameErrorState;
  cardCvc: CardCvcErrorState;
  cardPassword: CardPasswordErrorState;
}

const useCardEnrollForm = () => {
  const cardNumbers = useCardNumbers();
  const cardIssuer = useCardIssuer();
  const cardExpiration = useCardExpiration();
  const cardOwnerName = useCardOwnerName();
  const { isFocused: isCvcFocused, ...cardCvc } = useCardCvc();
  const cardPassword = useCardPassword();

  const cardInformationValueState: CardInformationValueState = {
    cardPassword: cardPassword.valueState,
    cardCvc: cardCvc.valueState,
    cardNumbers: cardNumbers.valueState,
    cardExpiration: cardExpiration.valueState,
    cardOwnerName: cardOwnerName.valueState,
    cardIssuer: cardIssuer.valueState,
  };

  const cardInformationErrorState: CardInformationErrorState = {
    cardPassword: cardPassword.errorState,
    cardCvc: cardCvc.errorState,
    cardNumbers: cardNumbers.errorState,
    cardExpiration: cardExpiration.errorState,
    cardOwnerName: cardOwnerName.errorState,
    cardIssuer: cardIssuer.errorState,
  };

  const isReadyForSubmit = useIsReadyForSubmit([
    cardInformationValueState,
    cardInformationErrorState,
  ]);

  return {
    isCvcFocused,
    isReadyForSubmit,

    cardPassword,
    cardCvc,
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cardIssuer,

    cardInformation: cardInformationValueState,
  };
};

export default useCardEnrollForm;
