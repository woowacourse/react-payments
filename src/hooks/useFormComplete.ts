import { useEffect, useState } from "react";
import { CardInfoValidationTarget } from "types/cardInfo";

function useFormComplete(cardInfoValidation) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(
      Object.keys(cardInfoValidation).every(
        (key: keyof CardInfoValidationTarget) => cardInfoValidation[key].isValid
      )
    );
  }, [cardInfoValidation]);

  return isComplete;
}

export default useFormComplete;
