import { useMemo } from "react";
import { isErrorCompletesType, isStateCompletesType } from "../../types/CardInformationType";

const useAllComplete = (isStateCompletes: isStateCompletesType, isErrorCompletes: isErrorCompletesType) => {
  return useMemo(() => {
    const isAllStateCompletes = Object.values(isStateCompletes).every((isComplete) => isComplete === true);
    const isAllErrorCompletes = Object.values(isErrorCompletes).every((isErrorComplete) => isErrorComplete === true);

    if (isAllStateCompletes && isAllErrorCompletes) return true;
    return false;
  }, [isStateCompletes, isErrorCompletes]);
};

export default useAllComplete;
