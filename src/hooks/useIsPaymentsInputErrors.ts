import { useState } from 'react';

type UseIsPaymentsInputErrors<T extends number> = T extends 1
  ? [boolean, (isError: boolean) => void]
  : [boolean[], (index: number) => (isError: boolean) => void];

export const useIsPaymentsInputErrors = <T extends number>(
  inputCount: T
): UseIsPaymentsInputErrors<T> => {
  if (inputCount < 1) {
    throw new Error(`[ERROR] useIsPaymentsInputErrors: 1 이상의 숫자만 넣어주세요.`);
  }

  const [isInputErrors, setIsInputErrors] = useState<boolean[]>(
    Array.from({ length: inputCount }).map(() => false)
  );

  const setIsInputError = (index: number) => (isError: boolean) => {
    setIsInputErrors((prev) => {
      prev[index] = isError;

      return [...prev];
    });
  };

  return inputCount === 1
    ? ([isInputErrors[0], setIsInputError(0)] as UseIsPaymentsInputErrors<T>)
    : ([isInputErrors, setIsInputError] as UseIsPaymentsInputErrors<T>);
};
