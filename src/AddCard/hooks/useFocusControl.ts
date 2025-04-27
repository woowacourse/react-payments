import { useRef, useEffect } from "react";
import { STEP_ORDER } from "@/AddCard/constants";
import type { FlowStep } from "@/AddCard/types/hook";

interface FocusRefs {
  firstCardNumberInputRef: React.RefObject<HTMLInputElement | null>;
  brandDropdownRef: React.RefObject<HTMLSelectElement | null>;
  expireMonthInputRef: React.RefObject<HTMLInputElement | null>;
  cvcInputRef: React.RefObject<HTMLInputElement | null>;
  passwordInputRef: React.RefObject<HTMLInputElement | null>;
  addCardButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const isFlowStep = (step: string): step is FlowStep => {
  return STEP_ORDER.includes(step as FlowStep);
};

export function useFocusControl(
  currentStep: FlowStep,
  allValid: boolean
): FocusRefs {
  const firstCardNumberInputRef = useRef<HTMLInputElement>(null);
  const brandDropdownRef = useRef<HTMLSelectElement>(null);
  const expireMonthInputRef = useRef<HTMLInputElement>(null);
  const cvcInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const addCardButtonRef = useRef<HTMLButtonElement>(null);

  const focusMap: Record<
    Exclude<FlowStep, "COMPLETE">,
    React.RefObject<HTMLElement | null>
  > = {
    CARD_NUMBER: firstCardNumberInputRef,
    CARD_BRAND: brandDropdownRef,
    EXPIRE_DATE: expireMonthInputRef,
    CVC: cvcInputRef,
    PASSWORD: passwordInputRef,
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isFlowStep(currentStep)) return;

      if (allValid) {
        addCardButtonRef.current?.focus();
        return;
      }

      if (currentStep !== "COMPLETE") {
        focusMap[currentStep]?.current?.focus();
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [currentStep, allValid]);

  return {
    firstCardNumberInputRef,
    brandDropdownRef,
    expireMonthInputRef,
    cvcInputRef,
    passwordInputRef,
    addCardButtonRef,
  };
}
