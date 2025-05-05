import { useMemo } from "react";
import { ValidCardTuple } from "../../types/CardInformationType";

export const useCheckLengthComplete = (state: ValidCardTuple, maxLength: number): boolean => {
  return useMemo(() => {
    if (Array.isArray(state)) return state.every((item) => item.length === maxLength);
    return state.length === maxLength;
  }, [state]);
};

export default useCheckLengthComplete;
