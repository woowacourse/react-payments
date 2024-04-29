import { useMemo } from "react";

type IsValidStates = boolean[];

const useIsReadyToSubmit = (isValidStates: IsValidStates) => {
  return useMemo(
    () => isValidStates.every((isValid) => isValid),
    [isValidStates]
  );
};

export default useIsReadyToSubmit;
