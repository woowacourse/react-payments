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

  const activateInput = useCallback((inputName: ActivatedInputKey) => {
    setActivatedInputs((prev) => ({
      ...prev,
      [inputName]: true,
    }));
  }, []);

  const handleActivateCardBrandSelect = useCallback(
    () => activateInput("cardBrandSelect"),
    [activateInput]
  );
  const handleActivateExpirationDateInput = useCallback(
    () => activateInput("cardExpirationDateInput"),
    [activateInput]
  );
  const handleActivateCVCInput = useCallback(
    () => activateInput("cardCVCInput"),
    [activateInput]
  );
  const handleActivatePasswordInput = useCallback(
    () => activateInput("cardPasswordInput"),
    [activateInput]
  );

  const handleSetValidCardNumberInput = useCallback((isValid: boolean) => {
    setValidState((prev) => ({
      ...prev,
      cardNumberInput: isValid,
    }));
  }, []);

  const handleSetValidCardBrandSelect = useCallback((isValid: boolean) => {
    setValidState((prev) => ({
      ...prev,
      cardBrandSelect: isValid,
    }));
  }, []);

  const handleSetValidExpirationDateInput = useCallback((isValid: boolean) => {
    setValidState((prev) => ({
      ...prev,
      cardExpirationDateInput: isValid,
    }));
  }, []);

  const handleSetValidCVCInput = useCallback((isValid: boolean) => {
    setValidState((prev) => ({
      ...prev,
      cardCVCInput: isValid,
    }));
  }, []);

  const handleSetValidPasswordInput = useCallback((isValid: boolean) => {
    setValidState((prev) => ({
      ...prev,
      cardPasswordInput: isValid,
    }));
  }, []);

  return {
    activatedInputs,
    isVisibleSubmitButton,
    handleActivateCardBrandSelect,
    handleActivateExpirationDateInput,
    handleActivateCVCInput,
    handleActivatePasswordInput,
    handleSetValidCardNumberInput,
    handleSetValidCardBrandSelect,
    handleSetValidExpirationDateInput,
    handleSetValidCVCInput,
    handleSetValidPasswordInput,
  };
}
