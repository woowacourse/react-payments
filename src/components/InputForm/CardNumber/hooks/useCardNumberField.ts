import { useMemo, useRef } from "react";
import { validateSegmentLength } from "../../validation";
import { CardInfo } from "../../../../hooks/useCardInfo";

function useCardNumberField(cardInfo: CardInfo, maxLength: number) {
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const segmentValidations = useMemo(() => {
    return [
      validateSegmentLength(cardInfo.firstNumber, maxLength),
      validateSegmentLength(cardInfo.secondNumber, maxLength),
      validateSegmentLength(cardInfo.thirdNumber, maxLength),
      validateSegmentLength(cardInfo.fourthNumber, maxLength),
    ];
  }, [
    cardInfo.firstNumber,
    cardInfo.secondNumber,
    cardInfo.thirdNumber,
    cardInfo.fourthNumber,
    maxLength,
  ]);

  const errorMessage =
    segmentValidations.find((v) => !v.isValid)?.errorMessage || "";

  const focusSecondInput = () => secondInputRef.current?.focus();
  const focusThirdInput = () => thirdInputRef.current?.focus();
  const focusFourthInput = () => fourthInputRef.current?.focus();

  return {
    refs: {
      second: secondInputRef,
      third: thirdInputRef,
      fourth: fourthInputRef,
    },
    focusHandlers: {
      second: focusSecondInput,
      third: focusThirdInput,
      fourth: focusFourthInput,
    },
    segmentValidations,
    errorMessage,
  };
}

export default useCardNumberField;
