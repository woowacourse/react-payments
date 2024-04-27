import {
  CardInformationErrorState,
  CardInformationValueState,
} from "./useCardEnrollForm";

import useBoolean from "./common/useBoolean";
import { useEffect } from "react";

const isAllFilled = (cardInformationValueState: CardInformationValueState) => {
  return Object.values(cardInformationValueState).every(
    (cardInformationValue) => {
      if (typeof cardInformationValue === "string") {
        return cardInformationValue.length > 0;
      }
      if (Array.isArray(cardInformationValue)) {
        return cardInformationValue.some((el) => el.length > 0);
      }
      return (
        cardInformationValue.month.length > 0 ||
        cardInformationValue.year.length > 0
      );
    }
  );
};

const isExistError = (cardInformationErrorState: CardInformationErrorState) => {
  return Object.values(cardInformationErrorState).some(({ isError }) => {
    if (typeof isError === "boolean") {
      return isError;
    }
    if (Array.isArray(isError)) {
      return isError.some((el) => el);
    }
    return isError.month || isError.year;
  });
};

type dependencies = [CardInformationValueState, CardInformationErrorState];

const useIsReadyToSubmit = ([
  cardInformationValueState,
  cardInformationErrorState,
]: dependencies) => {
  const { flag: isReadyForSubmit, setFlag: setIsReadyForSubmit } = useBoolean();

  useEffect(() => {
    setIsReadyForSubmit(
      isAllFilled(cardInformationValueState) &&
        !isExistError(cardInformationErrorState)
    );
  }, [cardInformationValueState, cardInformationErrorState]);

  return isReadyForSubmit;
};

export default useIsReadyToSubmit;
