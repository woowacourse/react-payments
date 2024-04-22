import { useRef } from 'react';

export default function useValidator<T>(
  data: T,
  checkIsValid: (arg: T) => boolean,
  message?: string
) {
  const errorMessage = useRef<string | undefined>(undefined);
  const isError = useRef(false);

  if (checkIsValid(data)) {
    errorMessage.current = undefined;
    isError.current = false;
  } else {
    errorMessage.current = message;
    isError.current = true;
  }

  return {
    isError: isError.current,
    errorMessage: errorMessage.current,
  };
}
