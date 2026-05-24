import { useState } from "react";

export const useCardRegisterFormError = () => {
  const [formErrorMessages, setFormErrorMessages] = useState<{
    cardNumber: string | null;
    expiryDate: string | null;
    cvc: string | null;
  }>({
    cardNumber: null,
    expiryDate: null,
    cvc: null,
  });

  const updateCardNumberErrorMessage = (message: string) => {
    setFormErrorMessages({ ...formErrorMessages, cardNumber: message });
  };

  const clearCardNumberErrorMessage = () => {
    setFormErrorMessages({ ...formErrorMessages, cardNumber: null });
  };

  const updateExpiryDateErrorMessage = (message: string) => {
    setFormErrorMessages({ ...formErrorMessages, expiryDate: message });
  };

  const clearExpiryDateErrorMessage = () => {
    setFormErrorMessages({ ...formErrorMessages, expiryDate: null });
  };

  const updateCvcErrorMessage = (message: string) => {
    setFormErrorMessages({ ...formErrorMessages, cvc: message });
  };

  const clearCvcErrorMessage = () => {
    setFormErrorMessages({ ...formErrorMessages, cvc: null });
  };

  return {
    formErrorMessages,
    updateCardNumberErrorMessage,
    updateCvcErrorMessage,
    updateExpiryDateErrorMessage,
    clearCardNumberErrorMessage,
    clearCvcErrorMessage,
    clearExpiryDateErrorMessage,
  };
};
