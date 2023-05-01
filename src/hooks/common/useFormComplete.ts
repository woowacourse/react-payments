import { useMemo } from "react";

const useFormComplete = <T extends Record<string, boolean>>(
  validationInformation: T
) => {
  const isComplete = useMemo(() => {
    return Object.values(validationInformation).every(Boolean);
  }, [validationInformation]);

  return isComplete;
};

export { useFormComplete };
