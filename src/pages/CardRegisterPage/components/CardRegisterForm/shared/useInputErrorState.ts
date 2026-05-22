import { useState } from "react";

const useInputErrorState = (inputCount: number) => {
  const [errorMessages, setErrorMessages] = useState<Array<string | null>>(
    Array.from({ length: inputCount }, () => null),
  );

  const [isTouched, setIsTouched] = useState(
    Array.from({ length: inputCount }, () => false),
  );

  const updateErrorMessage = (index: number, message: string) => {
    const newErrorMessages = errorMessages.map((originalMessage, errorIndex) =>
      errorIndex === index ? message : originalMessage,
    );
    setErrorMessages(newErrorMessages);
  };

  const clearErrorMessage = (index: number) => {
    const newErrorMessages = errorMessages.map((originalMessage, errorIndex) =>
      errorIndex === index ? null : originalMessage,
    );
    setErrorMessages(newErrorMessages);
  };

  const firstErrorIndex = errorMessages.findIndex(
    (message) => message !== null,
  );

  const firstErrorMessage = errorMessages[firstErrorIndex];

  const touchField = (index: number) => {
    setIsTouched((prev) =>
      prev.map((touched, i) => (i === index ? true : touched)),
    );
  };

  return {
    updateErrorMessage,
    clearErrorMessage,
    firstErrorIndex,
    firstErrorMessage,
    isTouched,
    touchField,
  };
};

export default useInputErrorState;
