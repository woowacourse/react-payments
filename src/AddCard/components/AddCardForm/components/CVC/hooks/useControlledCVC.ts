import { useCallback, useState } from "react";

const useControlledCVC = () => {
  const [CVCState, setCVCState] = useState({
    value: "",
    isError: false,
  });

  const handleCVCChange = useCallback((value: string) => {
    if (value.length > 3) {
      return;
    }
    if (isNaN(Number(value))) {
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
