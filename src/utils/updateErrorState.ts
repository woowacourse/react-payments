import { ErrorMessage } from "../types/validation";

export const updateSimpleErrorState = (errorMessage: ErrorMessage) => {
  return {
    errorMessage,
    hasError: !!errorMessage,
  };
};

export const updateMultiFieldErrorState = <T extends string>(
  errorMessage: ErrorMessage,
  position: T,
  prevErrorState: {
    errorMessage: ErrorMessage;
    hasError: Record<T, boolean>;
  }
) => {
  const newHasError = {
    ...prevErrorState.hasError,
    [position]: !!errorMessage,
  };

  const hasAnyError = Object.values(newHasError).some(Boolean);
  const finalErrorMessage =
    errorMessage || (hasAnyError ? prevErrorState.errorMessage : null);

  return {
    errorMessage: finalErrorMessage,
    hasError: newHasError,
  };
};
