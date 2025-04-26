import { useState, useEffect, useRef } from "react";
import { CARD_FORM_TYPE } from "../constants/constants";
import { CardFormType } from "../types/types";
import { useCardValidation } from "./useCardValidation";
import { useCard } from "./useCard";

const formSequence = [
  CARD_FORM_TYPE.cardNumbers,
  CARD_FORM_TYPE.cardCompany,
  CARD_FORM_TYPE.expirationPeriod,
  CARD_FORM_TYPE.cvcNumber,
  CARD_FORM_TYPE.password,
];

const initialActiveState = {
  [CARD_FORM_TYPE.cardNumbers]: true,
  [CARD_FORM_TYPE.cardCompany]: false,
  [CARD_FORM_TYPE.expirationPeriod]: false,
  [CARD_FORM_TYPE.cvcNumber]: false,
  [CARD_FORM_TYPE.password]: false,
};

const initialFilledState = {
  [CARD_FORM_TYPE.cardNumbers]: false,
  [CARD_FORM_TYPE.cardCompany]: false,
  [CARD_FORM_TYPE.expirationPeriod]: false,
  [CARD_FORM_TYPE.cvcNumber]: false,
  [CARD_FORM_TYPE.password]: false,
};

export default function useSequentialForm() {
  const [activeFields, setActiveFields] =
    useState<Record<CardFormType, boolean>>(initialActiveState);
  const [currentActiveField, setCurrentActiveField] = useState<CardFormType>(
    CARD_FORM_TYPE.cardNumbers
  );
  const filledState = useRef(initialFilledState);

  const { hasErrorByType } = useCardValidation();
  const { isFieldFilled } = useCard();

  const checkFieldComplete = (isFieldComplete: boolean) => {
    switch (currentActiveField) {
      case CARD_FORM_TYPE.cardNumbers:
        if (
          filledState.current[CARD_FORM_TYPE.cardNumbers] !== isFieldComplete
        ) {
          filledState.current[CARD_FORM_TYPE.cardNumbers] = isFieldComplete;
          return true;
        }
        return false;
      case CARD_FORM_TYPE.cardCompany:
        if (
          filledState.current[CARD_FORM_TYPE.cardCompany] !== isFieldComplete
        ) {
          filledState.current[CARD_FORM_TYPE.cardCompany] = isFieldComplete;
          return true;
        }
        return false;
      case CARD_FORM_TYPE.expirationPeriod:
        if (
          filledState.current[CARD_FORM_TYPE.expirationPeriod] !==
          isFieldComplete
        ) {
          filledState.current[CARD_FORM_TYPE.expirationPeriod] =
            isFieldComplete;
          return true;
        }
        return false;
      case CARD_FORM_TYPE.cvcNumber:
        if (filledState.current[CARD_FORM_TYPE.cvcNumber] !== isFieldComplete) {
          filledState.current[CARD_FORM_TYPE.cvcNumber] = isFieldComplete;
          return true;
        }
        return false;
      case CARD_FORM_TYPE.password:
        if (filledState.current[CARD_FORM_TYPE.password] !== isFieldComplete) {
          filledState.current[CARD_FORM_TYPE.password] = isFieldComplete;
          return true;
        }
        return false;
      default:
        return false;
    }
  };

  const activeNextField = () => {
    const currentIndex = formSequence.indexOf(currentActiveField);
    if (currentIndex < formSequence.length - 1) {
      const nextField = formSequence[currentIndex + 1];

      setActiveFields((prev) => ({
        ...prev,
        [nextField]: true,
      }));

      setCurrentActiveField(nextField);
    }
  };

  useEffect(() => {
    const isFieldComplete =
      isFieldFilled(currentActiveField) && !hasErrorByType(currentActiveField);

    const isStateChanged = checkFieldComplete(isFieldComplete);

    if (isStateChanged && isFieldComplete) activeNextField();
  }, [currentActiveField, isFieldFilled, hasErrorByType]);

  const shouldShowField = (type: CardFormType): boolean => {
    return activeFields[type];
  };

  return shouldShowField;
}
