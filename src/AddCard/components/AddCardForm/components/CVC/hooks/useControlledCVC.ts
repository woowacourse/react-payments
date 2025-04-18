import { useCallback, useState } from "react";
import { CVC_INPUT_LENGTH } from "../constants";

const useControlledCVC = () => {
  const [CVCState, setCVCState] = useState({
    value: "",
    isError: false,
  });

  const handleCVCChange = useCallback((value: string) => {
    if (value.length > CVC_INPUT_LENGTH) {
      return;
    }
    const numeric = Number(value);
    if (isNaN(numeric)) {
      setCVCState((prevState) => ({
        ...prevState,
        isError: true,
      }));
      return;
    }

    const isValidLength = value.length === 0 || value.length === 3;
    const isValid = isNaN(Number(value)) || !isValidLength;
    setCVCState((prevState) => ({
      ...prevState,
      value,
      isError: isValid,
    }));
  }, []);

  return { CVCState, handleCVCChange };
};

export default useControlledCVC;
