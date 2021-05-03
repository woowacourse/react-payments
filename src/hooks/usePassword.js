import { useState } from "react";
import { isNumberValue } from "../utils";

const usePassword = (initialValue = []) => {
  if (!Array.isArray(initialValue)) {
    throw new Error("Invalid parameter. Expected an Array");
  }

  const [passwords, setPassword] = useState(initialValue);

  const onPasswordChange = (event) => {
    const { value, dataset } = event.target;

    if (!isNumberValue(value)) {
      return;
    }

    setPassword((prev) => {
      const newPassword = [...prev];

      newPassword[dataset.passwordIndex] = value;

      return newPassword;
    });
  };

  const [firstPassword, secondPassword] = passwords;

  return [firstPassword, secondPassword, passwords, onPasswordChange];
};

export default usePassword;
