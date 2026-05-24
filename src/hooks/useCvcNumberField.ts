import { useState } from "react";
import { getCvcNumberErrorMessage } from "../utils/getCvcNumberErrorMessage";

export default function useCvcNumberField() {
  const [cvcNumbers, setCvcNumbers] = useState("");

  const onCvcNumberChange = (value: string) => setCvcNumbers(value);

  const isCvcNumberValid = getCvcNumberErrorMessage(cvcNumbers) === null;

  return {
    cvcNumbers,
    onCvcNumberChange,
    isCvcNumberValid,
  };
}
