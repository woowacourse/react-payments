import { useState } from "react";
import { isNumberValue } from "../utils";

const usePassword = (initialValue) => {
  const [password, setPassword] = useState(initialValue);

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

  return [password, onPasswordChange];
};

export default usePassword;
