import { useState } from "react";

export const useInputCompleted = () => {
  const [isCompleted, setIsCompleted] = useState(true);

  const checkInputCompleted = (value: string, length: number) => {
    setIsCompleted(false);

    if (value.length === length) {
      setIsCompleted(true);
    }
  };

  return { isCompleted, checkInputCompleted };
};
