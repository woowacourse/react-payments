import { useState } from 'react';

type UseTouchedFieldErrorParams = {
  values: string[];
  validate: (value: string, index: number) => string | null;
};

const createFlags = (count: number) =>
  Array.from({ length: count }, () => false);

const useTouchedFieldError = ({
  values,
  validate,
}: UseTouchedFieldErrorParams) => {
  const [isTouched, setIsTouched] = useState(() => createFlags(values.length));

  const errorMessages = values.map((value, index) => {
    if (!isTouched[index]) return null;

    return validate(value, index);
  });

  const firstErrorIndex = errorMessages.findIndex(
    (message) => message !== null,
  );
  const errorMessage =
    firstErrorIndex === -1 ? '' : errorMessages[firstErrorIndex] ?? '';

  const touch = (idx: number) => {
    setIsTouched((prev) =>
      prev.map((value, index) => (idx === index ? true : value)),
    );
  };

  return {
    firstErrorIndex,
    errorMessage,
    touch,
  };
};

export default useTouchedFieldError;
