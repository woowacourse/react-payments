import { useMemo } from "react";
import { ValidCardTuple } from "../../types/CardInformationType";

export const useCheckLengthComplete = (state: ValidCardTuple, maxLength: number): boolean => {
  return useMemo(() => {
    return state.every((item) => item.length === maxLength);
  }, [state]);
};

export default useCheckLengthComplete;
