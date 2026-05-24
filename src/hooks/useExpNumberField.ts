import { useState } from "react";
import type { ExpNumber } from "../components/InputField/ExpNumberField";
import { getExpNumberErrorMessage } from "../utils/getExpNumberErrorMessage";

export default function useExpNumberField() {
  const [expNumbers, setExpNumbers] = useState({ mm: "", yy: "" });

  const onExpNumberChange = (value: ExpNumber) => setExpNumbers(value);

  const isExpNumberValid = getExpNumberErrorMessage(expNumbers) === null;

  return {
    expNumbers,
    onExpNumberChange,
    isExpNumberValid,
  };
}
