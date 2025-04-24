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

  const currentIndex = STEP_ORDER.indexOf(currentStep);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentIndex === 0) {
        firstCardNumberInputRef.current?.focus();
      } else if (currentIndex === 1) {
        brandDropdownRef.current?.focus();
      } else if (currentIndex === 2) {
        expireMonthInputRef.current?.focus();
      } else if (currentIndex === 3) {
        cvcInputRef.current?.focus();
      } else if (currentIndex === 4) {
        passwordInputRef.current?.focus();
      } else if (allValid) {
        addCardButtonRef.current?.focus();
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, allValid]);

  return {
    firstCardNumberInputRef,
    brandDropdownRef,
    expireMonthInputRef,
    cvcInputRef,
    passwordInputRef,
    addCardButtonRef,
  };
}
