import { useState, useEffect, useCallback } from "react";

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
  const [isVisibleSubmitButton, setIsVisibleSubmitButton] = useState(false);

  useEffect(() => {
    const isAllValid = Object.values(validState).every(
      (condition) => condition
    );
    setIsVisibleSubmitButton(isAllValid);
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
