import { useState } from "react";

const defaultIsComplete = {
  cardNumbers: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
  cardBrand: false,
  expirationPeriod: {
    month: false,
    year: false,
  },
  cvcNumber: false,
  password: false,
};

export function useCompletion() {
  const [isComplete, setIsComplete] = useState(defaultIsComplete);

  return {
    isComplete,
  };
}
