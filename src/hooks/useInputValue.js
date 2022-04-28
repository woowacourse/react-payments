import { useState } from "react";

const useInputValue = ({ validation }) => {
  const [value, setValue] = useState("");
  const [isError, setError] = useState(false);

  const onChangeValue = ({ target }) => {
    setValue(target.value);
    if (validation && !validation(target.value)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return [value, isError, onChangeValue];
};

export default useInputValue;
