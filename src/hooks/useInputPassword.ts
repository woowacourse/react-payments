import { useState } from "react";
import { validation } from "../validation/input";

export function useInputPassword() {
  const [password, setPassword] = useState<any>({
    firstPassword: "",
    secondPassword: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (!validation.isNumber(value)) {
      e.target.value = password[name];
    } else {
      setPassword({
        ...password,
        [name]: value,
      });
    }
  }

  return { password, handleChange };
}
