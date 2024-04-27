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
  const cardPasswordInputProps = useCardPassword();
  const {
    isFocused: isCardCvcInputFocused,
    isDoneThisStep: isReadyToRenderCardPassword,
    cardCvcInputProps,
  } = useCardCvc();
  const { isDoneThisStep: isReadyToRenderCardCvc, cardOwnerNameInputProps } =
    useCardOwnerName();
  const {
    isDoneThisStep: isReadyToRenderCardOwnerName,
    cardExpirationDateInputProps,
  } = useCardExpiration();
  const {
    isDoneThisStep: isReadyToRenderCardExpiration,
    cardIssuerSelectProps,
  } = useCardIssuer();
  const { isDoneThisStep: isReadyToRenderCardIssuer, cardNumbersInputProps } =
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

  const isReadyToSubmit = useIsReadyToSubmit([
    cardInformationValueState,
    cardInformationErrorState,
  ]);

  return {
    cardInformation: cardInformationValueState,

    isCardCvcInputFocused,
    isReadyToSubmit,

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
