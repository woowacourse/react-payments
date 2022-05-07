import { useEffect, useState } from "react";
import { CardInfoValidationTarget } from "types/cardInfo";

// @TODO 타입 일반화 수정
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
