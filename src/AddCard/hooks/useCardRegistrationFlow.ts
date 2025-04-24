import { useMemo, useRef } from "react";
import useControlledCardNumber from "../components/AddCardForm/components/CardNumber/hooks/useControlledCardNumber";
import useControlledExpireDate from "../components/AddCardForm/components/ExpireDate/hooks/useControlledExpireDate";
import useControlledCVC from "../components/AddCardForm/components/CVC/hooks/useControlledCVC";
import useControlledSelectedCardBrand from "../components/AddCardForm/components/CardBrand/hooks/useControlledSelectCardBrand";
import useControlledPassword from "../components/AddCardForm/components/Password/hooks/useControlledPassword";
import { STEP_ORDER } from "../constants";
import { validators } from "../validation";

const useCardRegistrationFlow = () => {
  const card = useControlledCardNumber();
  const brand = useControlledSelectedCardBrand();
  const expire = useControlledExpireDate();
  const cvc = useControlledCVC();
  const password = useControlledPassword();

  const maxReachedStep = useRef(0);

  const slices = { card, brand, expire, cvc, password };

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
    password.passwordState,
  ]);

  return {
    state: { ...card, ...brand, ...expire, ...cvc, ...password },
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
