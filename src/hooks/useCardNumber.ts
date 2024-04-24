import { useEffect, useState } from "react";
import { isCardNumber, isCardNumberLength } from "../utils/validators";
import useInput from "./useInput";

const useCardNumberInput = () => {
  const [validateMessage, setValidateMessage] = useState("");

  const cardNumber1 = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumber2 = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumber3 = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumber4 = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  useEffect(() => {
    const messages = [
      cardNumber1.validateMessage,
      cardNumber2.validateMessage,
      cardNumber3.validateMessage,
      cardNumber4.validateMessage,
    ];
    const firstErrorMessage = messages.find((msg) => msg !== "");
    setValidateMessage(firstErrorMessage || "");
  }, [
    cardNumber1.validateMessage,
    cardNumber2.validateMessage,
    cardNumber3.validateMessage,
    cardNumber4.validateMessage,
  ]);

  return {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    validateMessage,
  };
};

export default useCardNumberInput;
