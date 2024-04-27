import { useEffect, useState } from "react";
import {
  isCardCVCLength,
  isCardMonth,
  isCardNumber,
  isCardNumberLength,
  isCardYear,
  isOwnerNameLength,
  isUpperCase,
} from "../utils/validators";
import useInput from "./useInput";
import useSelect from "./useSelect";

const useCardForm = () => {
  // const [numbersErrorMessage, setNumbersErrorMessage] = useState("");
  const [step, setStep] = useState([true, false, false, false, false, false]);

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

  const cardNumbers = [cardNumber1, cardNumber2, cardNumber3, cardNumber4];

  const cardCompany = useSelect();

  const cardExpirationMonth = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardMonth],
  });

  const cardExpirationYear = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardYear],
  });

  const cardOwnerName = useInput("", {
    validateOnChange: [isUpperCase],
    validateOnBlur: [isUpperCase, isOwnerNameLength],
  });

  const cardCVC = useInput("", {
    validateOnChange: [isCardNumber],
    validateOnBlur: [isCardNumber, isCardCVCLength],
  });

  const changeNextStep = (index: number) => {
    const newStep = [...step];

    newStep[index] = true;
    setStep(newStep);
  };

  useEffect(() => {
    const cardNumbersCompleted = cardNumbers.every(
      (cn) => cn.value.length === 4 && cn.validateMessage === ""
    );
    const cardCompanyCompleted = cardCompany.value !== "";
    const cardExpirationDateCompleted = [
      cardExpirationMonth,
      cardExpirationYear,
    ].every((date) => date.value.length === 2 && date.validateMessage === "");
    const cardOwnerNameCompleted =
      cardOwnerName.value !== "" && cardOwnerName.validateMessage === "";
    const cardCVCCompleted =
      cardCVC.value !== "" && cardCVC.validateMessage === "";

    if (!step[1] && cardNumbersCompleted) {
      changeNextStep(1);
    }
    if (!step[2] && cardCompanyCompleted) {
      changeNextStep(2);
    }
    if (!step[3] && cardExpirationDateCompleted) {
      changeNextStep(3);
    }
    if (!step[4] && cardOwnerNameCompleted) {
      changeNextStep(4);
    }
    if (!step[5] && cardCVCCompleted) {
      changeNextStep(5);
    }
  }, [cardNumbers, cardCompany, cardExpirationMonth, cardExpirationYear, step]);

  // useEffect(() => {
  //   const messages = [
  //     cardNumber1.validateMessage,
  //     cardNumber2.validateMessage,
  //     cardNumber3.validateMessage,
  //     cardNumber4.validateMessage,
  //   ];
  //   const firstErrorMessage = messages.find((msg) => msg !== "");
  //   setNumbersErrorMessage(firstErrorMessage || "");
  // }, [
  //   cardNumber1.validateMessage,
  //   cardNumber2.validateMessage,
  //   cardNumber3.validateMessage,
  //   cardNumber4.validateMessage,
  // ]);

  return {
    step,
    cardNumbers,
    cardCompany,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCVC,
    // numbersErrorMessage,
  };
};

export default useCardForm;
