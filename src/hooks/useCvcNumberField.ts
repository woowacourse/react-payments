import { useState } from "react";
import { getCvcNumberErrorMessage } from "../utils/getCvcNumberErrorMessage";

export default function useCvcNumberField() {
  const [cvcNumbers, setCvcNumbers] = useState("");

  const [isCvcNumberCompleted, setIsCvcNumberCompleted] = useState(false);

  const onCvcNumberChange = (value: string) => setCvcNumbers(value);

  const onCvcNumberComplete = (isCompleted: boolean) => {
    if (isCompleted) setIsCvcNumberCompleted(true);
  };

  const isCvcNumberValid = getCvcNumberErrorMessage(cvcNumbers) === null;

  return {
    cvcNumbers,
    isCvcNumberCompleted,
    onCvcNumberChange,
    onCvcNumberComplete,
    isCvcNumberValid,
  };
}
