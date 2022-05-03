import { useState } from "react";

const useInput = ({ initialValue, validator }) => {
  const [value, setValue] = useState(initialValue);

  const handler = ({ target }) => {
    if (validator && !validator(target.value)) return;

    setValue(target.value);
  };

  return [value, handler];
};

export default useInput;
