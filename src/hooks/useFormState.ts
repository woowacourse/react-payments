import { useEffect, useState } from "react";
import { isValidInfo } from "validation";

const useFormState = (cardAllInfo: {}) => {
  const areAllInputsFilled = isValidInfo(cardAllInfo);

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    setIsFormFilled(areAllInputsFilled);
  }, [areAllInputsFilled]);

  return { isFormFilled };
};

export default useFormState;
