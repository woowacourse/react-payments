import { useState } from "react";
import type { ExpNumber } from "../components/InputField/ExpNumberField";
import { getExpNumberErrorMessage } from "../utils/getExpNumberErrorMessage";

export default function useExpNumberField() {
  const [expNumbers, setExpNumbers] = useState({ mm: "", yy: "" });

  const [isExpNumberCompleted, setIsExpNumberCompleted] = useState(false);

  const onExpNumberChange = (value: ExpNumber) => setExpNumbers(value);

  const onExpNumberComplete = (isCompleted: boolean) => {
    if (isCompleted) setIsExpNumberCompleted(true);
  };

  const isExpNumberValid = getExpNumberErrorMessage(expNumbers) === null;

  return {
    expNumbers,
    isExpNumberCompleted,
    onExpNumberChange,
    onExpNumberComplete,
    isExpNumberValid,
  };
}
