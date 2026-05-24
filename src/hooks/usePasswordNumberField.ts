import { useState } from "react";
import { getPasswordErrorMessage } from "../utils/getPasswordErrorMessage";

export default function usePasswordNumberField() {
  const [passwordNumbers, setPasswordNumbers] = useState("");

  const onPasswordNumberChange = (value: string) => setPasswordNumbers(value);

  const isPasswordNumberValid =
    getPasswordErrorMessage(passwordNumbers) === null;

  return { passwordNumbers, onPasswordNumberChange, isPasswordNumberValid };
}
