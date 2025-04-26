import { useMemo } from "react";
import { errorStateType } from "../../types";

const useCheckComplete = (isError: errorStateType) => {
  return useMemo(() => {
    return isError.every((error) => !error);
  }, [isError]);
};

export default useCheckComplete;
