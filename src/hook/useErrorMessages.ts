import { useState } from "react";
import type { ErrorMessagesProps } from "../types/ErrorMessagesType";

export const useErrorMessages = () => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessagesProps>({
    first: "",
    second: "",
    third: "",
    fourth: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const handleErrorMessages = (
    key: keyof ErrorMessagesProps,
    message: string
  ) => {
    setErrorMessages((prev: ErrorMessagesProps) => ({
      ...prev,
      [key]: message,
    }));
  };

  return { errorMessages, handleErrorMessages };
};
