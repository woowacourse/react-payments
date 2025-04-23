import { useCallback, useState } from "react";

export interface CVCState {
  value: string;
  isError: boolean;
}

const useControlledCVC = () => {
  const [CVCState, setCVCState] = useState<CVCState>({
    value: "",
    isError: false,
  });

  const handleCVCChange = useCallback((value: string) => {
    if (value.length > 3) {
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

  const checkCVCNextStep = useCallback(
    ({ value, isError }: CVCState) => value.length === 3 && !isError,
    []
  );

  return {
    CVCState,
    handleCVCChange,
    isCVCNextStep: checkCVCNextStep(CVCState),
  };
};

export default useControlledCVC;
