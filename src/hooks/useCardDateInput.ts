import { useEffect, useState } from "react";
import {
  isCardDateLength,
  isCardMonth,
  isCardNumber,
  isCardYear,
} from "../utils/validators";
import useInput from "./useInput";

const useCardDateInput = () => {
  const [validateMessage, setValidateMessage] = useState("");

  const cardMonth = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardDateLength, isCardMonth],
  });

  const cardYear = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardDateLength, isCardYear],
  });

  // 에러 메시지 통합 관리를 위해?
  useEffect(() => {
    const messages = [cardMonth.validateMessage, cardYear.validateMessage];
    const firstErrorMessage = messages.find((msg) => msg !== "");
    setValidateMessage(firstErrorMessage || "");
  }, [cardMonth.validateMessage, cardYear.validateMessage]);

  return { cardMonth, cardYear, validateMessage };
};

export default useCardDateInput;
