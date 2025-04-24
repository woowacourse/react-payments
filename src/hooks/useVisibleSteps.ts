import { useEffect, useState } from "react";
import { CompletionState } from "./useCompletion";

export function useVisibleSteps(isComplete: CompletionState) {
  const [visible, setVisible] = useState({
    cardBrand: false,
    expirationPeriod: false,
    cvcNumber: false,
    password: false,
  });

  useEffect(() => {
    if (Object.values(isComplete.cardNumbers).every(Boolean)) {
      setVisible((prev) => ({ ...prev, cardBrand: true }));
    }
    if (isComplete.cardBrand) {
      setVisible((prev) => ({ ...prev, expirationPeriod: true }));
    }
    if (Object.values(isComplete.expirationPeriod).every(Boolean)) {
      setVisible((prev) => ({ ...prev, cvcNumber: true }));
    }
    if (isComplete.cvcNumber) {
      setVisible((prev) => ({ ...prev, password: true }));
    }
  }, [isComplete]);

  return visible;
}
