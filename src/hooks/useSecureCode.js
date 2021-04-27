import { useState } from "react";
import { isNumberValue } from "../utils";

const useSecureCode = (initialValue) => {
  const [secureCode, setSecureCode] = useState(initialValue);

  const onSecureCodeChange = (event) => {
    const { value } = event.target;

    if (!isNumberValue(value)) {
      return;
    }

    setSecureCode(value);
  };

  return [secureCode, onSecureCodeChange];
};

export default useSecureCode;
