import { useMemo, useRef } from "react";
import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledSelectedCardBrand from "../components/AddCardForm/components/CardBrand/hooks/useControlledSelectCardBrand";

export type FlowStep =
  | "CARD_NUMBER"
  | "CARD_BRAND"
  | "EXPIRE_DATE"
  | "CVC"
  | "COMPLETE";

export const STEP_ORDER: FlowStep[] = [
  "CARD_NUMBER",
  "CARD_BRAND",
  "EXPIRE_DATE",
  "CVC",
  "COMPLETE",
];

type Slices = {
  card: ReturnType<typeof useControlledCardNumber>;
  brand: ReturnType<typeof useControlledSelectedCardBrand>;
  expire: ReturnType<typeof useControlledExpireDate>;
  cvc: ReturnType<typeof useControlledCVC>;
};

export const validators = [
  ({ card }: Slices) =>
    Object.values(card.cardNumberState).every(
      ({ value, errorMessage }) => !errorMessage && value.length === 4
    ),

  ({ brand }: Slices) => {
    return brand.selectedBrand != null;
  },

  ({ expire }: Slices) =>
    Object.values(expire.expireDate).every(
      ({ value, errorMessage }) => !errorMessage && value.length === 2
    ),

  ({ cvc }: Slices) =>
    !cvc.CVCState.errorMessage && cvc.CVCState.value.length === 3,
];

const useCardRegistrationFlow = () => {
  const card = useControlledCardNumber();
  const brand = useControlledSelectedCardBrand();
  const expire = useControlledExpireDate();
  const cvc = useControlledCVC();

  const maxReachedStep = useRef(0);

  const slices = { card, brand, expire, cvc };

  const { currentStep, allValid } = useMemo(() => {
    let validAll = true;
    let currentValidStep = 0;

    for (let i = 0; i < validators.length; i++) {
      if (validators[i](slices)) {
        currentValidStep = i + 1;
      } else {
        validAll = i >= validators.length - 1;
        break;
      }
    }

    if (currentValidStep > maxReachedStep.current) {
      maxReachedStep.current = currentValidStep;
    }

    const stepIndex = Math.min(maxReachedStep.current, STEP_ORDER.length - 1);

    return {
      currentStep: STEP_ORDER[stepIndex],
      allValid: validAll && currentValidStep >= validators.length,
    };
  }, [
    card.cardNumberState,
    brand.selectedBrand,
    expire.expireDate,
    cvc.CVCState,
  ]);

  return {
    state: { ...card, ...brand, ...expire, ...cvc },
    previewState: {
      cardNumberState: card.cardNumberState,
      selectedBrand: brand.selectedBrand,
      expireDate: expire.expireDate,
    },
    currentStep,
    allValid,
  };
};

export default useCardRegistrationFlow;
