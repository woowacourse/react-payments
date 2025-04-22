import { useMemo } from "react";
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
  // CVC
  ({ cvc }: Slices) =>
    !cvc.CVCState.errorMessage && cvc.CVCState.value.length === 3,
];

const useCardRegistrationFlow = () => {
  const card = useControlledCardNumber();
  const brand = useControlledSelectedCardBrand();
  const expire = useControlledExpireDate();
  const cvc = useControlledCVC();

  const slices = { card, brand, expire, cvc };

  const { stepIndex, allValid } = useMemo(() => {
    let firstFail = validators.length;
    let validAll = true;

    validators.forEach((fn, i) => {
      const result = fn(slices);
      if (result === false) {
        validAll = false;
        if (firstFail === validators.length) {
          firstFail = i;
        }
      }
    });

    return { stepIndex: firstFail, allValid: validAll };
  }, [
    card.cardNumberState,
    brand.selectedBrand,
    expire.expireDate,
    cvc.CVCState,
  ]);

  // currentStep 결정
  let currentStep: FlowStep;
  if (stepIndex < STEP_ORDER.length) {
    currentStep = STEP_ORDER[stepIndex];
  } else {
    currentStep = STEP_ORDER[STEP_ORDER.length - 1];
  }

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
