import { CardInformation } from "../types/cardInformation";
import { CardInformationErrorState } from "./useCardInformationErrorState";
import useBoolean from "./useBoolean";
import { useEffect } from "react";

const isAllFilled = (cardInformation: CardInformation) => {
  return Object.values(cardInformation).every((cardInformationValue) => {
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
  });
};

const isExistError = (errorState: CardInformationErrorState) => {
  return Object.values(errorState).some(({ isError }) => {
    if (typeof isError === "boolean") {
      return isError;
    }
    if (Array.isArray(isError)) {
      return isError.some((el) => el);
    }
    return isError.month || isError.year;
  });
};

type dependencies = [CardInformation, CardInformationErrorState];

const useReadyForSubmit = ([cardInformation, errorState]: dependencies) => {
  const { flag: isReadyForSubmit, setFlag: setIsReadyForSubmit } = useBoolean();

  useEffect(() => {
    console.log(132213213);
    setIsReadyForSubmit(
      isAllFilled(cardInformation) && !isExistError(errorState)
    );
  }, [cardInformation, errorState]);

  return { isReadyForSubmit };
};

export default useReadyForSubmit;
