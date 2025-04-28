import { useMemo } from "react";

export const useCheckLengthComplete = <T extends { length: number }>(state: T[], maxLength: number): boolean => {
  return useMemo(() => {
    return state.every((item) => item.length === maxLength);
  }, [state]);
};

export default useCheckLengthComplete;
