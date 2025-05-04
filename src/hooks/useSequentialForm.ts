import { useEffect, useRef, useState } from "react";
import { CARD_FORM_TYPE } from "../constants/card";
import { CardFormType } from "../types/card";
import { useCard } from "./useCard";
import { useCardValidation } from "./useCardValidation";

const formSequence = [
  CARD_FORM_TYPE.cardNumber,
  CARD_FORM_TYPE.cardCompany,
  CARD_FORM_TYPE.expirationPeriod,
  CARD_FORM_TYPE.cvcNumber,
  CARD_FORM_TYPE.password,
];

const initialState = {
  [CARD_FORM_TYPE.cardNumber]: false,
  [CARD_FORM_TYPE.cardCompany]: false,
  [CARD_FORM_TYPE.expirationPeriod]: false,
  [CARD_FORM_TYPE.cvcNumber]: false,
  [CARD_FORM_TYPE.password]: false,
};

export default function useSequentialForm() {
  const [visibleFields, setVisibleFields] = useState<
    Record<CardFormType, boolean>
  >({ ...initialState, [CARD_FORM_TYPE.cardNumber]: true });
  const [currentField, setCurrentField] = useState<CardFormType>(
    CARD_FORM_TYPE.cardNumber
  );
  const filledState = useRef(initialState);
  const { hasErrorByType } = useCardValidation();
  const { isFieldFilled } = useCard();

  const updateFieldCompletionState = (isFieldComplete: boolean): boolean => {
    if (filledState.current[currentField] !== isFieldComplete) {
      filledState.current[currentField] = isFieldComplete;
      return true;
    }
    return false;
  };

  const showNextField = () => {
    const currentIndex = formSequence.indexOf(currentField);
    const nextField = formSequence[currentIndex + 1];
    if (!nextField) return;

    setVisibleFields((prev) => ({
      ...prev,
      [nextField]: true,
    }));

    setCurrentField(nextField);
  };

  useEffect(() => {
    const isFieldComplete =
      isFieldFilled(currentField) && !hasErrorByType(currentField);

    const isStateChanged = updateFieldCompletionState(isFieldComplete);

    if (isStateChanged && isFieldComplete) showNextField();
  }, [currentField, isFieldFilled, hasErrorByType]);

  const shouldShowField = (type: CardFormType): boolean => visibleFields[type];

  return { shouldShowField };
}
