import { useMemo } from "react";
import { isStateCompletesType } from "../../types/CardInformationType";
import { isErrorCompletesType } from "../../types/useValidationType";

const useAllComplete = (isStateCompletes: isStateCompletesType, isErrorCompletes: isErrorCompletesType) => {
  return useMemo(() => {
    const isAllStateCompletes = Object.values(isStateCompletes).every((stateComplete) => stateComplete === true);
    const isAllErrorCompletes = Object.values(isErrorCompletes).every((errorComplete) => errorComplete === true);

    if (isAllStateCompletes && isAllErrorCompletes) return true;
    return false;
  }, [isStateCompletes, isErrorCompletes]);
};

export default useAllComplete;
