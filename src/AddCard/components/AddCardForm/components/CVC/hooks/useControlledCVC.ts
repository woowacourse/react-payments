import { useCallback, useState } from "react";
import { CVC_INPUT_LENGTH } from "../constants";
import { validateCVCNumber } from "../validation";

const useControlledCVC = () => {
  const [CVCState, setCVCState] = useState({
    value: "",
    errorMessage: "",
  });

  const handleCVCChange = useCallback((value: string) => {
    if (value.length > CVC_INPUT_LENGTH) {
      return;
    }
    const numeric = Number(value);

    if (isNaN(numeric)) {
      setCVCState((prevState) => ({
        ...prevState,
        errorMessage: validateCVCNumber(value),
      }));
      return;
    }

    setCVCState(() => ({
      value,
      errorMessage: validateCVCNumber(value),
    }));
  }, []);

  return { CVCState, handleCVCChange };
};

export default useControlledCVC;
