import { useState } from "react";

const useInput = ({ initialValue, isValid }) => {
  const [value, setValue] = useState(initialValue);

  const handler = ({ target }) => {
    if (isValid && !isValid(target.value)) return;

    setValue(target.value);
  };

  return [value, handler];
};

export default useInput;
