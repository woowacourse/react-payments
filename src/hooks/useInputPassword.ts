import { useState, useEffect } from "react";
import { useError } from "./useError";

export function useInputPassword() {
  const [password, setPassword] = useState({
    first: "",
    second: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  }

  return { password, handleChange };
}
