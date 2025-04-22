import { useState, useEffect, useMemo } from "react";
import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";

export type FlowStep = "CARD_NUMBER" | "EXPIRE_DATE" | "CVC" | "COMPLETE";

const STEP_ORDER: FlowStep[] = [
  "CARD_NUMBER",
  "EXPIRE_DATE",
  "CVC",
  "COMPLETE",
];

const validators: Record<
  Exclude<FlowStep, "COMPLETE">,
  (s: Slices) => boolean
> = {
  CARD_NUMBER: ({ card }) =>
    Object.values(card.cardNumberState).every(
      ({ value, errorMessage }) => !errorMessage && value.length === 4
    ),
  EXPIRE_DATE: ({ expire }) =>
    Object.values(expire.expireDate).every(
      ({ value, errorMessage }) => !errorMessage && value.length === 2
    ),
  CVC: ({ cvc }) =>
    !cvc.CVCState.errorMessage && cvc.CVCState.value.length === 3,
};

const isComplete = (s: Slices) =>
  ["CARD_NUMBER", "EXPIRE_DATE", "CVC"].every((k) =>
    validators[k as keyof typeof validators](s)
  );

const firstInvalidStep = (s: Slices): FlowStep =>
  (STEP_ORDER.find(
    (k) => k !== "COMPLETE" && !validators[k as keyof typeof validators](s)
  ) ?? "CARD_NUMBER") as FlowStep;

const nextStep = (step: FlowStep): FlowStep =>
  STEP_ORDER[Math.min(STEP_ORDER.indexOf(step) + 1, STEP_ORDER.length - 1)];

type CardSlice = ReturnType<typeof useControlledCardNumber>;
type ExpireSlice = ReturnType<typeof useControlledExpireDate>;
type CVCSlice = ReturnType<typeof useControlledCVC>;
type Slices = { card: CardSlice; expire: ExpireSlice; cvc: CVCSlice };

const useCardRegistrationFlow = () => {
  const card = useControlledCardNumber();
  const expire = useControlledExpireDate();
  const cvc = useControlledCVC();

  const slices: Slices = { card, expire, cvc };

  const [currentStep, setStep] = useState<FlowStep>("CARD_NUMBER");

  useEffect(() => {
    const validNow =
      currentStep === "COMPLETE"
        ? isComplete(slices)
        : validators[currentStep as keyof typeof validators](slices);

    if (validNow) {
      if (currentStep !== "COMPLETE") setStep(nextStep(currentStep));
    } else if (currentStep === "COMPLETE") {
      setStep(firstInvalidStep(slices));
    }
  }, [currentStep, card.cardNumberState, expire.expireDate, cvc.CVCState]);

  const previewState = useMemo(
    () => ({
      cardNumberState: card.cardNumberState,
      expireDate: expire.expireDate,
    }),
    [card.cardNumberState, expire.expireDate]
  );

  const isStepValid = (step: FlowStep) =>
    step === "COMPLETE"
      ? isComplete(slices)
      : validators[step as keyof typeof validators](slices);

  return {
    state: { ...card, ...expire, ...cvc },
    previewState,
    currentStep,
    isStepValid,
  };
};
export default useCardRegistrationFlow;
