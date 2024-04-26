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
  const cardPasswordInputProps = useCardPassword();
  const {
    isFocused: isCardCvcInputFocused,
    isDone: isCardCvcInputDone,
    cardCvcInputProps,
  } = useCardCvc();
  const { isDone: isCardOwnerNameInputDone, cardOwnerNameInputProps } =
    useCardOwnerName();
  const {
    isDone: isCardExpirationDateInputDone,
    cardExpirationDateInputProps,
  } = useCardExpiration();
  const { isDone: isCardIssuerInputDone, cardIssuerSelectProps } =
    useCardIssuer();
  const { isDone: isCardNumbersInputDone, cardNumbersInputProps } =
    useCardNumbers();

  const cardInformationValueState: CardInformationValueState = {
    cardPassword: cardPasswordInputProps.valueState,
    cardCvc: cardCvcInputProps.valueState,
    cardOwnerName: cardOwnerNameInputProps.valueState,
    cardExpiration: cardExpirationDateInputProps.valueState,
    cardIssuer: cardIssuerSelectProps.valueState,
    cardNumbers: cardNumbersInputProps.valueState,
  };

  const cardInformationErrorState: CardInformationErrorState = {
    cardPassword: cardPasswordInputProps.errorState,
    cardCvc: cardCvcInputProps.errorState,
    cardOwnerName: cardOwnerNameInputProps.errorState,
    cardExpiration: cardExpirationDateInputProps.errorState,
    cardIssuer: cardIssuerSelectProps.errorState,
    cardNumbers: cardNumbersInputProps.errorState,
  };

  const isReadyForSubmit = useIsReadyForSubmit([
    cardInformationValueState,
    cardInformationErrorState,
  ]);

  return {
    cardInformation: cardInformationValueState,

    isCardCvcInputFocused,
    isReadyForSubmit,

    dynamicInputUiFlag: {
      isCardNumbersInputDone,
      isCardIssuerInputDone,
      isCardExpirationDateInputDone,
      isCardOwnerNameInputDone,
      isCardCvcInputDone,
    },

    cardPasswordInputProps,
    cardCvcInputProps,
    cardOwnerNameInputProps,
    cardExpirationDateInputProps,
    cardIssuerSelectProps,
    cardNumbersInputProps,
  };
};

export default useCardEnrollForm;
