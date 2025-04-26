import { useMemo } from "react";
import { isErrorCompletesType } from "../types/useValidationType";
import { isStateCompletesType } from "../types/CardInformationType";

const useAllComplete = (isStateCompletes: isStateCompletesType, isErrorCompletes: isErrorCompletesType) => {
  return useMemo(() => {
    const isAllStateCompletes = Object.values(isStateCompletes).every((bool) => bool === true);
    const isAllErrorCompletes = Object.values(isErrorCompletes).every((bool) => bool === true);

    if (isAllStateCompletes && isAllErrorCompletes) return true;
    return false;
  }, [isStateCompletes, isErrorCompletes]);
};

export default useAllComplete;
