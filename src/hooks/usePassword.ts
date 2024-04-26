import { ChangeEvent, useState } from "react";

const usePassword = () => {
  const [password, setPassword] = useState({
    value: "",
    isDone: false,
  });

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword({
      ...password,
      value,
      isDone: value.length === 2,
    });
  };
  return { password, changePassword };
};

export default usePassword;
