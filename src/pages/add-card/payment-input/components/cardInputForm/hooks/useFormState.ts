import { useState, useEffect, useCallback, useMemo } from "react";

export type ActivatedInputKey =
  | "cardNumberInput"
  | "cardBrandSelect"
  | "cardExpirationDateInput"
  | "cardCVCInput"
  | "cardPasswordInput";

const INITIAL_VALID_STATE: Record<ActivatedInputKey, boolean> = {
  cardNumberInput: false,
  cardBrandSelect: false,
  cardExpirationDateInput: false,
  cardCVCInput: false,
  cardPasswordInput: false,
};

export function useFormState() {
  const [validState, setValidState] =
    useState<Record<ActivatedInputKey, boolean>>(INITIAL_VALID_STATE);
  const [activatedInputs, setActivatedInputs] =
    useState<Record<ActivatedInputKey, boolean>>(INITIAL_VALID_STATE);

  const isVisibleSubmitButton = useMemo(() => {
    return Object.values(validState).every(Boolean);
  }, [validState]);

  const handleActivateInput = useCallback((inputName: ActivatedInputKey) => {
    setActivatedInputs((prev) => ({
      ...prev,
      [inputName]: true,
    }));
  }, []);

  const handleValidInput = useCallback(
    (inputName: ActivatedInputKey, isValid: boolean) => {
      setValidState((prev) => ({
        ...prev,
        [inputName]: isValid,
      }));
    },
    []
  );

  return {
    activatedInputs,
    isVisibleSubmitButton,
    handleActivateInput,
    handleValidInput,
  };
}
