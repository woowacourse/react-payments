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
import useIsReadyToSubmit from "./useIsReadyToSubmit";

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
  const { isValid: isValidCardPassword, cardPasswordInputProps } =
    useCardPassword();
  const {
    isFocused: isCardCvcInputFocused,
    isDoneThisStep: isReadyToRenderCardPassword,
    isValid: isValidCardCvc,
    cardCvcInputProps,
  } = useCardCvc();
  const {
    isDoneThisStep: isReadyToRenderCardCvc,
    isValid: isValidCardOwnerName,
    cardOwnerNameInputProps,
  } = useCardOwnerName();
  const {
    isDoneThisStep: isReadyToRenderCardOwnerName,
    isValid: isValidCardExpiration,
    cardExpirationDateInputProps,
  } = useCardExpiration();
  const {
    isDoneThisStep: isReadyToRenderCardExpiration,
    isValid: isValidCardIssuer,
    cardIssuerSelectProps,
  } = useCardIssuer();
  const {
    isDoneThisStep: isReadyToRenderCardIssuer,
    isValid: isValidCardNumbers,
    cardNumbersInputProps,
  } = useCardNumbers();

  const isReadyToSubmit = useIsReadyToSubmit([
    isValidCardPassword,
    isValidCardCvc,
    isValidCardOwnerName,
    isValidCardExpiration,
    isValidCardIssuer,
    isValidCardNumbers,
  ]);

  const cardInformationValueState: CardInformationValueState = {
    cardPassword: cardPasswordInputProps.valueState,
    cardCvc: cardCvcInputProps.valueState,
    cardOwnerName: cardOwnerNameInputProps.valueState,
    cardExpiration: cardExpirationDateInputProps.valueState,
    cardIssuer: cardIssuerSelectProps.valueState,
    cardNumbers: cardNumbersInputProps.valueState,
  };

  return {
    isReadyToSubmit,

    cardInformation: cardInformationValueState,
    isCardCvcInputFocused,

    dynamicInputUiFlag: {
      isReadyToRenderCardIssuer,
      isReadyToRenderCardExpiration,
      isReadyToRenderCardOwnerName,
      isReadyToRenderCardCvc,
      isReadyToRenderCardPassword,
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
