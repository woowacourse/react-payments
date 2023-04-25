import { useState } from "react";

export const useInputCompleted = () => {
  const [isCompleted, setIsCompleted] = useState(true);

  const checkInputCompleted = (value: string, length: number) => {
    if (value.length === length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return { isCompleted, checkInputCompleted };
};
