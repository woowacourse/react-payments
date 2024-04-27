import { useEffect, useState } from "react";
import {
  isCardCVCLength,
  isCardDateLength,
  isCardMonth,
  isCardNumber,
  isCardNumberLength,
  isCardYear,
  isOwnerNameLength,
  isPasswordLength,
  isUpperCase,
} from "../utils/validators";
import useInput from "./useInput";
import useSelect from "./useSelect";

const useCardForm = () => {
  // const [numbersErrorMessage, setNumbersErrorMessage] = useState("");
  const [step, setStep] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isCompleted, setIsCompleted] = useState(false);

  const cardNumber1 = useInput("", {
    validateOnChange: [isCardNumber, isCardNumberLength],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumber2 = useInput("", {
    validateOnChange: [isCardNumber, isCardNumberLength],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumber3 = useInput("", {
    validateOnChange: [isCardNumber, isCardNumberLength],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumber4 = useInput("", {
    validateOnChange: [isCardNumber, isCardNumberLength],
    validateOnBlur: [isCardNumber, isCardNumberLength],
  });

  const cardNumbers = [cardNumber1, cardNumber2, cardNumber3, cardNumber4];

  const cardCompany = useSelect();

  const cardExpirationMonth = useInput("", {
    validateOnChange: [isCardNumber, isCardMonth, isCardDateLength],
    validateOnBlur: [isCardNumber, isCardMonth, isCardDateLength],
  });

  const cardExpirationYear = useInput("", {
    validateOnChange: [isCardNumber, isCardYear, isCardDateLength],
    validateOnBlur: [isCardNumber, isCardYear, isCardDateLength],
  });

  const cardOwnerName = useInput("", {
    validateOnChange: [isUpperCase, isOwnerNameLength],
    validateOnBlur: [isUpperCase, isOwnerNameLength],
  });

  const cardCVC = useInput("", {
    validateOnChange: [isCardNumber, isCardCVCLength],
    validateOnBlur: [isCardNumber, isCardCVCLength],
  });

  const cardPassword = useInput("", {
    validateOnChange: [isCardNumber, isPasswordLength],
    validateOnBlur: [isCardNumber, isPasswordLength],
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
    const cardPasswordCompleted =
      cardPassword.value !== "" && cardPassword.validateMessage === "";

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
    if (!step[6] && cardPasswordCompleted) {
      changeNextStep(6);
    }

    if (
      step[6] &&
      cardNumbersCompleted &&
      cardCompanyCompleted &&
      cardExpirationDateCompleted &&
      cardOwnerNameCompleted &&
      cardCVCCompleted &&
      cardPasswordCompleted
    ) {
      setIsCompleted(true);
    }
    if (
      step[6] &&
      !(
        cardNumbersCompleted &&
        cardCompanyCompleted &&
        cardExpirationDateCompleted &&
        cardOwnerNameCompleted &&
        cardCVCCompleted &&
        cardPasswordCompleted
      )
    ) {
      setIsCompleted(false);
    }
  }, [
    step,
    cardNumbers,
    cardCompany,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCVC,
    cardPassword,
  ]);

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
    cardPassword,
    isCompleted,
    // numbersErrorMessage,
  };
};

export default useCardForm;
