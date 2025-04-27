import { useEffect, useRef, useState } from "react";
import { CARD_FORM_TYPE } from "../constants/card";
import { CardFormType } from "../types/card";
import { useCard } from "./useCard";
import { useCardValidation } from "./useCardValidation";

const formSequence = [
  CARD_FORM_TYPE.cardNumbers,
  CARD_FORM_TYPE.cardCompany,
  CARD_FORM_TYPE.expirationPeriod,
  CARD_FORM_TYPE.cvcNumber,
  CARD_FORM_TYPE.password,
];

const initialVisibleState = {
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
  const [visibleFields, setVisibleFields] =
    useState<Record<CardFormType, boolean>>(initialVisibleState);
  const [currentField, setCurrentField] = useState<CardFormType>(
    CARD_FORM_TYPE.cardNumbers
  );
  const filledState = useRef(initialFilledState);
  const { hasErrorByType } = useCardValidation();
  const { isFieldFilled } = useCard();

  const updateFieldCompletionState = (isFieldComplete: boolean): boolean => {
    switch (currentField) {
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

  const showNextField = () => {
    const currentIndex = formSequence.indexOf(currentField);
    if (currentIndex < formSequence.length - 1) {
      const nextField = formSequence[currentIndex + 1];

      setVisibleFields((prev) => ({
        ...prev,
        [nextField]: true,
      }));

      setCurrentField(nextField);
    }
  };

  useEffect(() => {
    const isFieldComplete =
      isFieldFilled(currentField) && !hasErrorByType(currentField);

    const isStateChanged = updateFieldCompletionState(isFieldComplete);

    if (isStateChanged && isFieldComplete) showNextField();
  }, [currentField, isFieldFilled, hasErrorByType]);

  const shouldShowField = (type: CardFormType): boolean => visibleFields[type];

  return shouldShowField;
}
